/* ---
UTKARSH TRIPATHI - ARTIST PORTFOLIO
JAVASCRIPT
--- */

document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Mobile Navigation ---
    const navSlide = () => {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links a');

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('nav-active');
            hamburger.classList.toggle('active');
        });

        // Close nav when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    hamburger.classList.remove('active');
                }
            });
        });
        
        // Close nav when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
                nav.classList.remove('nav-active');
                hamburger.classList.remove('active');
            }
        });
    }
    navSlide();
    

    // --- 2. Commission Lightbox (Homepage) ---
    const commissionLightbox = document.getElementById('commission-lightbox');
    if (commissionLightbox) {
        const lightboxImg = commissionLightbox.querySelector('#lightbox-img-main');
        const lightboxCaption = commissionLightbox.querySelector('#lightbox-caption');
        const lightboxClose = commissionLightbox.querySelector('.lightbox-close');
        
        document.querySelectorAll('.commission-item img').forEach(img => {
            img.addEventListener('click', function () {
                lightboxImg.src = this.src;
                lightboxCaption.textContent = this.getAttribute('data-caption') || this.alt || '';
                commissionLightbox.style.display = 'flex';
            });
        });
        
        lightboxClose.addEventListener('click', () => {
            commissionLightbox.style.display = 'none';
        });

        commissionLightbox.addEventListener('click', (e) => {
            if (e.target === commissionLightbox) {
                commissionLightbox.style.display = 'none';
            }
        });
    }

    // --- MODIFICATION (Request 3) ---
    // REPLACED the "Zoom Lightbox" code with this new "Image Flip" code
    // --- 3. Originals Page Image Flip (Click Toggle) ---
    document.querySelectorAll('.art-image-hover').forEach(container => {
        container.addEventListener('click', function(e) {
            // Prevent default behavior if it's wrapped in a link (which it's not, but good practice)
            e.preventDefault();
            // This will toggle the class on any click
            this.classList.toggle('is-flipped');
        });
    });
    // --- END MODIFICATION ---

});