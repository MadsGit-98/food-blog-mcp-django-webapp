AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});
feather.replace();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileCloseButton = document.getElementById('mobile-close-button');
const mobileSidebar = document.getElementById('mobile-sidebar');

mobileMenuButton.addEventListener('click', () => {
    mobileSidebar.classList.remove('hidden');
});

mobileCloseButton.addEventListener('click', () => {
    mobileSidebar.classList.add('hidden');
});

// Close menu when clicking outside
mobileSidebar.addEventListener('click', (e) => {
    if (e.target === mobileSidebar) {
        mobileSidebar.classList.add('hidden');
    }
});