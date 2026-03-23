const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.14 });

revealItems.forEach(item => observer.observe(item));

const compareButtons = document.querySelectorAll('.compare-btn');
const comparePanels = document.querySelectorAll('.compare-panel');

compareButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    compareButtons.forEach(btn => btn.classList.remove('active'));
    comparePanels.forEach(panel => panel.classList.remove('active'));

    button.classList.add('active');
    document.querySelector(`[data-panel="${target}"]`).classList.add('active');
  });
});
