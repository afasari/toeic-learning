// Dark Mode Toggle
(function() {
  const toggleButton = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.classList.add(`theme-${savedTheme}`);

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const currentTheme = htmlElement.classList.contains('theme-dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      htmlElement.classList.remove(`theme-${currentTheme}`);
      htmlElement.classList.add(`theme-${newTheme}`);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Set theme on load
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme')) {
    htmlElement.classList.remove('theme-light');
    htmlElement.classList.add('theme-dark');
    localStorage.setItem('theme', 'dark');
  }
})();
