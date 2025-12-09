// quotes.js - Слайдер цитат
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".quote-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".quote-prev");
  const nextBtn = document.querySelector(".quote-next");
  const randomBtn = document.querySelector(".random-quote-btn");
  const randomResult = document.querySelector(".random-quote-result");

  let currentSlide = 0;

  // Все цитаты для случайного выбора
  const allQuotes = [
    {
      text: "«Всё чудесатее и чудесатее! Я, право, не знаю, кто я такая…»",
      author: "— Алиса",
      icon: "🔑",
    },
    {
      text: "«Ах, боже мой, боже мой! Как я опаздываю!»",
      author: "— Белый Кролик",
      icon: "⏰",
    },
    {
      text: "«Здесь все не в своём уме — и ты, и я… Иначе как бы мы здесь оказались?»",
      author: "— Чеширский Кот",
      icon: "😸",
    },
    {
      text: "«Почему ворон похож на конторку?»",
      author: "— Безумный Шляпник",
      icon: "🎩",
    },
    {
      text: "«Голову с плеч! Немедленно!»",
      author: "— Королева Червей",
      icon: "👑",
    },
    {
      text: "«Кто ты такая?»",
      author: "— Гусеница",
      icon: "🐛",
    },
    {
      text: "«Март! Пора с ума сходить! Можно? Конечно можно!»",
      author: "— Мартовский Заяц",
      icon: "🐇",
    },
    {
      text: "«…и тогда мы все пили чай… zzz…»",
      author: "— Соня",
      icon: "💤",
    },
  ];

  // Показать слайд
  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    currentSlide = (n + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
  }

  // Следующий слайд
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Предыдущий слайд
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Случайная цитата
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[randomIndex];

    randomResult.innerHTML = `
      <div class="random-quote-card">
        <div class="random-quote-icon">${quote.icon}</div>
        <blockquote class="random-quote-text">${quote.text}</blockquote>
        <p class="random-quote-author">${quote.author}</p>
      </div>
    `;

    // Анимация появления
    randomResult.style.opacity = "0";
    randomResult.style.transform = "translateY(20px)";

    setTimeout(() => {
      randomResult.style.transition = "all 0.5s ease";
      randomResult.style.opacity = "1";
      randomResult.style.transform = "translateY(0)";
    }, 10);
  }

  // Автопрокрутка слайдов
  let slideInterval = setInterval(nextSlide, 5000);

  // События
  if (nextBtn)
    nextBtn.addEventListener("click", () => {
      nextSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });

  if (prevBtn)
    prevBtn.addEventListener("click", () => {
      prevSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });

  if (randomBtn) randomBtn.addEventListener("click", showRandomQuote);

  // Клик по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  // Инициализация
  showSlide(0);
});