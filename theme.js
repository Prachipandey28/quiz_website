// theme.js - QuizBrain Light/Dark Theme Engine
(function () {
  // Apply theme immediately on script parse to prevent page flashing
  const savedTheme = localStorage.getItem('quizbrain_theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = 'light';
  
  if (!currentTheme) {
    // If no explicit manual theme is set, toggle relative to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    newTheme = prefersDark ? 'light' : 'dark';
  } else {
    newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  }
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('quizbrain_theme', newTheme);
  updateThemeToggleIcon();
}

function updateThemeToggleIcon() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let isDark = false;
  
  if (!currentTheme) {
    // Default to system settings if no override exists
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    isDark = currentTheme === 'dark';
  }
  
  btn.innerHTML = isDark ? '☀️' : '🌙';
  btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  btn.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
}

// Injects the toggle button dynamically on load
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('theme-toggle-btn')) {
    const container = document.createElement('div');
    container.className = 'theme-toggle';
    container.innerHTML = `
      <button id="theme-toggle-btn" class="theme-toggle-btn" onclick="toggleTheme()" aria-label="Toggle theme">
        🌙
      </button>
    `;
    document.body.appendChild(container);
  }
  updateThemeToggleIcon();
  
  // Listen for system theme changes and update the icon dynamically if no manual preference is set
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!localStorage.getItem('quizbrain_theme')) {
      updateThemeToggleIcon();
    }
  });
});
