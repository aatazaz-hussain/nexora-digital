import {
  Palette,
  Share2,
  TrendingUp,
  Search,
  Code2,
  Sparkles,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  number: string;
  slug: string;
  title: string;
  description: string;
  includes: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  Icon: LucideIcon;
}

export const services: ServiceItem[] = [
  {
    number: "01",
    slug: "creative-design",
    title: "Creative Design & Branding",
    description:
      "From logo systems and colour direction to full brand identities, we design work that positions your business with clarity and makes it instantly recognisable across every touchpoint.",
    includes: [
      "Logo Design",
      "Brand Identity",
      "Social Media Designs",
      "Marketing Materials",
      "Creative Posts",
      "Ad Creatives",
    ],
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "After Effects",
      "Canva Pro",
    ],
    image: "/images/service-creative-design.png",
    imageAlt: "Designer sketching a logo concept on a tablet",
    ctaLabel: "Request Brand Kit",
    Icon: Palette,
  },
  {
    number: "02",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description:
      "Platform-native strategies and content calendars that grow engagement, build community and turn casual followers into loyal, paying customers — without burning your ad budget.",
    includes: [
      "Facebook Marketing",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Content Planning",
      "Social Media Management",
      "Audience Engagement",
    ],
    technologies: [
      "Meta Business Suite",
      "Instagram",
      "LinkedIn",
      "TikTok Ads",
      "Later",
    ],
    image: "/images/service-social-media.png",
    imageAlt: "Social media dashboard on a smartphone and laptop",
    ctaLabel: "Grow My Socials",
    Icon: Share2,
  },
  {
    number: "03",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Performance campaigns across search, social and display — engineered around your margins, not vanity metrics — so every rupee spent is tracked, tested and optimised for return.",
    includes: [
      "Digital Marketing Strategy",
      "Lead Generation",
      "Paid Advertising",
      "Campaign Management",
      "Content Marketing",
      "Marketing Analytics",
    ],
    technologies: [
      "Google Ads",
      "Meta Ads",
      "GA4",
      "Hotjar",
      "Mailchimp",
    ],
    image: "/images/service-digital-marketing.png",
    imageAlt: "Analytics dashboard showing marketing performance",
    ctaLabel: "Launch a Campaign",
    Icon: TrendingUp,
  },
  {
    number: "04",
    slug: "seo",
    title: "SEO & Search Growth",
    description:
      "Technical foundations, content strategy and authority building that push your business to the top of search results — and keep it there as your market matures.",
    includes: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building & Off-Page SEO",
      "SEO Content Strategy",
      "Local SEO",
      "SEO Audit & Competitor Analysis",
      "SEO Performance & Ranking Reports",
    ],
    technologies: [
      "Ahrefs",
      "SEMrush",
      "Google Search Console",
      "Screaming Frog",
      "Surfer SEO",
    ],
    image: "/images/service-seo.png",
    imageAlt: "SEO analytics dashboard showing keyword rankings",
    ctaLabel: "Get SEO Audit",
    Icon: Search,
  },
  {
    number: "05",
    slug: "web-development",
    title: "Web Design & Development",
    description:
      "Fast, responsive websites and landing pages engineered for conversion. Every page, pixel and millisecond is designed to move visitors toward action.",
    includes: [
      "Business Websites",
      "Landing Pages",
      "Responsive Websites",
      "UI/UX Design",
      "Website Redesign",
      "API Integration",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Vercel",
    ],
    image: "/images/service-web-development.png",
    imageAlt: "Modern responsive website on a laptop",
    ctaLabel: "Build My Website",
    Icon: Code2,
  },
  {
    number: "06",
    slug: "ai-solutions",
    title: "AI Solutions",
    description:
      "Custom automation, content engines and intelligent workflows that help growing teams do more without scaling headcount linearly — built around your actual processes.",
    includes: [
      "AI Content Creation",
      "AI Video Creation",
      "AI Marketing Solutions",
      "AI Automation",
      "AI-Powered Business Solutions",
    ],
    technologies: [
      "OpenAI",
      "Anthropic",
      "LangChain",
      "Zapier",
      "Make",
      "Custom GPTs",
    ],
    image: "/images/service-ai.png",
    imageAlt: "Futuristic AI neural network visual",
    ctaLabel: "Explore AI Solutions",
    Icon: Sparkles,
  },
  {
    number: "07",
    slug: "strategic-growth",
    title: "Strategic Growth",
    description:
      "Positioning, market analysis and long-range planning to help founders and marketing leaders make confident decisions backed by real data — not gut feel.",
    includes: [
      "Business Growth Strategy",
      "Brand Strategy",
      "Digital Strategy",
      "Customer Acquisition",
      "Online Presence Growth",
      "Performance Analysis",
    ],
    technologies: [
      "Notion",
      "Airtable",
      "Looker Studio",
      "Mixpanel",
      "Custom Dashboards",
    ],
    image: "/images/service-strategic-growth.png",
    imageAlt: "Business growth chart and strategy planning",
    ctaLabel: "Plan My Growth",
    Icon: Target,
  },
];