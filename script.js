const btnActive = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if(event.type === 'touchstart') event.preventDefault;
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if(active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
btnActive.addEventListener('click', toggleMenu);
btnActive.addEventListener('touchstart', toggleMenu);
// scroll animado
const windowMetade = window.innerHeight * 0.6;
const sections = document.querySelectorAll('.js-scroll');
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isVisible = sectionTop - windowMetade < 0;
    if(isVisible) {
      section.classList.add('ativo');
    };
  });
}
animaScroll();
window.addEventListener('scroll', animaScroll);