const strings = {
  bn: {
    title: "ঘরের থালি",
    note: "পেশোয়ারি মাংস · গরুর কারি · মুরগির বিরিয়ানি · শুধুমাত্র CSS",
    hint: "একটি থালায় ক্লিক করে সুগন্ধ ও বাষ্প দেখুন",
    labelPeshawari: "পেশোয়ারি মাংস",
    labelBiryani: "মুরগির বিরিয়ানি",
    labelCurry: "গরুর কারি",
    pause: "বাষ্প থামান",
    resume: "বাষ্প চালু",
    langSwitch: "English",
    langAria: "Switch to English",
    stageAria: "দক্ষিণ এশিয়ার আরামের খাবারের CSS আর্ট",
    feastAria: "বাঁয়ে পেশোয়ারি মাংস, মাঝে মুরগির বিরিয়ানি, ডানে গরুর কারি",
    documentTitle: "ঘরের থালি: CSS Art",
    dishAria: ". সুগন্ধ দেখতে ক্লিক বা Enter চাপুন",
    focus: {
      peshawari:
        "পেশোয়ারি মাংস: হালকা ঝোল, হাড়, আলু আর গোটা গোলমরিচের গন্ধ উঠছে।",
      biryani: "বিরিয়ানির দম খুলল। জাফরান আর ভাজা পেঁয়াজের সুবাস।",
      curry: "গরুর কারির ঘন ঝোল ঘুরছে। মশলার তাপ অনুভব করুন।",
    },
    clearFocus: "সব থালা আবার একসাথে দেখা যাচ্ছে।",
  },
  en: {
    title: "Ghorer Thali",
    note: "Peshawari meat · Beef curry · Chicken biryani · pure CSS",
    hint: "Click a dish to follow its aroma and steam",
    labelPeshawari: "Peshawari Meat",
    labelBiryani: "Chicken Biryani",
    labelCurry: "Beef Curry",
    pause: "Pause steam",
    resume: "Resume steam",
    langSwitch: "বাংলা",
    langAria: "Switch to Bangla",
    stageAria: "CSS art of a South Asian comfort food feast",
    feastAria: "Peshawari meat on the left, chicken biryani in the center, beef curry on the right",
    documentTitle: "Ghorer Thali: CSS Art",
    dishAria: ". Click or press Enter to follow its aroma",
    focus: {
      peshawari:
        "Peshawari meat: light broth, bone, potato, and whole black pepper rising.",
      biryani: "The biryani dum opens. Saffron and fried onion perfume the air.",
      curry: "Beef curry simmers thick. Feel the spice heat.",
    },
    clearFocus: "The full feast is in view again.",
  },
};

const STORAGE_KEY = "ghorer-thali-css-lang";

function readLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "bn") return stored;
  } catch {
    /* ignore */
  }
  return "bn";
}

let lang = readLang();
let focused = null;

const pauseBtn = document.getElementById("pauseBtn");
const langToggle = document.getElementById("langToggle");
const feast = document.getElementById("feast");
const focusNote = document.getElementById("focusNote");
const aroma = document.getElementById("aroma");
const dishes = document.querySelectorAll("[data-dish]");

function applyLang() {
  const t = strings[lang];
  document.documentElement.lang = lang;
  document.title = t.documentTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key || !(key in t)) return;
    if (key === "pause") {
      const paused = document.body.classList.contains("is-paused");
      el.textContent = paused ? t.resume : t.pause;
      return;
    }
    el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key || !(key in t)) return;
    el.setAttribute("aria-label", t[key]);
  });

  dishes.forEach((dish) => {
    const key = dish.dataset.dish;
    const labelKey =
      key === "peshawari"
        ? "labelPeshawari"
        : key === "biryani"
          ? "labelBiryani"
          : "labelCurry";
    dish.setAttribute("aria-label", t[labelKey] + t.dishAria);
  });

  if (langToggle) {
    langToggle.textContent = t.langSwitch;
    langToggle.setAttribute("aria-label", t.langAria);
  }

  if (focused && focusNote) {
    focusNote.textContent = t.focus[focused];
  }

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

function setFocus(id) {
  const t = strings[lang];

  if (focused === id) {
    focused = null;
    feast?.removeAttribute("data-focus");
    dishes.forEach((d) => {
      d.classList.remove("is-focused", "is-dimmed");
      d.setAttribute("aria-pressed", "false");
    });
    aroma?.classList.remove("is-active");
    if (focusNote) focusNote.textContent = t.clearFocus;
    return;
  }

  focused = id;
  feast?.setAttribute("data-focus", id);
  aroma?.classList.add("is-active");
  aroma?.setAttribute("data-flavor", id);

  dishes.forEach((d) => {
    const match = d.dataset.dish === id;
    d.classList.toggle("is-focused", match);
    d.classList.toggle("is-dimmed", !match);
    d.setAttribute("aria-pressed", String(match));
  });

  if (focusNote) focusNote.textContent = t.focus[id];
}

pauseBtn?.addEventListener("click", () => {
  const paused = document.body.classList.toggle("is-paused");
  pauseBtn.setAttribute("aria-pressed", String(paused));
  const t = strings[lang];
  pauseBtn.textContent = paused ? t.resume : t.pause;
});

langToggle?.addEventListener("click", () => {
  lang = lang === "bn" ? "en" : "bn";
  applyLang();
});

dishes.forEach((dish) => {
  dish.addEventListener("click", () => setFocus(dish.dataset.dish));
  dish.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFocus(dish.dataset.dish);
    }
  });
});

applyLang();
