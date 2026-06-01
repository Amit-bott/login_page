document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form8');
  const btnCircle = document.querySelector('.form8__btncircle');
  const loginBlock = document.querySelector('.form8__log');
  const regBlock = document.querySelector('.form8__reg');

  // Якщо раптом якихось елементів немає — просто нічого не робимо
  if (!form || !btnCircle || !loginBlock || !regBlock) return;

  // Початкова висота форми — під блок логіну
  form.style.height = loginBlock.offsetHeight + 'px';

  btnCircle.addEventListener('click', function () {
    // Кнопка
    this.classList.toggle('active');

    // Зміна фону форми
    form.classList.toggle('register__bg');

    // Перемикання блоків логіну / реєстрації
    loginBlock.classList.toggle('slided');
    regBlock.classList.toggle('slided');

    // Чекаємо один кадр, щоб класи застосувались, тоді міряємо висоту
    requestAnimationFrame(function () {
      const targetHeight = regBlock.classList.contains('slided')
        ? regBlock.offsetHeight
        : loginBlock.offsetHeight;

      form.style.height = targetHeight + 'px';
      // Анімація плавності вже є в CSS: transition: all .5s ease;
    });
  });
});
