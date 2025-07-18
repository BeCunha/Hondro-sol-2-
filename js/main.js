document.addEventListener('DOMContentLoaded', function () {
  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Exibição condicional de seções (exemplo fictício de lógica preservada)
  const toggleSection = document.querySelector('.toggle-section');
  if (toggleSection) {
    const btn = toggleSection.querySelector('.toggle-btn');
    const content = toggleSection.querySelector('.toggle-content');
    if (btn && content) {
      btn.addEventListener('click', () => {
        content.classList.toggle('active');
      });
    }
  }

  // Adiar execuções de tracking (exemplo)
  setTimeout(() => {
    if (window.gtag) {
      gtag('event', 'page_view');
    }
    if (window.fbq) {
      fbq('track', 'PageView');
    }
  }, 2000);
});
