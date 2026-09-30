document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // تطبيق الوضع المفضل المسبق على HTML و Body لمنع الوميض
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    document.body.classList.add('dark-mode');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
      document.body.classList.toggle('dark-mode');

      let theme = 'light';
      if (document.documentElement.classList.contains('dark-mode')) {
        theme = 'dark';
        toggleBtn.textContent = '☀️';
      } else {
        toggleBtn.textContent = '🌙';
      }

      // حفظ الخيار ليعمل في كامل الموقع
      localStorage.setItem('theme', theme);
    });
  }
});