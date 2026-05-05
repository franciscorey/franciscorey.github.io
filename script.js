document.addEventListener('DOMContentLoaded', () => {

    // ── Mobile Nav Toggle ─────────────────────────────────────────
    const navToggle = document.getElementById('navToggle');
    const sidebarNav = document.getElementById('sidebarNav');
    const navOverlay = document.getElementById('navOverlay');

    if (navToggle && sidebarNav) {
        navToggle.addEventListener('click', () => {
            sidebarNav.classList.toggle('open');
            navOverlay.classList.toggle('visible');
            navToggle.innerHTML = sidebarNav.classList.contains('open') ? '&times;' : '&#9776;';
        });

        navOverlay.addEventListener('click', () => {
            sidebarNav.classList.remove('open');
            navOverlay.classList.remove('visible');
            navToggle.innerHTML = '&#9776;';
        });
    }

    // ── Active nav link (auto-detect current page) ─────────────────
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sidebar-nav nav a').forEach(link => {
        const href = link.getAttribute('href').split('?')[0];
        if (href === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // ── Theme Toggle ──────────────────────────────────────────────
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('theme-toggle');
    toggleBtn.setAttribute('aria-label', 'Toggle dark/light theme');
    toggleBtn.innerText = '☀ / ☾  Theme [T]';
    document.body.appendChild(toggleBtn);

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        drawGrid(); // Redraw grid with updated CSS variables
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    toggleBtn.addEventListener('click', toggleTheme);

    // Load saved theme on boot
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // ── Keyboard Shortcuts ────────────────────────────────────────
    let currentFocus = -1;
    const projectCards = Array.from(document.querySelectorAll('.project-card'));

    document.addEventListener('keydown', (e) => {
        // 'T' → toggle theme (only when not typing in an input)
        if (e.key.toLowerCase() === 't' && e.target.tagName !== 'INPUT') {
            toggleTheme();
            return;
        }

        // Arrow keys → navigate project cards
        if (projectCards.length === 0) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            currentFocus = (currentFocus + 1) % projectCards.length;
            projectCards[currentFocus].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            currentFocus = (currentFocus - 1 + projectCards.length) % projectCards.length;
            projectCards[currentFocus].focus();
        } else if (e.key === 'Enter' && currentFocus >= 0) {
            // Enter key → follow the link inside the focused card
            const link = projectCards[currentFocus].querySelector('a');
            if (link) link.click();
        }
    });

    // ── Scroll Reveal ─────────────────────────────────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ── SVG Grid Background ───────────────────────────────────────
    // Declared as a regular function so it can be called before its definition
    function drawGrid() {
        const existing = document.querySelector('.grid-bg');
        if (existing) existing.remove();

        // Read the current theme's grid color from CSS variables
        const gridColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--grid-color').trim();

        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS, 'svg');
        svg.classList.add('grid-bg');
        Object.assign(svg.style, {
            position: 'fixed', top: '0', left: '0',
            width: '100%', height: '100%',
            zIndex: '-1', pointerEvents: 'none'
        });

        const defs = document.createElementNS(svgNS, 'defs');
        const pattern = document.createElementNS(svgNS, 'pattern');
        pattern.setAttribute('id', 'grid-pattern');
        pattern.setAttribute('width', '40');
        pattern.setAttribute('height', '40');
        pattern.setAttribute('patternUnits', 'userSpaceOnUse');

        const path = document.createElementNS(svgNS, 'path');
        path.setAttribute('d', 'M 40 0 L 0 0 0 40');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', gridColor);
        path.setAttribute('stroke-width', '0.8');

        pattern.appendChild(path);
        defs.appendChild(pattern);
        svg.appendChild(defs);

        const rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute('width', '100%');
        rect.setAttribute('height', '100%');
        rect.setAttribute('fill', 'url(#grid-pattern)');
        svg.appendChild(rect);

        document.body.appendChild(svg);
    }
});
