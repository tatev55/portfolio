import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      language: {
        en: "English",
        ru: "Русский",
      },
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        innovationHub: "Innovation Hub",
        gemini: "Gemini AI",
      },
      theme: {
        light: "Light",
        dark: "Dark",
      },
      about: {
        title: "About",
      },
      gemini: {
        title: "Cover Letter Architect",
        subtitle: "Tailor your pitch using job-specific keywords.",
        jobDescriptionTitle: "Target job description",
        outputTitle: "AI output",
        generate: "Generate cover letter",
        generating: "Generating...",
        copy: "Copy",
        copied: "Copied!",
        loading: "Generating...",
        errorTitle: "Generation failed",
        placeholders: {
          jobDescription: "Paste the job requirements here...",
          aiOutput: "Generated text will appear here...",
        },
      },
      home: {
        hero: {
          availabilityBadge: "Available for work",
          titleLine1: "Tatev",
          titleLine2: "Margaryan",
          subtitle:
            "Frontend developer specialized in building scalable and reusable UI components, performant web apps and sleek experiences.",
          ctaPrimary: "View projects",
          ctaSecondary: "Resume",
        },
        meetMyVirtualSelf: {
          title: "Meet My Virtual Self",
          subtitle:
            "A digital version of me that can speak, respond, and guide you through my work and story.It reflects my journey as a developer, capturing my passion for building intuitive and scalable digital experiences.Through this space, you can explore my projects, understand my skills, and see how I approach solving real-world problems with modern technologies.It is designed to feel personal, interactive, and clear — like a living portfolio that grows with me over time.",
          audioLabel: "Voice introduction",
        },
        luminaryAi: {
          title: "Luminary AI",
          subtitle:
            "A conversational assistant demo showcasing delightful UI, fast interactions, and thoughtful microcopy.",
        },
        technicalArsenal: {
          title: "Technical Arsenal",
          subtitle:
            "Expertise forged in the fires of complex enterprise environments and experimental creative labs.",
          cards: {
            architecture: {
              title: "Architecture",
              description:
                "Building robust and scalable frontend structure using TypeScript and React ecosystem.",
              meterLabel: "ARCHITECTURE:",
              meterValue: "95%",
            },
            visualDesign: {
              title: "Visual Design",
              description:
                "Translating Figma designs into precise, responsive, and aesthetic interfaces using Ant Design",
              meterLabel: "UI DEVELOPMENT",
              meterValue: "88%",
            },
            performance: {
              title: "Performance",
              description:
                "Utilizing Redux Toolkit and React Query for optimized global state and data fetching.",
              meterLabel: "STATE MANAGEMENT",
              meterValue: "92%",
            },
          },
        },
      },
    },
  },
  ru: {
    translation: {
      language: {
        en: "English",
        ru: "Русский",
      },
      nav: {
        home: "Главная",
        about: "Обо мне",
        projects: "Проекты",
        skills: "Навыки",
        innovationHub: "Innovation Hub",
        gemini: "Gemini AI",
      },
      theme: {
        light: "Светлая",
        dark: "Тёмная",
      },
      about: {
        title: "Обо мне",
      },
      gemini: {
        title: "Архитектор сопроводительных писем",
        subtitle:
          "Настраивайте своё обращение, используя ключевые слова из конкретной вакансии.",
        jobDescriptionTitle: "Описание вакансии",
        outputTitle: "Ответ AI",
        generate: "Сгенерировать письмо",
        generating: "Генерация...",
        copy: "Копировать",
        copied: "Скопировано!",
        loading: "Генерация...",
        errorTitle: "Не удалось сгенерировать",
        placeholders: {
          jobDescription: "Вставьте требования вакансии сюда...",
          aiOutput: "Сгенерированный текст появится здесь...",
        },
      },
      home: {
        hero: {
          availabilityBadge: "Открыта к работе",
          titleLine1: "Татев",
          titleLine2: "Маргарян",
          subtitle:
            "Frontend-разработчик, специализирующийся на создании масштабируемых и переиспользуемых UI-компонентов, производительных веб-приложений и современных, стильных пользовательских интерфейсов.",
          ctaPrimary: "Проекты",
          ctaSecondary: "Резюме",
        },
        meetMyVirtualSelf: {
          title: "Познакомьтесь с моей виртуальной версией",
          subtitle:
            "Цифровая версия меня, которая может говорить, отвечать и проводить вас через мою работу и историю.Она отражает мой путь как разработчика, показывая мою страсть к созданию интуитивных и масштабируемых цифровых решений.Здесь вы можете ознакомиться с моими проектами, понять мои навыки и увидеть, как я подхожу к решению реальных задач с помощью современных технологий.Этот формат создан так, чтобы быть личным, интерактивным и понятным — как живое портфолио, которое развивается вместе со мной.",
          audioLabel: "Голосовое представление",
        },
        luminaryAi: {
          title: "Luminary AI",
          subtitle:
            "Демонстрационный разговорный ассистент, демонстрирующий приятный интерфейс, быстрые взаимодействия и продуманный микротекст.",
        },
        technicalArsenal: {
          title: "Технический арсенал",
          subtitle:
            "Опыт, сформированный в условиях сложных корпоративных систем и экспериментальных творческих лабораторий.",
          cards: {
            architecture: {
              title: "Архитектура",
              description:
                "Создание надёжной и масштабируемой фронтенд-архитектуры с использованием TypeScript и экосистемы React.",
              meterLabel: "АРХИТЕКТУРА:",
              meterValue: "95%",
            },
            visualDesign: {
              title: "Визуальный дизайн",
              description:
                "Точное и адаптивное воплощение дизайнов из Figma в эстетичные интерфейсы с использованием Ant Design.",
              meterLabel: "РАЗРАБОТКА UI",
              meterValue: "88%",
            },
            performance: {
              title: "Производительность",
              description:
                "Использование Redux Toolkit и React Query для оптимизированного глобального состояния и загрузки данных.",
              meterLabel: "УПРАВЛЕНИЕ СОСТОЯНИЕМ",
              meterValue: "92%",
            },
          },
        },
      },
    },
  },
} as const;

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export { i18n };
