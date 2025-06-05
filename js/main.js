document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons()

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden')
    })
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
    })
})