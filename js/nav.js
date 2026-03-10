// nav.js — Shared navigation + tooltip initialization
// Inject nav sidebar and set up citation hover tooltips

const NAV_ITEMS = [
  { id: 'overview',  label: 'Overview',           icon: '🏠', href: 'index.html'    },
  { id: 'systems',   label: 'Systems Breakdown',   icon: '⚙️', href: 'systems.html'  },
  { id: 'mvp',       label: 'MVP Breakdown',        icon: '🎯', href: 'mvp.html'      },
  { id: 'timeline',  label: 'Timeline & Gantt',    icon: '📅', href: 'timeline.html' },
  { id: 'risks',     label: 'Risks & Red Flags',   icon: '⚠️', href: 'risks.html'    }
];

function initNav(activePage) {
  const navContainer = document.getElementById('nav-container');
  if (!navContainer) return;

  navContainer.innerHTML = `
    <aside class="fixed top-0 left-0 h-screen w-60 bg-slate-900 flex flex-col z-50 overflow-y-auto">
      <div class="p-5 border-b border-slate-700/60">
        <div class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1">UNOPS RFP/2026/61570</div>
        <div class="text-white font-bold text-sm leading-snug">RFP Analysis<br>Dashboard</div>
        <div class="text-slate-400 text-xs mt-1.5">Allion Tech · Internal</div>
      </div>
      <nav class="flex-1 p-3 space-y-0.5">
        <div class="text-slate-500 text-[10px] uppercase tracking-widest mb-2 px-2 pt-1">Navigation</div>
        ${NAV_ITEMS.map(item => `
          <a href="${item.href}" class="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all text-sm ${
            item.id === activePage
              ? 'bg-blue-600 text-white font-semibold shadow-md'
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }">
            <span class="text-base leading-none">${item.icon}</span>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </nav>
      <div class="p-4 border-t border-slate-700/60 space-y-1">
        <div class="text-slate-500 text-[11px]">Sri Lanka Ministry of Health</div>
        <div class="text-slate-500 text-[11px]">30 weeks · LKR Contract</div>
        <div class="text-amber-400 text-[11px] font-semibold mt-1.5">⏰ Hard deadline: Dec 2026</div>
      </div>
    </aside>
  `;
}

function initTooltips() {
  // Build tooltip DOM element
  const tip = document.createElement('div');
  tip.id = 'rfp-tooltip';
  tip.className = [
    'fixed z-[9999] max-w-xs bg-gray-900 text-white rounded-xl shadow-2xl p-3.5',
    'text-xs border border-gray-700 pointer-events-none',
    'transition-opacity duration-150 opacity-0'
  ].join(' ');
  tip.style.maxWidth = '320px';
  tip.innerHTML = `
    <div class="flex items-center gap-1.5 mb-2">
      <span class="text-sm">📄</span>
      <span class="text-cyan-400 font-bold text-[10px] uppercase tracking-wider">RFP Source</span>
    </div>
    <div id="rfp-tip-section" class="font-semibold text-yellow-300 text-[11px] mb-1.5 leading-snug"></div>
    <div id="rfp-tip-quote" class="text-gray-300 italic text-[11px] leading-relaxed border-l-2 border-cyan-700 pl-2"></div>
  `;
  document.body.appendChild(tip);

  const tipSection = document.getElementById('rfp-tip-section');
  const tipQuote   = document.getElementById('rfp-tip-quote');

  function showTip(el) {
    const key = el.getAttribute('data-cite');
    if (!key || !rfpCitations[key]) return;

    const c = rfpCitations[key];
    tipSection.textContent = c.section;
    tipQuote.textContent   = '\u201c' + c.quote + '\u201d';

    // Position below the element, adjusted for viewport edges
    tip.style.opacity = '0';
    tip.style.display = 'block';
    const rect   = el.getBoundingClientRect();
    const tW     = 320;
    const tH     = tip.offsetHeight || 140;
    let left     = rect.left;
    let top      = rect.bottom + 6;

    if (left + tW > window.innerWidth - 12) left = window.innerWidth - tW - 12;
    if (left < 12) left = 12;
    if (top + tH > window.innerHeight - 12) top = rect.top - tH - 6;
    if (top < 12) top = 12;

    tip.style.left    = left + 'px';
    tip.style.top     = top  + 'px';
    tip.style.opacity = '1';
  }

  function hideTip() {
    tip.style.opacity = '0';
  }

  // Event delegation — works for dynamically added elements too
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('.rfp-cite');
    if (el) showTip(el);
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest('.rfp-cite')) hideTip();
  });
}
