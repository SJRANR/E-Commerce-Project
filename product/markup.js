(() => {
  const slider = document.getElementById('slider');
  const track  = document.getElementById('track');
  const prev   = document.getElementById('prev');
  const next   = document.getElementById('next');
  const dotsEl = document.getElementById('dots');

  const GAP = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gap')) || 16;

  let slides = Array.from(track.children);
  const slideW = () => slides[0].getBoundingClientRect().width;

  // Clone for infinite effect
  const cloneHead = slides.slice(0, 2).map(s => s.cloneNode(true));
  const cloneTail = slides.slice(-2).map(s => s.cloneNode(true));
  cloneHead.forEach(n => track.appendChild(n));
  cloneTail.forEach(n => track.insertBefore(n, track.firstChild));

  // Re-read slides after cloning
  slides = Array.from(track.children);

  // State
  const originalCount = slides.length - 4;
  let index = 0;              // 0..originalCount-1
  let allowAnim = true;
  let autoTimer = null;
  let isPaused = false;

  // Build dots
  const dots = [];
  for (let i = 0; i < originalCount; i++){
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' is-active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
    dots.push(d);
  }

  function setActiveDot(i){
    dots.forEach((d, k) => d.classList.toggle('is-active', k === i));
  }

  // Position track so that visual index 0 is the first real slide after the prepended clones
  function baseOffset(){
    return -((slideW() + GAP) * 2);
  }

  function translateXFor(i){
    return baseOffset() - i * (slideW() + GAP);
  }

  function applyCurve(){
    // Curvature around current index within visible window
    const cards = Array.from(track.querySelectorAll('.card'));
    const visibleCenter = 2; // assume around 5 visible on desktop
    const start = Math.max(0, Math.floor((2 + index) - 6));
    const end   = Math.min(cards.length, start + 14);

    cards.forEach((c, k) => {
      const centerIdx = 2 + index + 2; // rough relative center including leading clones
      const dist = Math.abs(k - centerIdx);
      const tilt = Math.max(-18, Math.min(18, (k < centerIdx ? -1 : 1) * Math.min(12 + dist * 1.2, 18)));
      c.style.setProperty('--tilt', `${tilt}deg`);
      c.classList.toggle('is-active', k === centerIdx);
    });
  }

  function sync(){
    track.style.transform = `translate3d(${translateXFor(index)}px,0,0)`;
    setActiveDot(index);
    applyCurve();
  }

  function withoutTransition(fn){
    const old = track.style.transition;
    track.style.transition = 'none';
    fn();
    track.offsetHeight; // reflow
    track.style.transition = old || '';
  }

  function goTo(i){
    index = i;
    sync();
  }

  function step(dir){
    index += dir;
    allowAnim = true;
    sync();
  }

  // Handle seamless edges on transition end
  track.addEventListener('transitionend', () => {
    const total = originalCount;
    if (index < 0){
      withoutTransition(() => { index = total - 1; sync(); });
    } else if (index >= total){
      withoutTransition(() => { index = 0; sync(); });
    }
  });

  // Controls
  prev.addEventListener('click', () => { step(-1); restartAuto(); });
  next.addEventListener('click', () => { step( 1); restartAuto(); });

  // Keyboard
  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { step(-1); restartAuto(); }
    if (e.key === 'ArrowRight') { step( 1); restartAuto(); }
  });

  // Autoplay
  function startAuto(){
    clearInterval(autoTimer);
    autoTimer = setInterval(() => { if(!isPaused) step(1); }, parseTime(getCssVar('--auto-delay', '2200ms')));
  }
  function restartAuto(){ startAuto(); }

  function parseTime(str){
    if (String(str).endsWith('ms')) return parseFloat(str);
    if (String(str).endsWith('s'))  return parseFloat(str) * 1000;
    return 2200;
  }
  function getCssVar(name, fallback){
    return getComputedStyle(document.documentElement).getPropertyValue(name)?.trim() || fallback;
  }

  // Pause on hover / focus / touch
  const pause = (p) => {
    isPaused = p;
    slider.classList.toggle('is-paused', p);
  };
  slider.addEventListener('mouseenter', () => pause(true));
  slider.addEventListener('mouseleave', () => pause(false));
  slider.addEventListener('focusin',  () => pause(true));
  slider.addEventListener('focusout', () => pause(false));

  // Swipe
  let x0 = null;
  slider.addEventListener('pointerdown', e => { x0 = e.clientX; slider.setPointerCapture(e.pointerId); pause(true); });
  slider.addEventListener('pointerup',   e => { if(x0==null) return; const dx = e.clientX - x0; if (Math.abs(dx) > 30) step(dx<0?1:-1); x0=null; pause(false); restartAuto(); });

  // Initialize sizes after images load
  window.addEventListener('load', () => {
    withoutTransition(() => { sync(); });
    startAuto();
  });
  window.addEventListener('resize', () => { withoutTransition(() => sync()); });
})();
