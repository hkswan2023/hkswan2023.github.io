const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function highlightNav() {
  let current = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    if (scrollY >= secTop) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').toLowerCase() === `#${current}`) link.classList.add('active');
  });
}
window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

function toggleNav() {
  document.getElementById('navbar').classList.toggle('show');
}