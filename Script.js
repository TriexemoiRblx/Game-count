// ==== LIKE GAME ====
function likeGame(button) {
  const card = button.closest('.game-card');
  const gameId = card.getAttribute('data-id');
  const likedGames = JSON.parse(localStorage.getItem('likedGames') || '[]');

  if (likedGames.includes(gameId)) {
    alert("You've already liked this game!");
    return;
  }

  const countSpan = button.querySelector('.like-count');
  let count = parseInt(countSpan.textContent);
  countSpan.textContent = count + 1;

  likedGames.push(gameId);
  localStorage.setItem('likedGames', JSON.stringify(likedGames));
}

// ==== SIGN UP ====
function handleSignup(e) {
  e.preventDefault();
  const username = document.getElementById('signupUsername').value.trim();
  const birthdate = document.getElementById('signupBirthdate').value;
  const password = document.getElementById('signupPassword').value;

  if (!username || !birthdate || !password) {
    alert("Please fill in all fields.");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username]) {
    alert("Username already exists!");
    return;
  }

  users[username] = { birthdate, password };
  localStorage.setItem('users', JSON.stringify(users));
  alert("Sign up successful!");
}

// ==== LOGIN ====
function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username] && users[username].password === password) {
    localStorage.setItem('currentUser', username);
    alert("Login successful!");
  } else {
    alert("Incorrect username or password.");
  }
}

// ==== GAME DATA ====
const gameData = {
  "growagarden": {
    title: "Grow a Garden",
    creator: "Garden Dev",
    visits: "1.2B",
    rating: "88.40%",
    favorites: "3.21M",
    players: "4,203",
    description: "Plant seeds, grow your garden, unlock new plants!"
  },
  "stealabrainrot": {
    title: "Steal a Brainrot",
    creator: "BRAZILIAN SPYDER",
    visits: "5.9B",
    rating: "90.60%",
    favorites: "9.61M",
    players: "2,981",
    description: "Buy Brainrots, steal from others, rebirth, troll with gear!"
  }
};

// ==== LOAD GAME PAGE ====
function loadGamePage(gameId) {
  const game = gameData[gameId];
  if (!game) {
    document.getElementById('gameTitle').textContent = "Game not found.";
    return;
  }

  document.getElementById('gameTitle').textContent = game.title;
  document.getElementById('gameCreator').textContent = game.creator;
  document.getElementById('gameVisits').textContent = game.visits;
  document.getElementById('gameRating').textContent = game.rating;
  document.getElementById('gameFavorites').textContent = game.favorites;
  document.getElementById('gamePlayers').textContent = game.players;
  document.getElementById('gameDescription').textContent = game.description;
}
