document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('animate-slide-down');
        void mobileMenu.offsetWidth; // reset animation

        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('animate-slide-down'); // optional CSS animation
    });
})

// Auto-close mobile menu when link clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
