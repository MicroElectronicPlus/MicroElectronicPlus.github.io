// public/auth.js (Front-end only, LocalStorage demo)
export function getUser() {
  try { return JSON.parse(localStorage.getItem('user') || 'null'); }
  catch { return null; }
}
export function isLoggedIn() { return !!getUser(); }
export function saveUser(user, password) {
  // هش واقعی نداریم—صرفا دمو
  localStorage.setItem('user', JSON.stringify({ ...user, _ts: Date.now() }));
  localStorage.setItem('user_pass', password);
}
export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('user_pass');
}
export function requireAuth(redirectTo = './auth.html') {
  if (!isLoggedIn()) location.href = redirectTo;
}
