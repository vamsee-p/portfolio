/* ═══════════════════════════════════════
   VAMSHI P — Global JS · main.js
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Nav scroll shadow ── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* ── Active nav link highlight ── */
  const currentPage = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    if (link.getAttribute('href') && currentPage.includes(link.getAttribute('href').replace('../', '').replace('./', ''))) {
      link.classList.add('active');
    }
  });

  /* ── Hamburger mobile menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.querySelectorAll('.mob-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
  });

  /* ── Dropdown: click-toggle for touch/trackpad users ── */
  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      const dropdown = link.parentElement;
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
      if (!isOpen) { e.preventDefault(); dropdown.classList.add('open'); }
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    }
  });
  // Close dropdown when a menu item is clicked (allows navigation)
  document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
    });
  });

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        window.scrollTo({ top: target.offsetTop - navH - 16, behavior: 'smooth' });
      }
    });
  });

  /* ── Contact form submit ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✅ Message Sent!';
        contactForm.reset();
        setTimeout(() => { btn.textContent = 'Send Message →'; btn.disabled = false; }, 3000);
      }, 1200);
    });
  }

});
