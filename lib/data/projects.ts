import {
  Users,
  Sparkles,
  Boxes,
  Target,
  LineChart,
  TrendingUp,
  Home,
  BookOpen,
  LayoutGrid,
  Share2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  number: string;
  slug: string;
  image: string;
  title: string;
  category: string;
  tags: string[];
  githubUrl: string;
  Icon: LucideIcon;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  purpose: string;
}

const GITHUB_URL =
  "https://github.com/aqsatanoli?tab=repositories&type=source";

export const projects: Project[] = [
  {
    number: "01",
    slug: "see-and-hire",
    image: "/patterns/see-and-hire.png",
    title: "See and Hire",
    category: "AI Platform",
    tags: ["ai-ml", "software"],
    githubUrl: GITHUB_URL,
    Icon: Users,
    shortDescription:
      "A hiring platform built to shorten the distance between a candidate and the right opening — using AI-assisted matching instead of endless manual screening.",
    problem:
      "Recruiters sift through hundreds of profiles per role. The right candidate is often buried, and the process drains time from both sides of the hire.",
    solution:
      "We built a platform where the matching logic does the first pass — surfacing candidates by fit, not just keyword overlap, and giving recruiters a shorter, sharper shortlist.",
    features: [
      "AI-assisted candidate matching",
      "Structured recruitment workflow",
      "Shortlist recommendations",
      "Full-stack platform build",
      "Backend and API engineering",
    ],
    tech: ["Python", "AI/ML", "FastAPI", "PostgreSQL", "React"],
    purpose:
      "A full product build — front end, back end, matching logic and workflow — delivered as one system.",
  },
  {
    number: "02",
    slug: "nutra-ai",
    image: "/patterns/nutra-ai.png",
    title: "Nutra AI",
    category: "Generative AI",
    tags: ["gen-ai", "ai-ml"],
    githubUrl: GITHUB_URL,
    Icon: Sparkles,
    shortDescription:
      "A nutrition assistant that answers real questions about food and diet through conversation, powered by large language models instead of rigid meal plans.",
    problem:
      "Most nutrition tools hand you a generic plan. They ignore context — what you already eat, what you avoid, what you actually want to change.",
    solution:
      "We built a conversational assistant on top of LLMs that adapts to the person using it. It answers dietary questions, generates suggestions and adjusts as preferences shift.",
    features: [
      "LLM-powered conversations",
      "Personalized food guidance",
      "Context-aware recommendations",
      "Interactive assistant interface",
      "End-to-end AI application",
    ],
    tech: ["Python", "LLMs", "OpenAI", "Generative AI", "API Integration"],
    purpose:
      "An experiment in using LLMs where personalization is the whole point — not a feature added on top.",
  },
  {
    number: "03",
    slug: "tableop",
    image: "/patterns/tableop.png",
    title: "Tableop",
    category: "AI / Software",
    tags: ["software", "ai-ml"],
    githubUrl: GITHUB_URL,
    Icon: Boxes,
    shortDescription:
      "A software platform where intelligent capability sits inside the product — not as an add-on, but as part of how the system works.",
    problem:
      "Most software products bolt AI on late. It feels disconnected from the actual workflow and adds friction instead of removing it.",
    solution:
      "We designed Tableop so the intelligence runs through the product itself — integrated into the flow rather than sitting off to the side as a separate tool.",
    features: [
      "Product engineering",
      "AI integrated into workflow",
      "Backend architecture",
      "Application design",
      "End-to-end delivery",
    ],
    tech: ["Python", "FastAPI", "AI/ML", "PostgreSQL"],
    purpose:
      "A build that treats AI as core infrastructure — not a bolt-on feature.",
  },
  {
    number: "04",
    slug: "dental-dynamo",
    image: "/patterns/dental-dynamo.png",
    title: "Dental Dynamo",
    category: "Computer Vision",
    tags: ["cv", "ai-ml"],
    githubUrl: GITHUB_URL,
    Icon: Target,
    shortDescription:
      "A computer-vision tool that reads dental X-rays and highlights regions of interest — supporting the analysis rather than replacing it.",
    problem:
      "Reading dental X-rays is careful, visual work. Details matter, and a second pass through detection can catch what the eye skims past.",
    solution:
      "We trained a YOLOv8 model on dental imagery and paired it with OpenCV for preprocessing. The system flags regions and supports the analysis — leaving the clinical call to the professional.",
    features: [
      "Computer vision pipeline",
      "Medical image analysis",
      "YOLOv8 object detection",
      "AI-assisted screening",
      "Model training and evaluation",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    purpose:
      "A working computer-vision pipeline applied to a real clinical image type — not a toy dataset.",
  },
  {
    number: "05",
    slug: "mental-health-in-tech",
    image: "/patterns/mental-health.png",
    title: "Mental Health in Tech",
    category: "Data & Analytics",
    tags: ["data"],
    githubUrl: GITHUB_URL,
    Icon: LineChart,
    shortDescription:
      "A data project that reads between the lines of a real survey — looking at how mental health patterns show up inside tech workplaces.",
    problem:
      "Survey data about mental health in tech exists, but it's rarely read carefully. Patterns sit buried under columns of answers nobody actually looks at.",
    solution:
      "We cleaned and analyzed the dataset, ran exploratory work to find real signal, and built visualizations that tell a coherent story — not just charts for the sake of charts.",
    features: [
      "Data cleaning and preparation",
      "Exploratory analysis",
      "Visualization and reporting",
      "Statistical pattern finding",
      "Insight-driven reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
    purpose:
      "Data work done with care — cleaning, questioning, and reporting what the numbers actually say.",
  },
  {
    number: "06",
    slug: "job-salaries-management",
    image: "/patterns/job-salaries.png",
    title: "Job Salaries Management",
    category: "Data Analytics",
    tags: ["data"],
    githubUrl: GITHUB_URL,
    Icon: TrendingUp,
    shortDescription:
      "A salary analysis project that turns a scattered dataset into something you can actually read — roles, ranges, trends, at a glance.",
    problem:
      "Salary data is messy. It comes in different formats, uses different titles for the same role, and rarely tells you anything useful at face value.",
    solution:
      "We normalized the data, grouped roles sensibly, and built an analysis layer that makes the numbers readable — so the trends are visible without having to dig for them.",
    features: [
      "Data normalization",
      "Salary and role analysis",
      "Trend visualization",
      "Statistical summaries",
      "Dashboard reporting",
    ],
    tech: ["Python", "Pandas", "NumPy", "Power BI"],
    purpose:
      "Structured analysis that takes raw records and returns a clear picture of salary trends.",
  },
  {
    number: "07",
    slug: "house-price-predictions",
    image: "/patterns/house-price.png",
    title: "House Price Predictions",
    category: "Machine Learning",
    tags: ["ai-ml", "data"],
    githubUrl: GITHUB_URL,
    Icon: Home,
    shortDescription:
      "A machine-learning model that estimates property prices from housing data — trained, evaluated and tested on real feature sets.",
    problem:
      "Property pricing depends on many features at once. Linear guessing misses interactions that only show up when you model them together.",
    solution:
      "We built a regression pipeline with scikit-learn — cleaned the data, engineered features, trained the model and evaluated it against a held-out set to see what actually held up.",
    features: [
      "Regression modeling",
      "Data preprocessing",
      "Feature engineering",
      "Model training and evaluation",
      "Prediction pipeline",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Machine Learning"],
    purpose:
      "A complete ML pipeline from raw data to a tested prediction — evaluation included, not skipped.",
  },
  {
    number: "08",
    slug: "story-generator",
    image: "/patterns/story-generator.png",
    title: "Story Generator",
    category: "Generative AI",
    tags: ["gen-ai"],
    githubUrl: GITHUB_URL,
    Icon: BookOpen,
    shortDescription:
      "A generative AI application that turns a prompt into a short story — testing where language models are genuinely creative and where they fall back on patterns.",
    problem:
      "Template-based content generators produce the same story shape every time. Real narrative needs something less predictable.",
    solution:
      "We built a generator on top of LLMs with tuned prompts. The output varies in tone, structure and pacing depending on the input — closer to writing than filling in blanks.",
    features: [
      "LLM-driven generation",
      "Prompt design and tuning",
      "Narrative output control",
      "Interactive generation interface",
      "AI application build",
    ],
    tech: ["Python", "LLMs", "Generative AI", "Prompt Engineering"],
    purpose:
      "Creative experimentation with LLMs — using the model as a writing partner rather than a text expander.",
  },
  {
    number: "09",
    slug: "social-media-management",
    image: "/patterns/social-media.png",
    title: "Social Media Management",
    category: "Social Media",
    tags: ["social"],
    githubUrl: GITHUB_URL,
    Icon: Share2,
    shortDescription:
      "A full social media service run through AJ Technologies — strategy, content, scheduling and analytics handled as one continuous operation.",
    problem:
      "Brands post inconsistently. Content gets made in bursts, strategies shift without reason, and analytics stay untouched. Growth stalls quietly.",
    solution:
      "We manage the whole loop — build a strategy from real audience data, produce content on a rhythm, handle day-to-day account operations and read the numbers back into the next cycle.",
    features: [
      "Content strategy",
      "Ongoing content creation",
      "Account and community management",
      "Analytics and reporting",
      "Multi-platform optimization",
    ],
    tech: [
      "Strategy",
      "Content Design",
      "Analytics",
      "Community Management",
    ],
    purpose:
      "A service line that treats brand growth as an operating system — not a series of one-off posts.",
  },
  {
    number: "10",
    slug: "graphics-design",
    image: "/patterns/graphics-design.png",
    title: "Graphics Design",
    category: "Creative Design",
    tags: ["graphics"],
    githubUrl: GITHUB_URL,
    Icon: LayoutGrid,
    shortDescription:
      "A graphics design service covering brand identity, social visuals, print collateral and product interfaces — all built on one consistent visual system.",
    problem:
      "Brands end up with a patchwork of visuals — a logo here, a template there, print material that doesn't quite match the site. Nothing feels like one brand.",
    solution:
      "We start with the system, not the assets. Logo, typography, color and layout are defined once, then applied across every surface — social, print, and product screens alike.",
    features: [
      "Logo and brand identity",
      "Social media graphics",
      "Marketing collateral",
      "UI and visual design",
      "Multi-format delivery",
    ],
    tech: [
      "Brand Systems",
      "Graphic Design",
      "Print & Digital",
      "Visual Identity",
    ],
    purpose:
      "Design work that holds together as a system — not a stack of unrelated files.",
  },
];

export const filterOptions = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI & ML" },
  { key: "gen-ai", label: "Generative AI" },
  { key: "cv", label: "Computer Vision" },
  { key: "data", label: "Data & Analytics" },
  { key: "software", label: "Software" },
  { key: "social", label: "Social Media" },
  { key: "graphics", label: "Graphics" },
];