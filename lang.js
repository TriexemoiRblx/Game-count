const supportedLanguages = {
  en: {
    gameName: "Roblox",
    playerCount: "Player Count",
    featuresTitle: "Game Features",
    goalsTitle: "Event Goals",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    goals: ["Goal 1", "Goal 2", "Goal 3"]
  },
  es: {
    gameName: "Roblox",
    playerCount: "Recuento de jugadores",
    featuresTitle: "Características del juego",
    goalsTitle: "Metas del evento",
    features: ["Característica 1", "Característica 2", "Característica 3"],
    goals: ["Meta 1", "Meta 2", "Meta 3"]
  },
  fr: {
    gameName: "Roblox",
    playerCount: "Nombre de joueurs",
    featuresTitle: "Fonctionnalités du jeu",
    goalsTitle: "Objectifs de l'événement",
    features: ["Fonctionnalité 1", "Fonctionnalité 2", "Fonctionnalité 3"],
    goals: ["Objectif 1", "Objectif 2", "Objectif 3"]
  },
  vi: {
    gameName: "Roblox",
    playerCount: "Số người chơi",
    featuresTitle: "Tính năng trò chơi",
    goalsTitle: "Mục tiêu sự kiện",
    features: ["Tính năng 1", "Tính năng 2", "Tính năng 3"],
    goals: ["Mục tiêu 1", "Mục tiêu 2", "Mục tiêu 3"]
  }
};

function loadLanguage(lang) {
  const data = supportedLanguages[lang];
  document.getElementById("gameName").innerText = data.gameName;
  document.getElementById("playerCountLabel").innerText = data.playerCount;
  document.getElementById("featuresTitle").innerText = data.featuresTitle;
  document.getElementById("goalsTitle").innerText = data.goalsTitle;

  const features = document.querySelectorAll("#features li");
  const goals = document.querySelectorAll("#goals li");

  data.features.forEach((feature, index) => {
    if (features[index]) features[index].innerText = feature;
  });

  data.goals.forEach((goal, index) => {
    if (goals[index]) goals[index].innerText = goal;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("languageSelect");
  select.addEventListener("change", (e) => {
    loadLanguage(e.target.value);
  });
  loadLanguage("en");
});
