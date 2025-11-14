
// Initialize AOS
AOS.init({ duration: 700, once: true });

// Simple GSAP entrance for hero text
if (window.gsap) {
  gsap.from('.hero-left h1', {y: 30, opacity: 0, duration: 0.9, ease: 'power3.out'});
  gsap.from('.hero-left .lead', {y: 20, opacity:0, duration: 0.9, delay: 0.2});
}

// Mobile menu toggle
document.getElementById('btn-menu').addEventListener('click', function(){
  var nav = document.getElementById('nav');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '24px';
    nav.style.top = '68px';
    nav.style.background = 'white';
    nav.style.padding = '12px';
    nav.style.boxShadow = '0 6px 20px rgba(16,24,40,0.08)';
    nav.style.borderRadius = '10px';
  }
});
