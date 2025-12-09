// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Закрытие мобильного меню
      document.querySelector(".mobile-nav").classList.remove("active");
    }
  });
});

// Бургер-меню
const burgerMenu = document.querySelector(".burger-menu");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".close-menu");

burgerMenu.addEventListener("click", () => {
  mobileNav.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  document.body.style.overflow = "";
});

// Закрытие меню при клике вне его
document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !burgerMenu.contains(e.target)) {
    mobileNav.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Стики-хедер
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});

// Параллакс эффект для карт
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const speed = 0.5 + index * 0.1;
    const yPos = -(scrolled * speed * 0.1);
    card.style.transform = `translateY(${yPos}px)`;
  });
});

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", () => {
  console.log("Архив Страны Чудес загружен!");

  // Анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});
// Добавьте этот код в main.js после существующего
document.addEventListener("DOMContentLoaded", function () {
  // Плавное появление секций при скролле
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          // Добавляем случайную задержку для эффекта "лесенки"
          const delay = Math.random() * 0.5;
          entry.target.style.transitionDelay = `${delay}s`;
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Случайные задержки для ролей персонажей
  document.querySelectorAll(".character-role").forEach((role, index) => {
    role.style.setProperty("--delay", `${index * 0.5}s`);
  });

  // Добавляем плавающие символы
  const symbols = ["♣", "♠", "♥", "♦", "🎩", "🐇", "😸", "👑", "🐛", "⏰"];
  const floatingContainer = document.createElement("div");
  floatingContainer.className = "floating-symbols";

  symbols.forEach((symbol, i) => {
    const span = document.createElement("span");
    span.textContent = symbol;
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 100}%`;
    span.style.animationDelay = `${i * 2}s`;
    span.style.fontSize = `${1 + Math.random() * 2}rem`;
    floatingContainer.appendChild(span);
  });

  document.body.appendChild(floatingContainer);
});