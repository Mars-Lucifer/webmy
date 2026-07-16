const STORAGE_KEY = "webmy-language";
const supportedLangs = ["ru", "sr", "en"];

const translations = {
  ru: {
    metaTitle: "Nikita Rybalko | Web-дизайнер и разработчик",
    nav: {
      skills: "Навыки",
      portfolio: "Портфолио",
      competencies: "Компетенции",
      contacts: "Контакты",
    },
    hero: {
      name: "Никита Рыбалко",
      web: "Web-",
      roleSuffix: "дизайнер и разработчик",
      description:
        'Проектирую UI/UX интерфейсы и полностью реализую их в коде (Web, Mobile, Desktop). Сервисы должны быть красивыми, приносить пользу и <span class="text-tiny text-[var(--color-gray-text)]">деньги</span>',
      contactsButton: "Контакты",
      portfolioButton: "Портфолио",
      resumeButton: "Скачать резюме",
    },
    skills: {
      sectionLabel: "навыки",
      designTitle: "Дизайн",
      developmentTitle: "Разработка",
      winBadge: "Вы супер!",
    },
    portfolio: {
      sectionLabel: "портфолио",
      cards: [
        {
          title: "Mochiland",
          description:
            "B2B-платформа для компании Mochiland, автоматизирующая сделки поставки их товара",
          status: "В разработке",
        },
        {
          title: "Артур Одилов",
          description: "Сайт-портфолио для профессионального фотографа Москвы",
          status: null,
        },
        {
          title: "Российское Содружество Колледжей",
          description:
            "Полноценная всероссийская платформа, включает множество функций для развития образовательных учреждений",
          status: null,
        },
        {
          title: "Oasis",
          description:
            "Полный пак для компании по озеленению, включающий фирменный стиль, сайт, AI-бота",
          status: "Сайт временно заморожен",
        },
        {
          title: "EnergyStart",
          description:
            "Фирменный стиль и сайт компании, занимающейся разработкой систем повышения эффективности ЖКХ",
          status: null,
        },
      ],
    },
    competencies: {
      sectionLabel: "Компетенции",
      cards: {
        design: {
          title: "Дизайн",
          tags: ["Web-дизайн", "Презентации", "Типографика", "Анимации"],
        },
        development: {
          title: "Разработка",
          tags: ["Web-платформы", "Лендинги", "Mobile App", "Desktop App"],
        },
        other: {
          title: "Прочее",
          text: "Пишите если у вас есть какая-то другая идея",
        },
      },
    },
    contact: {
      sectionLabel: "контакты",
      heading: "Готов обсудить вашу задумку",
      telegramBlog: "Личный блог про мою жизнь и работу",
      telegramChannelTitle: "Телеграмм канал",
      telegramAccountTitle: "Телеграмм",
      whatsappTitle: "WhatsApp",
    },
    footer: {
      contactsTitle: "Контакты",
      dataTitle: "Данные",
      selfEmployed: "(РФ) Самозанятый: Рыбалко Никита Станиславович",
      inn: "(РФ) ИНН: 310260309003",
      jmbg: "(Сербия) JMBG: 9150107900011",
      copyright: "© 2026 Nikita Rybalko. Все права защищены.",
      channelLink: "Лучший телеграмм канал",
    },
  },
  sr: {
    metaTitle: "Nikita Rybalko | Web dizajner i programer",
    nav: {
      skills: "Veštine",
      portfolio: "Portfolio",
      competencies: "Kompetencije",
      contacts: "Kontakti",
    },
    hero: {
      name: "Nikita Rybalko",
      web: "Web-",
      roleSuffix: "dizajner i programer",
      description:
        'Dizajniram UI/UX interfejse i u potpunosti ih realizujem u kodu (Web, Mobile, Desktop). Servisi treba da budu lepi, korisni i da donose <span class="text-tiny text-[var(--color-gray-text)]">novac</span>',
      contactsButton: "Kontakti",
      portfolioButton: "Portfolio",
      resumeButton: "Preuzmi CV",
    },
    skills: {
      sectionLabel: "veštine",
      designTitle: "Dizajn",
      developmentTitle: "Razvoj",
      winBadge: "Sjajan si!",
    },
    portfolio: {
      sectionLabel: "portfolio",
      cards: [
        {
          title: "Mochiland",
          description:
            "B2B platforma za kompaniju Mochiland koja automatizuje prodaju njihove robe",
          status: "U izradi",
        },
        {
          title: "Artur Odilov",
          description: "Portfolio sajt za profesionalnog fotografa iz Moskve",
          status: null,
        },
        {
          title: "Ruska zajednica koledža",
          description:
            "Potpuna sve-ruska platforma koja obuhvata mnogo funkcija za razvoj obrazovnih institucija",
          status: null,
        },
        {
          title: "Oasis",
          description:
            "Kompletan paket za kompaniju za ozelenjavanje, uključujući vizuelni identitet, sajt i AI bota",
          status: "Sajt je privremeno zamrznut",
        },
        {
          title: "EnergyStart",
          description:
            "Vizuelni identitet i sajt kompanije koja razvija sisteme za povećanje efikasnosti komunalnih usluga",
          status: null,
        },
      ],
    },
    competencies: {
      sectionLabel: "kompetencije",
      cards: {
        design: {
          title: "Dizajn",
          tags: ["Web dizajn", "Prezentacije", "Tipografija", "Animacije"],
        },
        development: {
          title: "Razvoj",
          tags: ["Web platforme", "Landing stranice", "Mobile App", "Desktop App"],
        },
        other: {
          title: "Ostalo",
          text: "Pišite ako imate još neku drugu ideju",
        },
      },
    },
    contact: {
      sectionLabel: "kontakti",
      heading: "Spreman sam da razgovaramo o tvojoj ideji",
      telegramBlog: "Lični blog o mom životu i radu",
      telegramChannelTitle: "Telegram kanal",
      telegramAccountTitle: "Telegram",
      whatsappTitle: "WhatsApp",
    },
    footer: {
      contactsTitle: "Kontakti",
      dataTitle: "Podaci",
      selfEmployed: "(RF) Samostalni preduzetnik: Rybalko Nikita Stanislavovič",
      inn: "(RF) PIB: 310260309003",
      jmbg: "(Srbija) JMBG: 9150107900011",
      copyright: "© 2026 Nikita Rybalko. Sva prava zadržana.",
      channelLink: "Najbolji Telegram kanal",
    },
  },
  en: {
    metaTitle: "Nikita Rybalko | Web designer and developer",
    nav: {
      skills: "Skills",
      portfolio: "Portfolio",
      competencies: "Competencies",
      contacts: "Contacts",
    },
    hero: {
      name: "Nikita Rybalko",
      web: "Web-",
      roleSuffix: "designer and developer",
      description:
        'I design UI/UX interfaces and fully build them in code (Web, Mobile, Desktop). Products should look great, be useful, and bring <span class="text-tiny text-[var(--color-gray-text)]">money</span>',
      contactsButton: "Contacts",
      portfolioButton: "Portfolio",
      resumeButton: "Download resume",
    },
    skills: {
      sectionLabel: "skills",
      designTitle: "Design",
      developmentTitle: "Development",
      winBadge: "You are awesome!",
    },
    portfolio: {
      sectionLabel: "portfolio",
      cards: [
        {
          title: "Mochiland",
          description:
            "A B2B platform for Mochiland that automates the supply deal flow of their products",
          status: "In progress",
        },
        {
          title: "Artur Odilov",
          description: "A portfolio website for a professional photographer from Moscow",
          status: null,
        },
        {
          title: "Russian College Community",
          description:
            "A full-scale nationwide platform with many tools for the growth of educational institutions",
          status: null,
        },
        {
          title: "Oasis",
          description:
            "A full package for a landscaping company, including a visual identity, website, and AI bot",
          status: "Website temporarily frozen",
        },
        {
          title: "EnergyStart",
          description:
            "Brand identity and a website for a company developing systems that improve utility efficiency",
          status: null,
        },
      ],
    },
    competencies: {
      sectionLabel: "competencies",
      cards: {
        design: {
          title: "Design",
          tags: ["Web design", "Presentations", "Typography", "Animations"],
        },
        development: {
          title: "Development",
          tags: ["Web platforms", "Landing pages", "Mobile App", "Desktop App"],
        },
        other: {
          title: "Other",
          text: "Write if you have another idea",
        },
      },
    },
    contact: {
      sectionLabel: "contacts",
      heading: "Ready to discuss your idea",
      telegramBlog: "Personal blog about my life and work",
      telegramChannelTitle: "Telegram channel",
      telegramAccountTitle: "Telegram",
      whatsappTitle: "WhatsApp",
    },
    footer: {
      contactsTitle: "Contacts",
      dataTitle: "Details",
      selfEmployed: "(RU) Self-employed: Nikita Stanislavovich Rybalko",
      inn: "(RU) Tax ID: 310260309003",
      jmbg: "(Serbia) JMBG: 9150107900011",
      copyright: "© 2026 Nikita Rybalko. All rights reserved.",
      channelLink: "Best Telegram channel",
    },
  },
};

const projectCards = document.querySelectorAll("[data-project-card]");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.getElementById("header");
const headerInner = document.getElementById("header-inner");
const navLinks = document.querySelectorAll("[data-nav-link], [data-mobile-nav-link]");
const scrollButtons = document.querySelectorAll("[data-scroll-to]");

let activeLanguage = supportedLangs.includes(localStorage.getItem(STORAGE_KEY))
  ? localStorage.getItem(STORAGE_KEY)
  : "ru";
let isMenuOpen = false;

function getByPath(source, path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
}

function closeMenu() {
  if (!mobileMenu || !burgerBtn) return;
  isMenuOpen = false;
  mobileMenu.classList.add("opacity-0", "pointer-events-none");
  mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
  burgerBtn.setAttribute("aria-expanded", "false");
  document.body.classList.remove("overflow-hidden");

  const [topLine, bottomLine] = burgerBtn.querySelectorAll("[data-burger-line]");
  topLine?.classList.remove("rotate-45");
  topLine?.classList.add("-translate-y-1.5");
  bottomLine?.classList.remove("-rotate-45");
  bottomLine?.classList.add("translate-y-1.5");
}

function openMenu() {
  if (!mobileMenu || !burgerBtn) return;
  isMenuOpen = true;
  mobileMenu.classList.remove("opacity-0", "pointer-events-none");
  mobileMenu.classList.add("opacity-100", "pointer-events-auto");
  burgerBtn.setAttribute("aria-expanded", "true");
  document.body.classList.add("overflow-hidden");

  const [topLine, bottomLine] = burgerBtn.querySelectorAll("[data-burger-line]");
  topLine?.classList.remove("-translate-y-1.5");
  topLine?.classList.add("rotate-45");
  bottomLine?.classList.remove("translate-y-1.5");
  bottomLine?.classList.add("-rotate-45");
}

function updateLanguageButtons(lang) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === lang;
    button.setAttribute("aria-pressed", String(isActive));

    button.classList.remove(
      "bg-[var(--color-black)]",
      "text-white",
      "text-[var(--color-gray-text)]",
      "hover:text-[var(--color-black)]",
      "bg-transparent",
    );

    if (isActive) {
      button.classList.add("bg-[var(--color-black)]", "text-white");
    } else {
      button.classList.add("bg-transparent", "text-[var(--color-gray-text)]", "hover:text-[var(--color-black)]");
    }
  });
}

function applyTranslations(lang) {
  const dictionary = translations[lang] ?? translations.ru;
  document.documentElement.lang = lang;
  document.title = dictionary.metaTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!key) return;

    const value = getByPath(dictionary, key);
    if (value == null) return;

    if (element.getAttribute("data-i18n-html") === "true") {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  projectCards.forEach((card, index) => {
    const project = dictionary.portfolio.cards[index];
    if (!project) return;

    const title = card.querySelector("[data-project-title]");
    const description = card.querySelector("[data-project-description]");
    const status = card.querySelector("[data-project-status]");

    if (title) title.textContent = project.title;
    if (description) description.textContent = project.description;
    if (status && project.status) status.textContent = project.status;
  });

  updateLanguageButtons(lang);
}

function setLanguage(lang) {
  if (!supportedLangs.includes(lang)) return;
  activeLanguage = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyTranslations(lang);
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(activeLanguage);

  if (header && headerInner) {
    const syncHeader = () => {
      if (window.scrollY > 50) {
        header.classList.replace("py-[1.375rem]", "py-[0]");
        headerInner.classList.add(
          "bg-[var(--color-back)]/80",
          "backdrop-blur-[32px]",
          "rounded-[1.375rem]",
          "px-[1.375rem]",
          "py-[0.875rem]",
          "mt-[1.375rem]",
        );
      } else {
        header.classList.replace("py-[0]", "py-[1.375rem]");
        headerInner.classList.remove(
          "bg-[var(--color-back)]/80",
          "backdrop-blur-[32px]",
          "rounded-[1.375rem]",
          "px-[1.375rem]",
          "py-[0.875rem]",
          "mt-[1.375rem]",
        );
      }
    };

    window.addEventListener("scroll", syncHeader, { passive: true });
    syncHeader();
  }

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      if (isMenuOpen) closeMenu();
      else openMenu();
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) closeMenu();
    });
  });

  scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-scroll-to");
      if (targetId) scrollToSection(targetId);
      if (isMenuOpen) closeMenu();
    });
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langOption;
      if (lang) setLanguage(lang);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen) closeMenu();
  });

  const triggers = document.querySelectorAll(".lottie-trigger");
  triggers.forEach((trigger) => {
    const player = trigger.querySelector("lottie-player");
    if (player) {
      trigger.addEventListener("mouseenter", () => player.play());
      trigger.addEventListener("mouseleave", () => player.pause());
    }
  });

  const isDesktop = window.matchMedia("(min-width: 768px)").matches;
  const cards = document.querySelectorAll(".group");

  cards.forEach((card) => {
    const lottie = card.querySelector(".lottie-anim");
    if (!lottie) return;

    if (isDesktop) {
      lottie.stop();
      card.addEventListener("mouseenter", () => lottie.play());
      card.addEventListener("mouseleave", () => lottie.stop());
    } else {
      lottie.play();
    }
  });
});
