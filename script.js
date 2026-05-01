document.addEventListener('DOMContentLoaded', () => {
    
    // --- Gestion du Menu Mobile ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');

    // Fonction pour ouvrir/fermer le menu
    const toggleMenu = () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle'); // Anime le bouton burger en croix
        
        // Bloquer le scroll du corps quand le menu est ouvert
        if (nav.classList.contains('nav-active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    burger.addEventListener('click', toggleMenu);

    // FERMETURE AUTO : Quand on clique sur un lien du menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleMenu();
            }
        });
    });

    // --- Gestion de la Galerie (Lightbox) ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeBtn = document.querySelector('.close-lightbox');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgPath = item.querySelector('img').src;
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');
            
            lightboxImg.src = imgPath;
            lightboxTitle.innerText = title;
            lightboxDesc.innerText = desc;
            
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Empêche le scroll derrière la lightbox
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        // On ne remet le scroll que si le menu mobile n'est pas ouvert
        if (!nav.classList.contains('nav-active')) {
            document.body.style.overflow = 'auto';
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Fermer la lightbox en cliquant à côté de l'image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // --- Mise à jour de l'année ---
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.innerText = new Date().getFullYear();
    }
});