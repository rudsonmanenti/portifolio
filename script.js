// ======= MENU RESPONSIVO =======
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  menuBtn.textContent = menu.classList.contains("show") ? "✕" : "☰";
});

// Fechar o menu ao clicar em um link (em telas pequenas)
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menuBtn.textContent = "☰";
    }
  });
});

// ======= ANO AUTOMÁTICO NO RODAPÉ =======
document.getElementById("ano").textContent = new Date().getFullYear();

// ======= ROLAGEM SUAVE =======
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// ======= ANIMAÇÃO AO ROLAR =======
// Aplica um leve efeito de fade-in quando o usuário rola até os elementos
const sections = document.querySelectorAll(".section, .card");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Define o estilo inicial
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});

// Ativa ao carregar a página
revealOnScroll();
