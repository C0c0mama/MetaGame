document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

const navbar      = document.getElementById('navbar');
const menuOpenBtn = document.getElementById('menuOpenBtn');
const navLinks    = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

function triggerLinkAnimations() {
    const delays = [0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45];
    navLinks.querySelectorAll('li').forEach((li, i) => {
        li.style.animation = 'none';
        li.offsetHeight; // force reflow
        li.style.animation = `linkSlideIn 0.3s ease ${delays[i] || 0}s both`;
    });
}

function closeMenu() {
    navLinks.classList.remove('open');
    const icon = menuOpenBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');

    // Reset animations on close
    navLinks.querySelectorAll('li').forEach(li => {
        li.style.animation = 'none';
    });
}

menuOpenBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
        closeMenu();
    } else {
        navLinks.classList.add('open');
        const icon = menuOpenBtn.querySelector('i');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        triggerLinkAnimations(); // only runs when button is clicked
    }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        closeMenu();
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isOpen = navLinks.classList.contains('open');
    const clickedInsideMenu = navLinks.contains(e.target);
    const clickedOpenBtn    = menuOpenBtn.contains(e.target);

    if (isOpen && !clickedInsideMenu && !clickedOpenBtn) {
        closeMenu();
    }
});