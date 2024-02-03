document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-links a');
    const menuIcon = document.getElementById('menuIcon');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                toggleNav();
            }
        });
    });
    
    const meButton = document.getElementById('me');

    if (meButton) {
        meButton.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToAbout();
        });
    }

    function scrollToAbout() {
        const aboutSection = document.getElementById('about');

        if (aboutSection) {
            const offset = document.querySelector('.header').offsetHeight;
            const targetPosition = aboutSection.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            toggleNav();
        }
    }

    function toggleNav() {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.toggle('show');
    }
});