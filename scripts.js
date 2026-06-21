(function() {
      'use strict';

      // Mobile menu toggle
      const menuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      let menuOpen = false;

      menuBtn.addEventListener('click', function() {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('hidden', !menuOpen);
        menuBtn.innerHTML = menuOpen 
          ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
          : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      });

      document.querySelectorAll('.mobile-link').forEach(function(link) {
        link.addEventListener('click', function() {
          menuOpen = false;
          mobileMenu.classList.add('hidden');
          menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        });
      });

      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      let lastScroll = 0;
      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
          navbar.classList.add('nav-scrolled');
        } else {
          navbar.classList.remove('nav-scrolled');
        }
        lastScroll = currentScroll;
      }, { passive: true });

      // Intersection Observer for fade-up animations
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-up').forEach(function(el) {
        observer.observe(el);
      });

      // Parallax effect for videos
      const videos = document.querySelectorAll('.parallax-video');
      window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;
        videos.forEach(function(video) {
          const rect = video.parentElement.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const speed = 0.15;
            const yPos = (rect.top - window.innerHeight) * speed;
            video.style.transform = 'translateX(-50%) translateY(' + yPos + 'px)';
          }
        });
      }, { passive: true });

    })();