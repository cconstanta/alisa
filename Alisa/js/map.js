// map.js - Интерактивная карта Страны Чудес
document.addEventListener("DOMContentLoaded", function () {
  const mapContainer = document.querySelector(".locations-map");
  const locationsInfo = document.querySelector(".locations-info");

  if (!mapContainer || !locationsInfo) return;

  // Локации Страны Чудес
  const locations = [
    {
      id: 1,
      name: "Кроличья нора",
      description:
        "Начало путешествия Алисы. Глубокая тёмная нора, которая ведёт в самое сердце Страны Чудес. Время здесь течёт по-другому, а гравитация играет в прятки.",
      icon: "🐇",
      color: "#FFFFFF",
      quote: "Ах, боже мой, боже мой! Как я опаздываю!",
      features: [
        "Вход в Страну Чудес",
        "Изменение гравитации",
        "Летающая мебель",
        "Бесконечное падение",
      ],
      x: 30,
      y: 25,
    },
    {
      id: 2,
      name: "Грибная поляна",
      description:
        "Дом мудрой Гусеницы. Здесь растут волшебные грибы, которые могут изменять размер. Гусеница сидит на самом большом грибе, курит кальян и задаёт философские вопросы.",
      icon: "🍄",
      color: "#3A8B6F",
      quote: "Кто ты такая? С одной стороны... с другой стороны...",
      features: [
        "Волшебные грибы",
        "Дом Гусеницы",
        "Изменение размеров",
        "Философские беседы",
      ],
      x: 70,
      y: 40,
    },
    {
      id: 3,
      name: "Безумное чаепитие",
      description:
        "Вечное чаепитие у Безумного Шляпника. Часы всегда показывают 6 часов, время остановилось. Здесь подают чай без конца, разгадывают загадки без ответов и ведут странные беседы.",
      icon: "🎩",
      color: "#FF6B6B",
      quote: "Почему ворон похож на конторку? Выпейте ещё чаю!",
      features: [
        "Бесконечное чаепитие",
        "Остановившееся время",
        "Бессмысленные загадки",
        "Шляпник, Заяц и Соня",
      ],
      x: 50,
      y: 60,
    },
    {
      id: 4,
      name: "Сад Червей",
      description:
        "Владения Королевы Червей. Здесь растут розы, которые красят в красный цвет, играют в крокет с фламинго и ежами, а за малейшую провинность — «Голову с плеч!».",
      icon: "👑",
      color: "#FF3040",
      quote: "Голову с плеч! Немедленно!",
      features: [
        "Дворец Королевы",
        "Крокет с фламинго",
        "Крашеные розы",
        "Суд без смысла",
      ],
      x: 80,
      y: 75,
    },
    {
      id: 5,
      name: "Река слёз",
      description:
        "Огромная река, созданная из слёз самой Алисы. Здесь плавают птицы Додо, проводятся Беговые соревнования, и можно найти множество потерянных вещей.",
      icon: "💧",
      color: "#4A90E2",
      quote: "Я наплавала целую реку!",
      features: [
        "Слёзы Алисы",
        "Бег по кругу",
        "Птица Додо",
        "Потерянные перчатки",
      ],
      x: 20,
      y: 50,
    },
    {
      id: 6,
      name: "Лес забвения",
      description:
        "Таинственный лес, где деревья меняют местами свои ветви, а тропинки ведут туда, куда им хочется. Чеширский Кот часто появляется здесь, чтобы дать «полезные» советы.",
      icon: "😸",
      color: "#9D72FF",
      quote: "Здесь все не в своём уме — и ты, и я...",
      features: [
        "Блуждающие деревья",
        "Появляющаяся улыбка",
        "Меняющиеся тропы",
        "Советы Кота",
      ],
      x: 40,
      y: 80,
    },
  ];

  // Создание карты с CSS-градиентами
  function createMap() {
    mapContainer.innerHTML = `
      <div class="wonderland-map">
        <div class="custom-map">
          <!-- Декоративные элементы карты -->
          <div class="map-path path-1"></div>
          <div class="map-path path-2"></div>
          <div class="map-path path-3"></div>
          <div class="map-tree tree-1"></div>
          <div class="map-tree tree-2"></div>
          <div class="map-tree tree-3"></div>
          <div class="map-mushroom mushroom-1"></div>
          <div class="map-mushroom mushroom-2"></div>
        </div>
        <div class="map-overlay"></div>
      </div>
    `;

    const map = mapContainer.querySelector(".wonderland-map");

    // Добавляем маркеры
    locations.forEach((location) => {
      const marker = document.createElement("div");
      marker.className = "map-marker";
      marker.dataset.id = location.id;
      marker.style.left = `${location.x}%`;
      marker.style.top = `${location.y}%`;
      marker.style.color = location.color;

      marker.innerHTML = `
        <div class="marker-pulse"></div>
        <div class="marker-icon">${location.icon}</div>
        <div class="marker-tooltip">${location.name}</div>
      `;

      marker.addEventListener("click", () => showLocationInfo(location));
      map.appendChild(marker);
    });

    // Показываем первую локацию по умолчанию
    if (locations.length > 0) {
      showLocationInfo(locations[0]);
      document
        .querySelector(`.map-marker[data-id="1"]`)
        .classList.add("active");
    }
  }

  // Показ информации о локации
  function showLocationInfo(location) {
    // Убираем активный класс у всех маркеров
    document.querySelectorAll(".map-marker").forEach((marker) => {
      marker.classList.remove("active");
    });

    // Добавляем активный класс текущему маркеру
    const currentMarker = document.querySelector(
      `.map-marker[data-id="${location.id}"]`
    );
    if (currentMarker) {
      currentMarker.classList.add("active");
    }

    // Обновляем информацию о локации
    locationsInfo.innerHTML = `
      <div class="location-card">
        <div class="location-header">
          <div class="location-icon" style="background: ${location.color}">
            ${location.icon}
          </div>
          <h3>${location.name}</h3>
        </div>
        <div class="location-description">
          ${location.description}
        </div>
        <blockquote class="location-quote">${location.quote}</blockquote>
        <div class="location-features">
          <h4>Особенности локации:</h4>
          <ul>
            ${location.features
              .map((feature) => `<li>${feature}</li>`)
              .join("")}
          </ul>
        </div>
      </div>
    `;

    // Анимация появления
    const card = locationsInfo.querySelector(".location-card");
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 10);
  }

  // Автоматическая смена локаций каждые 10 секунд
  let currentLocationIndex = 0;
  function autoRotateLocations() {
    currentLocationIndex = (currentLocationIndex + 1) % locations.length;
    showLocationInfo(locations[currentLocationIndex]);
  }

  // Запускаем автоматическую смену
  let rotationInterval = setInterval(autoRotateLocations, 10000);

  // Останавливаем автоматическую смену при наведении на маркер
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest(".map-marker")) {
      clearInterval(rotationInterval);
    }
  });

  // Возобновляем автоматическую смену при уходе мыши
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest(".map-marker")) {
      rotationInterval = setInterval(autoRotateLocations, 10000);
    }
  });

  // Инициализация
  createMap();
});