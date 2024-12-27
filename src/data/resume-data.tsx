import {
  ConsultlyLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, TelegramIcon, VKIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Петросян Арсений Виленович",
  personalWebsiteUrl: "",
  initials: "А.В.",
  location: "Россия, Челябинск",
  locationLink: "https://yandex.ru/maps/geo/chelyabinsk/53159527/?ll=61.367824%2C55.153961&z=10",
  about:
    "Веб-разработчик, который стремится улучшать свои навыки",
  summary:
    "Обучаюсь в ЮУрГУ на 3 курсе специальности \"Информатика и вычислительная техника\". Проходил курсы программирования на языках Python, C, C#, PHP. Реализовывал сайт в качестве проекта для конкурса \"Акселератор\" ЮУРГУ в команде. Разрабатывал дизайн для сайта и писал функционал. Из недавнего: реализовали в командеиз двух человек веб-приложение книжного магазина. Качества: cамостоятельность в решении задач, надежность, готовность к разным формам работы, заинтересован в повышении профессиональных навыков, дружелюбный и искренний",
  avatarUrl: "https://avatars.githubusercontent.com/u/52398670?s=400&u=5537c37f24cb01a0a5e79d560a5c87767e9f70ef&v=4",
  contact: {
    email: "petrosyan.arvi@gmail.com",
    tel: "+79968235800",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/VenomousTruck",
        icon: GitHubIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/petrosyan_arvi",
        icon: TelegramIcon,
      },
      {
        name: "ВКонтакте",
        url: "https://vk.com/petrosyan.arvi",
        icon: VKIcon,
      }
    ],
  },
  education: [
    {
      school: "Южно-Уральский Государственный Университет",
      degree: "Информатика и вычислительная техника",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Учебная практика",
      link: "",
      badges: [],
      title: "",
      logo: "",
      start: "2023",
      end: "2023",
      description: "",
    },
    {
      company: "Учебная практика(научно-исследовательская работа)",
      link: "",
      badges: [],
      title: "",
      logo: "",
      start: "2024",
      end: "2024",
      description: "",
    },
  ],
  skills: [
    "HTML",
    "CSS3",
    "Python",
    "C#",
    "PHP",
    "Lunacy",
    "Bootstrap",
    "SASS",
    "Git",
    "Linux",
    "Английский язык B2"
  ],
  projects: [
    {
      title: "Помогатор",
      techStack: [
        "JavaScript",
        "Bootstrap",
        "HTML",
        "CSS"
      ],
      description: "Проект, который делает жизнь студентов проще и лучше",
      logo: "",
      link: {
        href: "https://github.com/VenomousTruck/pomogator_v2",
      },
    },
    {
      title: "Книжный магазин",
      techStack: [
        "ASP.NET Core",
        "Vue",
        "Vite",
        "Tailwind"
      ],
      description: "Сайт книжного магазина",
      logo: "",
      link: {
        href: "https://github.com/VenomousTruck/bookstore",
      },
    },
  ],
} as const;
