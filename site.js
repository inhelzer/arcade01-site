const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const groups = [...document.querySelectorAll('.nav-group')];
const search = document.querySelector('.site-search');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 32);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'סגירת תפריט' : 'פתיחת תפריט');
});
for (const group of groups) {
  group.addEventListener('toggle', () => {
    if (group.open) groups.filter(other => other !== group).forEach(other => { other.open = false; });
  });
}
document.addEventListener('click', event => {
  if (!header.contains(event.target)) {
    groups.forEach(group => { group.open = false; });
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    groups.forEach(group => { group.open = false; });
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    search.hidden = true;
    toggle.focus();
  }
});
document.querySelector('.search-toggle').addEventListener('click', () => {
  search.hidden = !search.hidden;
  if (!search.hidden) document.querySelector('#site-query').focus();
});
search.addEventListener('submit', event => {
  event.preventDefault();
  const query = document.querySelector('#site-query').value.trim();
  if (query) window.location.href = 'https://sites.google.com/hadash-holon.org.il/arcade01/search?query=' + encodeURIComponent(query);
});

for (const carousel of document.querySelectorAll('.mr3rhf')) {
  const slides = [...carousel.querySelectorAll('.nQBJnb')];
  let active = 0;
  const show = step => {
    active = (active + step + slides.length) % slides.length;
    slides.forEach((slide, index) => { slide.style.display = index === active ? 'block' : 'none'; });
  };
  if (!slides.length) continue;
  show(0);
  carousel.querySelectorAll('[role="button"]').forEach(button => {
    const step = button.getAttribute('aria-label') === 'הקודם' ? -1 : 1;
    button.addEventListener('click', () => show(step));
    button.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); show(step); }
    });
  });
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') show(1);
    if (event.key === 'ArrowLeft') show(-1);
  });
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => { if (!carousel.matches(':hover,:focus-within')) show(1); }, 3600);
  }
}
