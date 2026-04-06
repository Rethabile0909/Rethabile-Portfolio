/* --- INTERACTIVE SCROLL REVEAL --- */
/* --- COMBINED PORTFOLIO LOGIC --- */

/* --- FINAL PORTFOLIO LOGIC --- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. INTERACTIVE SCROLL REVEAL (Keeps cards side-by-side/revealing)
    const observerOptions = {
        threshold: 0.1
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
            // Image Fade-In Animation
    const profileImg = document.querySelector('.profile-pic');
    if (profileImg) {
        profileImg.style.opacity = '0';
        profileImg.style.transform = 'translateY(20px)';
        profileImg.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(() => {
            profileImg.style.opacity = '1';
            profileImg.style.transform = 'translateY(0)';
        }, 500);
    }
        });
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const elementsToReveal = document.querySelectorAll('section, .glass-card');
    elementsToReveal.forEach(el => observer.observe(el));


    // 2. SMOOTH SCROLL FOR CONTACT LINK
    const contactLink = document.querySelector('a[href="#identity-node"]');
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#identity-node');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }


    // 3. TERMINAL TYPING EFFECT (Updated Title)
    const textElement = document.querySelector('.typing-text');
    const text = "Aspiring | Software Developer"; 
    let index = 0;

    if (textElement) {
        textElement.textContent = ""; 
        function typeEffect() {
            if (index < text.length) {
                textElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100);
            }
        }
        typeEffect();
    }

});