const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('on', scrollY > 40), { passive: true });

document.getElementById('hero-body').style.cssText = 'opacity:0;transition:opacity .5s ease .1s';
document.getElementById('hero-stats').style.cssText = 'opacity:0;transition:opacity .6s ease .5s';
setTimeout(() => {
  document.getElementById('hero-body').style.opacity = '1';
  document.getElementById('hero-stats').style.opacity = '1';
}, 60);

const CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const ws = [
  { el: document.getElementById('w1'), t: 'DIGITAL', s: 0 },
  { el: document.getElementById('w2'), t: 'MEDIA',   s: .25 },
  { el: document.getElementById('w3'), t: 'DESIGN',  s: .5 },
];
let i = 0;
const timer = setInterval(() => {
  i++;
  const p = i / 80;
  ws.forEach(({ el, t, s }) => {
    const l = Math.max(0, (p - s) / .5);
    el.textContent = [...t].map((c, j) => j / t.length < l ? c : CH[Math.random() * CH.length | 0]).join('');
  });
  if (i >= 80) { clearInterval(timer); ws.forEach(({ el, t }) => el.textContent = t); }
}, 40);

const obs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.r').forEach(el => obs.observe(el));
