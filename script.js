function toggleTheme() {
  document.body.classList.toggle('light');
  const btn = document.getElementById('themeBtn');
  if (document.body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
    btn.innerHTML = "🌞";
  } else {
    localStorage.setItem('theme', 'dark');
    btn.innerHTML = "🌙";
  }
}
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.getElementById('themeBtn');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    btn.innerHTML = "🌞";
  } else {
    btn.innerHTML = "🌙";
  }
}