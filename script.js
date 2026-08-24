const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('.quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const success = event.currentTarget.querySelector('.form-success');
  success.style.display = 'block';
  success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Mouvement subtil du hero : enrichit l'expérience sans gêner la navigation.
const hero = document.querySelector('.hero');
const browserMockup = document.querySelector('.main-browser');
if (hero && browserMockup && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    hero.style.setProperty('--spot-x', `${x * 100}%`);
    hero.style.setProperty('--spot-y', `${y * 100}%`);
    browserMockup.style.setProperty('--tilt-x', `${(x - 0.5) * 4}deg`);
    browserMockup.style.setProperty('--tilt-y', `${(0.5 - y) * 4}deg`);
  });
}

// Progression, curseur éditorial et parallaxe : une expérience vivante mais légère.
const progress = document.querySelector('.scroll-progress');
const cursor = document.querySelector('.cursor');
const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const updateScroll = () => {
  const available = document.documentElement.scrollHeight - innerHeight;
  progress?.style.setProperty('--progress', `${available > 0 ? (scrollY / available) * 100 : 0}%`);
  document.documentElement.style.setProperty('--scroll', `${scrollY}px`);
};
addEventListener('scroll', updateScroll, { passive: true });
updateScroll();

if (cursor && motionAllowed && matchMedia('(pointer:fine)').matches) {
  addEventListener('pointermove', ({ clientX, clientY }) => {
    cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    cursor.classList.add('is-visible');
  });
  document.querySelectorAll('a, button, summary, .project, .benefit').forEach((item) => {
    item.addEventListener('pointerenter', () => cursor.classList.add('is-active'));
    item.addEventListener('pointerleave', () => cursor.classList.remove('is-active'));
  });
}

if (motionAllowed) {
  document.querySelectorAll('.project-image, .sector img').forEach((media) => {
    media.closest('.project, .sector')?.addEventListener('pointermove', (event) => {
      const box = event.currentTarget.getBoundingClientRect();
      media.style.setProperty('--media-x', `${((event.clientX - box.left) / box.width - .5) * 12}px`);
      media.style.setProperty('--media-y', `${((event.clientY - box.top) / box.height - .5) * 12}px`);
    });
  });
}
