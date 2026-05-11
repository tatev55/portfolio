export const ABOUT_LEAD_COPY =
  "Motivated and detail-oriented Frontend Developer with hands-on experience building modern, responsive, and user-focused web applications using React and related technologies. I have a strong foundation in JavaScript and UI development, with practical experience contributing to private corporate projects as well as developing personal applications from concept to implementation.I’m passionate about creating clean, intuitive interfaces that combine functionality with thoughtful design. My work focuses on writing maintainable code, building responsive layouts, and delivering smooth user experiences across different devices and screen sizes.Known for being a fast learner, responsible, and collaborative, I enjoy solving real-world development challenges and continuously expanding my technical skills. I’m always exploring new tools, best practices, and frontend technologies to build better digital experiences and grow as a developer.";

export const MY_STORY_COPY =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod autem esse quibusdam voluptates quam quas quia numquam, facilis deleniti, sit tempora minima voluptate cupiditate. Quibusdam esse autem voluptate earum.";

export type PhilosophyItem = {
  text: string;
  variant: "quote" | "arrow";
};

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    text: "We believe in crafting thoughtful and purposeful user experiences, where every pixel and interaction matters. Frontend development is not just about writing code — it is about understanding people, behavior, and how interfaces communicate with users..",
    variant: "quote",
  },
  {
    text: "We value simplicity, clarity, and smooth transitions. Good design should feel invisible yet intuitive, guiding users naturally through every flow without friction.",
    variant: "arrow",
  },
  {
    text: "As frontend developers, we see ourselves as builders of digital experiences — combining engineering precision with creativity to deliver scalable, accessible, and modern web applications.",
    variant: "arrow",
  },
  {
    text: "We are committed to continuous learning, attention to detail, and pushing the boundaries of what great UI can be in a constantly evolving digital world.",
    variant: "arrow",
  },
];

export const CV_PROMPT_PREFIX = `You are helping explain a frontend developer CV and background. Answer concisely in plain Markdown.
If the user's question isn't about CV, skills, experience, or work style, politely redirect toward those topics.

User question:`;

export type SkillItem = {
  label: string;
  /** 0–100 */
  progress: number;
  ringColor: string;
  /** Simple Icons slug for jsDelivr SVG */
  iconSlug: string;
};

export const SKILL_ITEMS: SkillItem[] = [
  {
    label: "JavaScript",
    progress: 92,
    ringColor: "#f7df1e",
    iconSlug: "javascript",
  },
  { label: "React", progress: 90, ringColor: "#61dafb", iconSlug: "react" },
  {
    label: "Ant Design",
    progress: 85,
    ringColor: "#1677ff",
    iconSlug: "antdesign",
  },
  {
    label: "Tailwind CSS",
    progress: 88,
    ringColor: "#06b6d4",
    iconSlug: "tailwindcss",
  },
  {
    label: "TypeScript",
    progress: 90,
    ringColor: "#3178c6",
    iconSlug: "typescript",
  },
  {
    label: "Next.js",
    progress: 86,
    ringColor: "#e2e8f0",
    iconSlug: "nextdotjs",
  },
  {
    label: "TypeScript",
    progress: 88,
    ringColor: "#3178c6",
    iconSlug: "typescript",
  },
  { label: "Redux", progress: 82, ringColor: "#764abc", iconSlug: "redux" },
  { label: "Redux", progress: 81, ringColor: "#593d88", iconSlug: "redux" },
  {
    label: "Redux Toolkit",
    progress: 85,
    ringColor: "#764abc",
    iconSlug: "redux",
  },
];

export const skillIconSrc = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
