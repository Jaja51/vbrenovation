document.addEventListener('DOMContentLoaded', () => {
    
    // Menu Mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const closeBtn = document.querySelector('.close-lightbox');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img').src;
            const title = item.getAttribute('data-title');
            const desc = item.getAttribute('data-desc');
            
            lightboxImg.src = img;
            lightboxTitle.innerText = title;
            lightboxDesc.innerText = desc;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) closeLightbox();
    });

    // Année automatique
    document.getElementById('year').innerText = new Date().getFullYear();
});