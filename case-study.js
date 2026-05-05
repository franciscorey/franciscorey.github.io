/**
 * case-study.js
 * Fetches cases.json, reads ?id= from URL, and renders the matching case study.
 * Also wires up prev/next project navigation.
 */

(async function initCaseStudy() {

    const root = document.getElementById('cs-root');
    if (!root) return; // Not on case-study page

    // ── 1. Read project ID from URL ──────────────────────────────────
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    // ── 2. Fetch cases.json ──────────────────────────────────────────
    let cases;
    try {
        const res = await fetch('cases.json');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        cases = await res.json();
    } catch (err) {
        root.innerHTML = `
            <div class="cs-not-found">
                <h2>ERROR_404</h2>
                <p class="metadata">No se pudo cargar cases.json</p>
                <a href="index.html" class="metadata" style="display:inline-block;margin-top:32px;">&larr; RETURN TO INDEX</a>
            </div>`;
        return;
    }

    // ── 3. Find case by ID (fallback: first case) ────────────────────
    const caseIndex = projectId ? cases.findIndex(c => c.id === projectId) : 0;

    if (caseIndex === -1) {
        root.innerHTML = `
            <div class="cs-not-found">
                <h2>[PROJECT_NOT_FOUND]</h2>
                <p class="metadata">ID: "${projectId}" no existe en cases.json</p>
                <a href="index.html" class="metadata" style="display:inline-block;margin-top:32px;">&larr; RETURN TO INDEX</a>
            </div>`;
        return;
    }

    const cs = cases[caseIndex];
    const prev = cases[caseIndex - 1] || null;
    const next = cases[caseIndex + 1] || null;

    // Update document title
    document.title = `${cs.title} — BLUEPRINT HIGH-FI / 2026`;

    // ── 4. Render sections ───────────────────────────────────────────
    const sectionsHTML = cs.sections.map((sec, i) => renderSection(sec, i)).join('');

    // ── 5. Render stats ──────────────────────────────────────────────
    const statsHTML = Object.entries(cs.stats).map(([key, val]) => `
        <li><span>${key}</span><span>${val}</span></li>
    `).join('');

    // ── 6. Render tools ──────────────────────────────────────────────
    const toolsHTML = cs.tools.map(t => `<li>${t}</li>`).join('');

    // ── 7. Hero image (with graceful fallback) ───────────────────────
    const heroHTML = cs.hero_img
        ? `<img src="${cs.hero_img}" alt="${cs.title} — hero image" class="cs-hero reveal"
               onerror="this.style.display='none'">`
        : `<div class="cs-hero" style="background:var(--text-color);opacity:0.05;"></div>`;

    // ── 8. Prev / Next navigation ────────────────────────────────────
    const prevLink = prev
        ? `<a href="case-study.html?id=${prev.id}">&larr; ${prev.index}_${prev.title}</a>`
        : `<a class="hidden" aria-hidden="true">&nbsp;</a>`;

    const nextLink = next
        ? `<a href="case-study.html?id=${next.id}">${next.index}_${next.title} &rarr;</a>`
        : `<a class="hidden" aria-hidden="true">&nbsp;</a>`;

    // ── 9. Inject full HTML ──────────────────────────────────────────
    root.innerHTML = `
        <!-- Document ID bar -->
        <div class="grid-container" style="padding-bottom:0;">
            <div class="metadata" style="grid-column:span 12;">
                DOCUMENT_ID: BPHF-2026-CS-${cs.index} | PROYECTO: ${cs.id.toUpperCase()}
            </div>
        </div>

        <!-- Hero Image -->
        <div style="padding: 0 40px;">
            ${heroHTML}
        </div>

        <!-- Case Layout: sidebar + content -->
        <div class="case-layout">

            <!-- ── Sidebar ── -->
            <aside class="case-sidebar" aria-label="Metadatos del proyecto">

                <div class="cs-title-block" style="margin-top:0; padding-top:0; border-top: none; border-bottom: 2px solid var(--accent-color); padding-bottom: 24px; margin-bottom: 28px;">
                    <p class="metadata">PROJECT_${cs.index}</p>
                    <h1>${cs.title}</h1>
                    <p class="metadata" style="opacity:0.5; margin-top:6px;">${cs.category}</p>
                </div>

                <div class="cs-meta-block">
                    <span class="metadata">BRIEF</span>
                    <p>${cs.brief}</p>
                </div>

                <div class="cs-meta-block">
                    <span class="metadata">AÑO</span>
                    <p>${cs.date}</p>
                </div>

                <div class="cs-meta-block">
                    <span class="metadata">CATEGORÍA</span>
                    <p>${cs.category}</p>
                </div>

                <div class="cs-meta-block">
                    <span class="metadata">HERRAMIENTAS</span>
                    <ul class="cs-tools-list">${toolsHTML}</ul>
                </div>

                <div class="cs-meta-block">
                    <span class="metadata">MÉTRICAS</span>
                    <ul class="cs-stats-list">${statsHTML}</ul>
                </div>

            </aside>

            <!-- ── Main Narrative ── -->
            <main>
                ${sectionsHTML}
            </main>
        </div>

        <!-- Prev / Next Navigation -->
        <nav class="cs-project-nav" aria-label="Navegación entre proyectos">
            ${prevLink}
            <a href="index.html" style="opacity:0.4;">[INDEX]</a>
            ${nextLink}
        </nav>
    `;

    // ── 10. Trigger reveal animations on injected elements ───────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });

    document.querySelectorAll('#cs-root .reveal').forEach(el => revealObserver.observe(el));

})();


// ── Section Renderers ─────────────────────────────────────────────────────────

/**
 * Renders a single section based on its `type` field.
 * Supported types: text-image | image-text | full-image | full-video
 */
function renderSection(sec, i) {
    const label = `<span class="cs-section-label">[${sec.title}]</span>`;
    const desc  = `<p class="reveal">${sec.desc}</p>`;

    const imgEl = sec.img
        ? `<img src="${sec.img}" alt="${sec.title}" class="cs-img reveal"
               onerror="this.parentElement.style.display='none'">`
        : '';

    const videoEl = sec.video
        ? `<video src="${sec.video}" class="reveal" controls muted loop playsinline
               style="width:100%;display:block;margin-top:20px;"
               onerror="this.parentElement.style.display='none'"></video>`
        : '';

    switch (sec.type) {

        case 'text-image':
            return `
            <div class="cs-section reveal">
                ${label}
                <div class="cs-layout-split">
                    <div>${desc}</div>
                    <div>${imgEl}</div>
                </div>
            </div>`;

        case 'image-text':
            return `
            <div class="cs-section reveal">
                ${label}
                <div class="cs-layout-split reverse">
                    <div>${imgEl}</div>
                    <div>${desc}</div>
                </div>
            </div>`;

        case 'full-image':
            return `
            <div class="cs-section reveal">
                ${label}
                <div class="cs-layout-full">
                    ${imgEl}
                    ${desc}
                </div>
            </div>`;

        case 'full-video':
            return `
            <div class="cs-section reveal">
                ${label}
                <div class="cs-layout-full">
                    ${videoEl}
                    ${desc}
                </div>
            </div>`;

        default:
            return `
            <div class="cs-section reveal">
                ${label}
                ${desc}
            </div>`;
    }
}
