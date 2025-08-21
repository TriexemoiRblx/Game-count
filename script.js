// ==== Sign Up ====
function signup(e) {
  e.preventDefault();
  const user = document.getElementById('signupUser').value.trim();
  const pass = document.getElementById('signupPass').value;

  if (!user || !pass) return alert("Please fill in all fields.");

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[user]) return alert("Username already exists!");

  users[user] = pass;
  localStorage.setItem('users', JSON.stringify(users));
  alert("Sign up successful!");
}

// ==== Log In ====
function login(e) {
  e.preventDefault();
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[user] === pass) {
    localStorage.setItem('loggedInUser', user);
    document.getElementById('userStatus').textContent = `✅ Logged in as: ${user}`;
    alert("Login successful!");
  } else {
    alert("Incorrect username or password.");
  }
}

// ==== Like Game ====
function likeGame(button) {
  const gameDiv = button.closest('.game');
  const gameId =