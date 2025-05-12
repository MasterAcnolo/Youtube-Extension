const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function updateThemeIcon() {
  const isDark = body.classList.contains('dark-theme');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  }
  updateThemeIcon();
});
