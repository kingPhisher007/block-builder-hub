/* ═══════════════════════════════════════════════════════════════
   MONT RICHCON - Interactive JavaScript
   Clean, Modern, Performance-Optimized
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  // ─────────────────────────────────────────────────────────────
  // Header Scroll Effect
  // ─────────────────────────────────────────────────────────────
  const header = document.getElementById('header');
  let lastScroll = 0;
  
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ─────────────────────────────────────────────────────────────
  // Mobile Menu Toggle
  // ─────────────────────────────────────────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking a link
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('active') && 
          !nav.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ─────────────────────────────────────────────────────────────
  // Scroll Animations (Intersection Observer)
  // ─────────────────────────────────────────────────────────────
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };
  
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('animated');
        }, delay);
        animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animateElements.forEach(el => animationObserver.observe(el));

  // ─────────────────────────────────────────────────────────────
  // Counter Animation
  // ─────────────────────────────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const count = parseInt(target.dataset.count, 10);
        animateCounter(target, count);
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => counterObserver.observe(counter));
  
  function animateCounter(element, target) {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const update = () => {
      current += step;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        element.textContent = target;
      }
    };
    
    requestAnimationFrame(update);
  }

  // ─────────────────────────────────────────────────────────────
  // Parallax Effect
  // ─────────────────────────────────────────────────────────────
  const parallaxElements = document.querySelectorAll('.parallax');
  
  const handleParallax = () => {
    const scrollY = window.pageYOffset;
    
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.speed) || 0.5;
      const yPos = scrollY * speed;
      el.style.transform = `translateY(${yPos}px) scale(1.1)`;
    });
  };
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', handleParallax, { passive: true });
  }

  // ─────────────────────────────────────────────────────────────
  // Smooth Scroll for Anchor Links
  // ─────────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ─────────────────────────────────────────────────────────────
  // Image Lazy Loading Enhancement
  // ─────────────────────────────────────────────────────────────
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    
    // If already loaded (from cache)
    if (img.complete) {
      img.classList.add('loaded');
    }
  });

  // ─────────────────────────────────────────────────────────────
  // Button Ripple Effect
  // ─────────────────────────────────────────────────────────────
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ─────────────────────────────────────────────────────────────
  // Preloader (Optional - Quick fade)
  // ─────────────────────────────────────────────────────────────
  document.body.classList.add('loaded');

  // ─────────────────────────────────────────────────────────────
  // Active Nav Link Based on Scroll (for single-page sections)
  // ─────────────────────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  
  if (sections.length > 0) {
    const updateActiveNav = () => {
      const scrollPos = window.pageYOffset + 200;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navLink && scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', updateActiveNav, { passive: true });
  }

  console.log('🧱 MONT RICHCON - Website Loaded Successfully');
});