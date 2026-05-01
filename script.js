// Navigation Mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation Burger
        burger.classList.toggle('toggle');
    });

    // Fermer le menu si on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
}

// Lightbox Galerie
const initLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.close-lightbox');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');

            lightboxImg.src = imgSrc;
            lightboxTitle.innerText = title;
            lightboxDesc.innerText = desc;

            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Empêche le scroll
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fermer si on clique en dehors de l'image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Mise à jour de l'année au footer
const updateYear = () => {
    document.getElementById('year').innerText = new Date().getFullYear();
}

// Appel des fonctions au chargement
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    initLightbox();
    updateYear();
});
