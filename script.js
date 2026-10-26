const themeButton = document.getElementById('theme-toggle');
let savedTheme;
try { savedTheme = localStorage.getItem('ulad-notebook-theme'); } catch { savedTheme = null; }
if (savedTheme === 'night') document.documentElement.dataset.theme = 'night';
function syncThemeButton() {
  const night = document.documentElement.dataset.theme === 'night';
  themeButton.setAttribute('aria-pressed', String(night));
  themeButton.setAttribute('aria-label', night ? 'Switch to paper mode' : 'Switch to night shift');
  themeButton.firstChild.textContent = night ? 'PAPER MODE ' : 'NIGHT SHIFT ';
}
syncThemeButton();
themeButton.addEventListener('click', () => {
  const night = document.documentElement.dataset.theme !== 'night';
  document.documentElement.dataset.theme = night ? 'night' : 'paper';
  try { localStorage.setItem('ulad-notebook-theme', night ? 'night' : 'paper'); } catch { /* The toggle still works for this visit. */ }
  syncThemeButton();
});
document.getElementById('year').textContent = new Date().getFullYear();
