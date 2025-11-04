document.getElementById('ano').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  if (menu.style.display === 'block') menu.style.display = 'none';
  else menu.style.display = 'block';
});