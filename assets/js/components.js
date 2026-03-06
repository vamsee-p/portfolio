/* ═══════════════════════════════════════
   NAV + FOOTER HTML Injector
   components.js — included on every page
═══════════════════════════════════════
   Usage: set window.ROOT = '' (root) or '../' (subdirs)
   before including this script.
*/

(function() {
  const R = window.ROOT || '';

  /* ── NAV HTML ── */
  const navHTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="${R}index.html" class="logo">
      <div class="logo-mark">VP</div>
      <span class="logo-text">Vamshi<span>P</span></span>
    </a>
    <ul class="nav-links">
      <li class="dropdown">
        <a href="${R}services/index.html">Services <span class="dropdown-arrow">▾</span></a>
        <div class="dropdown-menu">
          <a href="${R}services/netsuite-implementation.html">Implementation</a>
          <a href="${R}services/netsuite-integration.html">Integration</a>
          <a href="${R}services/suitescript-development.html">SuiteScript Dev</a>
          <a href="${R}services/index.html">View All →</a>
        </div>
      </li>
      <li><a href="${R}case-studies/index.html">Case Studies</a></li>
      <li><a href="${R}blog/index.html">Blog</a></li>
      <li><a href="${R}index.html#industries">Industries</a></li>
      <li><a href="${R}index.html#about">About</a></li>
    </ul>
    <a href="${R}index.html#contact" class="btn btn-primary nav-cta btn-sm">Let's Talk →</a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="${R}index.html" class="mob-link">Home</a>
  <a href="${R}services/index.html" class="mob-link">Services</a>
  <a href="${R}case-studies/index.html" class="mob-link">Case Studies</a>
  <a href="${R}blog/index.html" class="mob-link">Blog</a>
  <a href="${R}index.html#about" class="mob-link">About</a>
  <a href="${R}index.html#contact" class="mob-link mob-cta">Contact →</a>
</div>`;

  /* ── FOOTER HTML ── */
  const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${R}index.html" class="logo">
          <div class="logo-mark">VP</div>
          <span class="logo-text">Vamshi<span>P</span></span>
        </a>
        <p>Oracle NetSuite Developer &amp; Consultant helping businesses scale with tailored ERP solutions. Serving clients across India, Australia &amp; the US.</p>
        <div class="footer-social">
          <a href="#" class="social-btn" aria-label="LinkedIn">in</a>
          <a href="#" class="social-btn" aria-label="Twitter">tw</a>
          <a href="#" class="social-btn" aria-label="GitHub">gh</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="${R}services/netsuite-implementation.html">Implementation</a></li>
          <li><a href="${R}services/netsuite-integration.html">Integration</a></li>
          <li><a href="${R}services/suitescript-development.html">SuiteScript Dev</a></li>
          <li><a href="${R}services/index.html">View All</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Resources</h4>
        <ul>
          <li><a href="${R}blog/index.html">Blog</a></li>
          <li><a href="${R}case-studies/index.html">Case Studies</a></li>
          <li><a href="${R}index.html#industries">Industries</a></li>
          <li><a href="${R}index.html#about">About</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">
          <span class="fci-icon">📧</span>
          <div class="fci-text"><strong>Email</strong>vamshi@example.com</div>
        </div>
        <div class="footer-contact-item">
          <span class="fci-icon">📞</span>
          <div class="fci-text"><strong>Phone</strong>+91 87349 80383</div>
        </div>
        <div class="footer-contact-item">
          <span class="fci-icon">📍</span>
          <div class="fci-text"><strong>Location</strong>India · Remote Worldwide</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 <span>Vamshi P.</span> — NetSuite Developer &amp; Consultant</div>
      <div class="footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="${R}blog/index.html">Blog</a>
      </div>
    </div>
  </div>
</footer>`;

  /* ── Inject ── */
  const navTarget = document.getElementById('nav-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');
  if (navTarget)    navTarget.outerHTML = navHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;
})();
