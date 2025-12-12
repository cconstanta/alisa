document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы формы
  const form = document.getElementById("questionForm");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMessage");
  const submitButton = document.querySelector(".submit-button");
  const buttonText = submitButton
    ? submitButton.querySelector(".button-text")
    : null;
  const buttonIcon = submitButton
    ? submitButton.querySelector(".button-icon")
    : null;

  // Проверяем, что форма существует на странице
  if (!form) {
    console.error("Форма не найдена! Проверьте ID questionForm в HTML.");
    return;
  }

  // Функция для валидации email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Валидация email при потере фокуса
  if (emailInput) {
    emailInput.addEventListener("blur", function () {
      if (!validateEmail(emailInput.value) && emailInput.value !== "") {
        emailInput.parentElement.classList.add("error");
        if (emailError) {
          emailError.style.display = "block";
        }
      } else {
        emailInput.parentElement.classList.remove("error");
        if (emailError) {
          emailError.style.display = "none";
        }
      }
    });
  }

  // Показываем состояние загрузки
  function showLoading() {
    if (buttonText) {
      buttonText.textContent = "Отправка...";
    }
    if (buttonIcon) {
      buttonIcon.textContent = "⏳";
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.style.opacity = "0.7";
    }
  }

  // Скрываем состояние загрузки
  function hideLoading() {
    if (buttonText) {
      buttonText.textContent = "Спросить у Гусеницы";
    }
    if (buttonIcon) {
      buttonIcon.textContent = "🍄";
    }
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.style.opacity = "1";
    }
  }

  // Показываем сообщение об ошибке
  function showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.cssText =
      "background: rgba(255, 107, 107, 0.1); border-left: 4px solid var(--color-error); padding: 15px; margin-top: 20px; border-radius: 8px; animation: shake 0.5s ease;";
    errorDiv.innerHTML = "<strong>Ошибка!</strong> " + message;

    const existingError = form.querySelector(".form-error");
    if (existingError) {
      existingError.remove();
    }

    errorDiv.className = "form-error";
    form.appendChild(errorDiv);

    setTimeout(function () {
      if (errorDiv.parentNode) {
        errorDiv.remove();
      }
    }, 5000);
  }

  // Функция отправки формы на Formspree
  async function sendForm(formData) {
    try {
      // ВАШ ENDPOINT URL ЗДЕСЬ ↓
      const response = await fetch("https://formspree.io/f/mdkqyogd", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          question: formData.get("question"),
          _subject: "Новый вопрос для Гусеницы из Архива Чудес",
          _replyto: formData.get("email"),
          _cc: "HamsterTheBest14@mail.ru",
          // Дополнительные данные для отладки
          _website: "Архив Страны Чудес",
          _url: window.location.href,
          _timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        return true;
      } else {
        // Пытаемся получить детали ошибки от Formspree
        const errorData = await response.json();
        throw new Error(errorData.error || "Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка отправки на Formspree:", error);
      throw error;
    }
  }

  // Обработчик отправки формы
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Валидация данных
    let isValid = true;

    if (!validateEmail(emailInput.value)) {
      emailInput.parentElement.classList.add("error");
      if (emailError) {
        emailError.style.display = "block";
      }
      isValid = false;
    }

    if (!isValid) {
      showError("Пожалуйста, проверьте правильность email адреса");
      return;
    }

    // Показываем состояние загрузки
    showLoading();

    try {
      // Собираем данные из формы
      const formData = new FormData(form);

      // Отправляем на Formspree
      await sendForm(formData);

      // Успешная отправка - показываем сообщение
      form.style.display = "none";
      if (successMessage) {
        successMessage.style.display = "block";
      }

      // Логируем успех в консоль
      console.log("✅ Форма успешно отправлена на Formspree!");
      console.log("📧 Письмо должно прийти на: HamsterTheBest14@mail.ru");
    } catch (error) {
      // Обработка ошибок
      hideLoading();

      let errorMessage = "Что-то пошло не так. Попробуйте снова.";

      if (error.message.includes("Failed to fetch")) {
        errorMessage =
          "Проблема с интернет-соединением. Проверьте подключение.";
      } else if (error.message.includes("rate limit")) {
        errorMessage = "Слишком много запросов. Попробуйте через минуту.";
      }

      showError(errorMessage);
      console.error("❌ Ошибка отправки формы:", error);

      // Дополнительно: предлагаем альтернативный способ связи
      setTimeout(() => {
        const helpMessage = document.createElement("div");
        helpMessage.className = "form-hint";
        helpMessage.style.cssText =
          "margin-top: 15px; padding: 10px; background: rgba(212, 175, 55, 0.1); border-radius: 5px;";
        helpMessage.innerHTML =
          "Если проблема повторяется, напишите напрямую на <strong>HamsterTheBest14@mail.ru</strong>";
        form.appendChild(helpMessage);
      }, 1000);
    }
  });

  // Кнопка сброса формы
  const resetButton = document.querySelector(".reset-form");
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      // Восстанавливаем исходное состояние
      form.reset();
      form.style.display = "block";

      if (successMessage) {
        successMessage.style.display = "none";
      }

      if (emailInput) {
        emailInput.parentElement.classList.remove("error");
      }

      if (emailError) {
        emailError.style.display = "none";
      }

      hideLoading();

      // Удаляем дополнительные сообщения об ошибках
      const extraMessages = form.querySelectorAll(".form-error, .form-hint");
      extraMessages.forEach((msg) => msg.remove());
    });
  }

  // Анимация пера при фокусе на текстовом поле
  const textarea = document.getElementById("question");
  if (textarea) {
    textarea.addEventListener("focus", function () {
      this.parentElement.classList.add("writing");
    });

    textarea.addEventListener("blur", function () {
      this.parentElement.classList.remove("writing");
    });
  }

  // Динамическая валидация email при вводе
  if (emailInput) {
    emailInput.addEventListener("input", function () {
      if (validateEmail(emailInput.value)) {
        emailInput.parentElement.classList.remove("error");
        if (emailError) {
          emailError.style.display = "none";
        }
      }
    });
  }

  // Добавляем обработчик для отладки
  if (typeof FormspreeDebug !== "undefined" && FormspreeDebug) {
    console.log("🔧 Форма настроена и готова к работе");
    console.log("📧 Endpoint:", "https://formspree.io/f/xrbnrgzq");
    console.log("🎯 Получатель:", "HamsterTheBest14@mail.ru");
  }
});

// Функция для быстрой проверки формы (можно вызвать из консоли)
function testForm() {
  const form = document.getElementById("questionForm");
  if (form) {
    form.name.value = "Тестовый пользователь";
    form.email.value = "test@example.com";
    form.question.value =
      "Это тестовое сообщение для проверки формы " +
      new Date().toLocaleTimeString();
    console.log("✅ Тестовые данные заполнены");
  } else {
    console.error("❌ Форма не найдена");
  }
}
