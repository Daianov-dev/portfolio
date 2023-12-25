document.addEventListener('DOMContentLoaded', function () {
    const headerTop = document.querySelector('.header__top');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                headerTop.classList.add('fixed');
            } else {
                headerTop.classList.remove('fixed');
            }
        });
    }, { threshold: 0 });

    observer.observe(document.querySelector('.marker-element'));
});


document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcher = document.querySelector('.header__theme-switcher');

  themeSwitcher.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      this.classList.toggle('header__theme-switcher--active');

      // Опционально: сохранение выбора темы в localStorage
      if (document.body.classList.contains('dark-theme')) {
          localStorage.setItem('theme', 'dark');
      } else {
          localStorage.setItem('theme', 'light');
      }
  });

  // Опционально: восстановление темы из localStorage при загрузке страницы
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
  }
});


document.querySelector('.header__burger-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('is-active');
});



