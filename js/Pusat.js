// Toggle navbar on mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
}

// Close navbar when clicking any link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuIcon && navbar) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

// Header scroll effect & close mobile menu on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 40) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    if (menuIcon && navbar && navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// Smooth scroll to top button
const toTopBtn = document.querySelector('.footer-iconTop a');
if (toTopBtn) {
    toTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Automatic image slideshow for containers with multiple images
document.addEventListener('DOMContentLoaded', () => {
    const aboutImgContainers = document.querySelectorAll('.about-img');
    aboutImgContainers.forEach(container => {
        const imgs = container.querySelectorAll('img');
        if (imgs.length > 1) {
            let currentIndex = 0;
            imgs.forEach((img, idx) => {
                img.style.position = 'absolute';
                img.style.top = '0';
                img.style.left = '0';
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                img.style.transition = 'opacity 1s ease-in-out';
                img.style.opacity = idx === 0 ? '1' : '0';
            });

            setInterval(() => {
                imgs[currentIndex].style.opacity = '0';
                currentIndex = (currentIndex + 1) % imgs.length;
                imgs[currentIndex].style.opacity = '1';
            }, 3500);
        }
    });
});
