// script.js
document.addEventListener('DOMContentLoaded', () => {
    const items      = document.querySelectorAll('.grid-item');
    const reveals    = document.querySelectorAll('.reveal');
    const modal      = document.getElementById('modal');
    const closeBtn   = modal.querySelector('.close');
    const imgEl      = document.getElementById('carousel-image');
    const titleEl    = document.getElementById('modal-title');
    const typeEl     = document.getElementById('modal-type');
    const descEl     = document.getElementById('modal-description');
    let carouselInt, images = [], idx = 0;
  
    // 1) Scroll‑reveal
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => e.isIntersecting && e.target.classList.add('active'));
    }, { threshold: 0.1 });
    reveals.forEach(r => obs.observe(r));
  
    // 2) Inicializar grid‑items
    items.forEach(item => {
      // fondo
      if (item.dataset.image) {
        item.style.backgroundImage = `url('${item.dataset.image}')`;
      }
      // overlay dinámico
      const ov = document.createElement('div');
      ov.className = 'overlay';
      ov.innerHTML = `<h3>${item.dataset.title}</h3><p>${item.dataset.type}</p>`;
      item.appendChild(ov);
  
      // click → abrir modal
      item.addEventListener('click', () => {
        // textos
        titleEl.textContent = item.dataset.title;
        typeEl.textContent  = item.dataset.type;
        descEl.textContent  = item.dataset.description;
        // imágenes
        try {
          images = JSON.parse(item.dataset.images);
        } catch {
          images = item.dataset.image ? [item.dataset.image] : [];
        }
        idx = 0;
        imgEl.src = images[idx] || '';
        modal.style.display = 'flex';
  
        // iniciar auto‑carrusel
        clearInterval(carouselInt);
        carouselInt = setInterval(() => {
          idx = (idx + 1) % images.length;
          imgEl.src = images[idx];
        }, 3000);
      });
    });
  
    // 3) Cerrar modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      clearInterval(carouselInt);
    });
    window.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        clearInterval(carouselInt);
      }
    });
  });
  