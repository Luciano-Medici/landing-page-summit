const menu = document.querySelector('.menu');
const hamburger = menu.querySelector('.hamburger');
const options = menu.querySelector('.options');

hamburger.addEventListener('click', () => {
  const isExpanded = menu.classList.toggle('expand');
  hamburger.setAttribute('aria-expanded', isExpanded);
  
  // Bloquear scroll cuando el menú está abierto
  document.body.style.overflow = isExpanded ? 'hidden' : '';
});

// Cerrar menú al hacer clic en un enlace
options.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('expand');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Control mejorado con clase active
document.querySelector('.video-container').addEventListener('click', function() {
  const iframe = this.querySelector('iframe');
  this.classList.add('active');
  
  if (!iframe.src.includes('autoplay=1')) {
    iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
  }
});

function loadIframe(element) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', element.dataset.src);
  iframe.setAttribute('allowfullscreen', '');
  iframe.classList.add('loaded-iframe');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  
  // Reemplaza el thumbnail con el iframe
  element.parentNode.replaceChild(iframe, element);
  
  // Enfocar el iframe para controles de teclado
  iframe.focus();
}