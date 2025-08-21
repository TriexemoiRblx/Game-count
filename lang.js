const supportedLanguages = {
  en: "English", vi: "Tiếng Việt", ru: "Russian", th: "Thai", lo: "Lao",
  es: "Spanish", pt: "Portuguese", fr: "French", de: "German", it: "Italian",
  nl: "Dutch", fil: "Filipino", ms: "Malay", ko: "Korean", ja: "Japanese",
  tr: "Turkish", ar: "Arabic", hi: "Hindi", bn: "Bengali", pl: "Polish",
  uk: "Ukrainian", el: "Greek", cs: "Czech", ro: "Romanian", hu: "Hungarian"
};

const selector = document.getElementById("languageSelector");
Object.entries(supportedLanguages).forEach(([code, name]) => {
  const option = document.createElement("option");
  option.value = code;
  option.textContent = name;
  selector.appendChild(option);
});

const languageList = document.getElementById("languageList");
if (languageList) {
  Object.entries(supportedLanguages).forEach(([code, name]) => {
    const li = document.createElement("li");
    li.textContent = `${code} - ${name}`;
    languageList.appendChild(li);
  });
}

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => {
      if (!res.ok) throw new Error("Language file not found");
      return res.json();
    })
    .then(data => {
      const map = {
        langTitle: data.languageOptions,
        featuredTitle: data.featuredGames,
        eventTitle: data.eventGame,
        growTitle: data.growTitle,
        growVisits: data.growVisits,
        growFavorites: data.growFavorites,
        brainrotTitle: data.brainrotTitle,
        brainrotVisits: data.brainrotVisits,
        brainrotFavorites: data.brainrotFavorites,
        eventNote: data.eventNote,
        event1Title: data.event1Title,
        event1Desc: data.event1Desc,
        event1Time: data.event1Time,
        event1Link: data.event1Link,
        event2Title: data.event2Title,
        event2Desc: data.event2Desc,
        event2Time: data.event2Time,
        event2Link: data.event2Link
      };

      for (const [id, text] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
      }

      if (document.getElementById("growPlaying"))
        document.getElementById("growPlaying").childNodes[0].textContent = data.growPlaying;

      if (document.getElementById("brainrotPlaying"))
        document.getElementById("brainrotPlaying").childNodes[0].textContent = data.brainrotPlaying;
    })
    .catch(err => {
      console.error("Language load error:", err);
    });
}
