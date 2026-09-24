import {
  Lightbulb,
  Route,
  Rocket,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  image: string;
  imageAlt: string;
  Icon: LucideIcon;
}

export interface ProcessStat {
  value: string;
  numericTarget: number;
  suffix: string;
  prefix: string;
  decimals: number;
  label: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Understand before you build",
    description:
      "Every engagement starts with listening. We map your market, interview your team, study your competitors and dig into what your customers actually want. No assumptions, no templates — just the raw material that shapes everything that follows.",
    deliverables: [
      "Market & competitor research",
      "Audience persona profiles",
      "Brand discovery workshop",
      "Opportunity map",
      "Success metrics brief",
    ],
    timeline: "1–2 weeks",
    image: "/images/process-discover.png",
    imageAlt: "Analyst writing notes during a discovery session",
    Icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategize",
    tagline: "Turn insight into a clear plan",
    description:
      "With research in hand, we design the roadmap. Channels, messaging, content pillars, technical architecture — every decision is mapped to a commercial outcome. You leave this phase with a plan you can defend to your board and follow with confidence.",
    deliverables: [
      "Channel & platform strategy",
      "Content & messaging framework",
      "Technical roadmap",
      "Budget & resourcing plan",
      "KPI and reporting model",
    ],
    timeline: "1 week",
    image: "/images/process-strategize.png",
    imageAlt: "Strategy session with journey cards laid out",
    Icon: Route,
  },
  {
    number: "03",
    title: "Create",
    tagline: "Craft, build and ship",
    description:
      "This is where things get real. Design systems, campaign assets, website builds, automation flows — produced by senior specialists to a premium standard. You see progress weekly, give feedback directly, and nothing ships without your sign-off.",
    deliverables: [
      "Design system & brand assets",
      "Website / landing pages",
      "Campaign creatives",
      "Automation & integrations",
      "Quality assurance & testing",
    ],
    timeline: "3–6 weeks",
    image: "/images/process-create.png",
    imageAlt: "Designer and developer working side by side",
    Icon: Rocket,
  },
  {
    number: "04",
    title: "Grow",
    tagline: "Measure, learn and compound",
    description:
      "Launch is a milestone, not a finish line. We monitor performance continuously, run structured tests, and iterate on what actually moves the needle. Each month you get plain-English reporting on what worked, what we learned and what's next.",
    deliverables: [
      "Analytics & reporting dashboard",
      "A/B test programme",
      "Monthly performance reviews",
      "Ongoing optimisation",
      "Quarterly growth roadmap",
    ],
    timeline: "Ongoing",
    image: "/images/process-grow.png",
    imageAlt: "Analytics dashboard showing growth performance",
    Icon: BarChart3,
  },
];

export const processStats: ProcessStat[] = [
  {
    value: "24",
    numericTarget: 24,
    suffix: "",
    prefix: "",
    decimals: 0,
    label: "Projects Delivered",
    description: "Across branding, campaigns, websites and automation.",
  },
  {
    value: "18",
    numericTarget: 18,
    suffix: "",
    prefix: "",
    decimals: 0,
    label: "Happy Clients",
    description: "Founders and marketing leaders who keep coming back.",
  },
  {
    value: "180k",
    numericTarget: 180,
    suffix: "k",
    prefix: "",
    decimals: 1,
    label: "Audience Reached",
    description: "Combined impressions across client campaigns and content.",
  },
  {
    value: "24/7",
    numericTarget: 24,
    suffix: "/7",
    prefix: "",
    decimals: 0,
    label: "Digital Support",
    description: "Monitoring, response and hands-on help whenever needed.",
  },
];