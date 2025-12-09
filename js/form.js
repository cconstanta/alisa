// Валидация формы
const form = document.getElementById("questionForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

emailInput.addEventListener("blur", () => {
  if (!validateEmail(emailInput.value) && emailInput.value !== "") {
    emailInput.parentElement.classList.add("error");
    emailError.style.display = "block";
  } else {
    emailInput.parentElement.classList.remove("error");
    emailError.style.display = "none";
  }
});

// Отправка формы
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Валидация
  let isValid = true;

  if (!validateEmail(emailInput.value)) {
    emailInput.parentElement.classList.add("error");
    emailError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    // Эмуляция отправки
    form.style.display = "none";
    successMessage.style.display = "block";

    // Можно добавить реальную отправку на сервер:
    /*
        fetch('/api/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: emailInput.value,
                question: document.getElementById('question').value
            })
        })
        .then(response => response.json())
        .then(data => {
            form.style.display = 'none';
            successMessage.style.display = 'block';
        })
        .catch(error => {
            alert('Что-то пошло не так. Попробуйте снова.');
        });
        */
  }
});

// Сброс формы
document.querySelector(".reset-form")?.addEventListener("click", () => {
  form.reset();
  form.style.display = "block";
  successMessage.style.display = "none";
  emailInput.parentElement.classList.remove("error");
  emailError.style.display = "none";
});

// Анимация пера при фокусе
const textarea = document.getElementById("question");
textarea.addEventListener("focus", function () {
  this.parentElement.classList.add("writing");
});

textarea.addEventListener("blur", function () {
  this.parentElement.classList.remove("writing");
});