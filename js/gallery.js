// Упрощённый массив персонажей (только 8 основных)
const characters = [
  {
    id: 1,
    name: "Алиса",
    role: "Любопытная исследовательница",
    symbol: "🔑",
    color: "#BD2D87",
    image: "images/characters/alice.jpg",
    description:
      "Девочка, случайно попавшая в Страну Чудес через кроличью нору. Её здравомыслие и логика постоянно сталкиваются с абсурдными правилами этого мира, но она сохраняет любопытство и смелость.",
    quote: "Всё чудесатее и чудесатее! Я, право, не знаю, кто я такая…",
    facts: [
      "Возраст: 7 лет",
      "Любимое слово: «Любопытно!»",
      "Способность: Меняет размер от выпитых зелий",
      "Враг: Собственная логика",
    ],
  },
  {
    id: 2,
    name: "Белый Кролик",
    role: "Вечно опаздывающий",
    symbol: "⏰",
    color: "#FFFFFF",
    image: "images/characters/rabbit.jpg", // ИСПРАВЛЕНО!
    description:
      "Панически боится опоздать, постоянно смотрит на карманные часы. Именно его погоня за временем привела Алису в Страну Чудес.",
    quote: "Ах, боже мой, боже мой! Как я опаздываю!",
    facts: [
      "Атрибут: Карманные часы",
      "Состояние: Перманентная паника",
      "Фраза: «Я опаздываю, я опаздываю!»",
      "Должность: Герольд Королевы",
    ],
  },
  {
    id: 3,
    name: "Чеширский Кот",
    role: "Философская ухмылка",
    symbol: "😸",
    color: "#9D72FF",
    image: "images/characters/cat.jpg", // ИСПРАВЛЕНО!
    description:
      "Загадочное существо, способное исчезать и появляться по своему желанию. Оставляет после себя лишь улыбку, висящую в воздухе. Обладает странной, искривлённой логикой.",
    quote:
      "Здесь все не в своём уме — и ты, и я… Иначе как бы мы здесь оказались?",
    facts: [
      "Способность: Контролируемая невидимость",
      "Известен: Парящей улыбкой",
      "Философия: Абсурдизм",
      "Любимое место: Ветви дерева",
    ],
  },
  {
    id: 4,
    name: "Безумный Шляпник",
    role: "Вечный хозяин чаепития",
    symbol: "🎩",
    color: "#FF6B6B",
    image: "images/characters/hatter.jpg",
    description:
      "Один из участников Бесконечного Чаепития. Сошёл с ума от паров ртути, которые использовал при изготовлении шляп. Обожает загадки без ответов и странные разговоры.",
    quote: "Почему ворон похож на конторку?",
    facts: [
      "Профессия: Шляпных дел мастер",
      "Состояние: Отравление ртутью",
      "Известен: Бессмысленными загадками",
      "Компаньоны: Мартовский Заяц и Соня",
    ],
  },
  {
    id: 5,
    name: "Королева Червей",
    role: "Властная тиранка",
    symbol: "👑",
    color: "#FF3040",
    image: "images/characters/queen.jpg",
    description:
      "Вспыльчивая и деспотичная правительница Страны Чудес. Постоянно требует казнить всех, кто ей не нравится, крича «Голову с плеч!». Боится только Короля.",
    quote: "Голову с плеч! Немедленно!",
    facts: [
      "Титул: Королева Червей",
      "Любимое наказание: Отсечение головы",
      "Игра: Крокет с фламинго",
      "Слабость: Свой гнев",
    ],
  },
  {
    id: 6,
    name: "Гусеница",
    role: "Сибарит-философ",
    symbol: "🐛",
    color: "#3A8B6F",
    image: "images/characters/caterpillar.jpg",
    description:
      "Мудрая, но высокомерная гусеница, сидящая на грибе и курящая кальян. Задаёт Алисе каверзные вопросы о её идентичности. Знает секреты изменения размеров.",
    quote: "Кто ты такая?",
    facts: [
      "Атрибут: Кальян на грибе",
      "Знания: Свойства волшебного гриба",
      "Манеры: Сонные и медленные",
      "Совет: «С одной стороны… с другой стороны…»",
    ],
  },
  {
    id: 7,
    name: "Мартовский Заяц",
    role: "Истеричный участник чаепития",
    symbol: "🐇",
    color: "#FFA500",
    image: "images/characters/hare.jpg",
    description:
      "Постоянно нервничающий и суетливый заяц, который считает, что всегда «март» и потому можно вести себя безумно. Организатор знаменитого Бесконечного Чаепития.",
    quote: "Март! Пора с ума сходить! Можно? Конечно можно!",
    facts: [
      "Состояние: Весеннее помешательство",
      "Роль: Хозяин чаепития",
      "Пища: Хлеб с маслом",
      "Особенность: Путает время года",
    ],
  },
  {
    id: 8,
    name: "Соня",
    role: "Вечно сонный гость",
    symbol: "💤",
    color: "#8B7355",
    image: "images/characters/dormouse.jpg",
    description:
      "Постоянно засыпающий во время разговора и чаепития. Его рассказы часто обрываются на середине, когда он проваливается в сон. Живёт в чайнике.",
    quote: "…и тогда мы все пили чай… zzz…",
    facts: [
      "Состояние: Перманентная сонливость",
      "Дом: Чайник",
      "Талант: Засыпать в любой момент",
      "Истории: Всегда незаконченные",
    ],
  },
];

function renderCharacters() {
  const grid = document.querySelector(".characters-grid");
  if (!grid) return;

  grid.innerHTML = "";

  characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.dataset.id = character.id;
    card.style.setProperty("--card-color", character.color);

    const img = new Image();
    img.onload = function () {
      card.innerHTML = `
                <div class="character-circle">
                    <img src="${character.image}" alt="${character.name}" loading="lazy">
                </div>
                <h3 class="character-name">${character.name}</h3>
                <p class="character-role">${character.role}</p>
                <div class="character-symbol">${character.symbol}</div>
            `;
    };

    img.onerror = function () {
      const bgColor = character.color.replace("#", "");
      card.innerHTML = `
                <div class="character-circle">
                    <div class="avatar-fallback" style="background: ${character.color};">
                        ${character.symbol}
                    </div>
                </div>
                <h3 class="character-name">${character.name}</h3>
                <p class="character-role">${character.role}</p>
                <div class="character-symbol">${character.symbol}</div>
            `;
    };

    img.src = character.image;
    card.addEventListener("click", () => openCharacterModal(character));
    grid.appendChild(card);
  });
}

// Открытие модального окна с информацией о персонаже
function openCharacterModal(character) {
  const modal = document.getElementById("characterModal");
  const modalAvatar = modal.querySelector(".modal-avatar");
  const modalInfo = modal.querySelector(".modal-info");

  if (!modal || !modalAvatar || !modalInfo) return;

  // Очищаем предыдущий фон
  const existingBg = modal.querySelector(".modal-bg-character");
  if (existingBg) {
    existingBg.remove();
  }

  // Создаём фоновое изображение персонажа
  const bgCharacter = document.createElement("div");
  bgCharacter.className = "modal-bg-character";
  bgCharacter.style.backgroundImage = `url('${character.image}')`;
  modal.querySelector(".modal-content").prepend(bgCharacter);

  // Проверяем изображение для аватара
  const img = new Image();
  img.onload = function () {
    modalAvatar.innerHTML = `<img src="${character.image}" alt="${character.name}">`;
  };
  img.onerror = function () {
    modalAvatar.innerHTML = `
            <div class="avatar-fallback-large" style="background: ${character.color};">
                ${character.symbol}<br>
                <span>${character.name}</span>
            </div>
        `;
  };
  img.src = character.image;

  // Заполняем информацию о персонаже
  modalInfo.innerHTML = `
        <h3 style="color: ${character.color}">${character.name}</h3>
        <p class="modal-role">${character.role}</p>
        <div class="modal-description">
            <p>${character.description}</p>
        </div>
        <blockquote class="modal-quote">${character.quote}</blockquote>
        <div class="modal-facts">
            <h4>Известные факты:</h4>
            <ul>
                ${character.facts.map((fact) => `<li>${fact}</li>`).join("")}
            </ul>
        </div>
    `;

  // Устанавливаем цвет для CSS переменной
  modal.style.setProperty("--character-color", character.color);

  // Показываем модальное окно
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Закрытие модального окна
document.addEventListener("DOMContentLoaded", function () {
  // Закрытие по крестику
  document.querySelector(".close-modal")?.addEventListener("click", closeModal);

  // Закрытие по клику вне окна
  document
    .getElementById("characterModal")
    ?.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal();
      }
    });

  // Закрытие по Esc
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

function closeModal() {
  const modal = document.getElementById("characterModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

// Инициализация при загрузке
document.addEventListener("DOMContentLoaded", renderCharacters);