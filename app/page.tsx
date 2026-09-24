"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Palette,
  Share2,
  TrendingUp,
  Search,
  Code2,
  Sparkles,
  Target,
  Lightbulb,
  Route,
  Rocket,
  BarChart3,
} from "lucide-react";
import { SectionCanvas } from "@/components/shared/section-canvas";

const services = [
  {
    number: "01",
    title: "Creative Design & Branding",
    description:
      "Logos, brand systems, colour direction and marketing visuals built to position your business with clarity — and make it impossible to confuse with anyone else.",
    Icon: Palette,
  },
  {
    number: "02",
    title: "Social Media Marketing",
    description:
      "Scroll-stopping content, platform-native campaigns and community management that turn casual followers into loyal, paying customers.",
    Icon: Share2,
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Performance campaigns across search, social and display — engineered around your margins, not vanity metrics — so every rupee spent is measured.",
    Icon: TrendingUp,
  },
  {
    number: "04",
    title: "SEO & Search Growth",
    description:
      "Technical foundations, content strategy and authority building that push your business to the top of search — and keep it there.",
    Icon: Search,
  },
  {
    number: "05",
    title: "Web Design & Development",
    description:
      "Fast, responsive websites engineered for conversion. Every page, every pixel and every millisecond is designed to move visitors toward action.",
    Icon: Code2,
  },
  {
    number: "06",
    title: "AI Solutions",
    description:
      "Custom automation, content engines and intelligent workflows that help growing teams do more without scaling headcount linearly.",
    Icon: Sparkles,
  },
  {
    number: "07",
    title: "Strategic Growth",
    description:
      "Positioning, market analysis and long-range planning to help founders and marketing leaders make confident decisions with real data behind them.",
    Icon: Target,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with research — your market, your buyers, your competitors. No assumptions.",
    Icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Every decision — channel, message, creative — mapped to a clear commercial outcome.",
    Icon: Route,
  },
  {
    number: "03",
    title: "Create",
    description:
      "Design, copy and code built to a premium standard, shipped on time, without drama.",
    Icon: Rocket,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We measure, test and iterate — turning early wins into compounding, repeatable growth.",
    Icon: BarChart3,
  },
];

export default function HomePage() {
  return (
    <div className="pageShell">
      <section className="heroSection" aria-label="Nexora Digital introduction">
        <SectionCanvas preset="particles" className="heroCanvas" />

        <Image
          src="/images/hero-shape.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="heroShapeBg"
        />

        <div className="heroBgVignette" aria-hidden="true" />
        <div className="heroAmbient" aria-hidden="true" />

        <div className="heroRobots" aria-hidden="true">
          <Image
            src="/images/hero-robot-left.png"
            alt=""
            width={900}
            height={900}
            priority
            className="heroRobotLeft"
          />
          <Image
            src="/images/hero-robot-right.png"
            alt=""
            width={900}
            height={900}
            priority
            className="heroRobotRight"
          />
        </div>

        <div className="heroContent">
          <span className="heroBadge">
            <span className="heroBadgeDot" />
            <span>Creative Digital Agency</span>
          </span>

          <h1 className="heroHeadline">
            Digital Solutions That{" "}
            <span className="accentGradient">Drive Real Growth</span>
          </h1>

          <p className="heroDescription">
            We help ambitious businesses grow through design, marketing,
            technology and intelligent digital systems — built by a team that
            treats your growth like our own.
          </p>

          <div className="heroCtaRow">
            <Link href="/contact" className="btnPrimary">
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
            </Link>
            <Link href="/services" className="btnSecondary">
              <Compass className="h-4 w-4" />
              <span>Explore Services</span>
            </Link>
          </div>
        </div>

        <div className="heroBottomFade" aria-hidden="true" />
      </section>

      <section
        className="homeSection aboutSection"
        aria-labelledby="about-heading"
      >
        <div className="homeSectionInner">
          <div className="aboutGrid">
            <div className="aboutImageWrap" data-reveal>
              <Image
                src="/images/about-team.png"
                alt="Nexora Digital team planning a digital strategy for a client"
                width={900}
                height={640}
                className="aboutImage"
              />
              <span className="aboutCorner aboutCornerTL" aria-hidden="true" />
              <span className="aboutCorner aboutCornerBR" aria-hidden="true" />
            </div>

            <div className="aboutContent">
              <span className="eyebrow" data-reveal>
                <span className="eyebrowLine" />
                About Nexora
              </span>

              <h2 id="about-heading" className="headingSection" data-reveal>
                We Build Digital Experiences That{" "}
                <span className="accentGradient">Grow Businesses</span>
              </h2>

              <p className="aboutText" data-reveal>
                Nexora Digital is a creative digital solutions company helping
                businesses build their online presence, connect with their
                audience and achieve measurable growth. We combine creative
                design, smart marketing and modern technology to deliver
                results that move your business forward — not just look good on
                a slide.
              </p>

              <Link href="/about" className="aboutLink" data-reveal>
                <span>Learn More About Us</span>
                <ArrowRight className="aboutLinkArrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="servicesSection"
        aria-labelledby="services-heading"
      >
        <SectionCanvas preset="grid" className="servicesCanvas" />
        <div className="homeSectionInner">
          <div className="servicesHead">
            <span className="eyebrow" data-reveal>
              <span className="eyebrowLine" />
              Our Services
            </span>
            <h2
              id="services-heading"
              className="headingSection"
              style={{ margin: "0 auto" }}
              data-reveal
            >
              Digital Solutions That{" "}
              <span className="accentGradient">Elevate Your Business</span>
            </h2>
            <p className="servicesSubtext" data-reveal>
              From brand foundations to performance campaigns and engineering —
              we design, build and scale every layer of your digital presence
              under one roof.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article
                key={service.number}
                className="serviceCard"
                data-reveal
              >
                <div className="serviceTop">
                  <span className="serviceIcon">
                    <service.Icon className="h-6 w-6" />
                  </span>
                  <span className="serviceNumber">{service.number}</span>
                </div>
                <h3 className="serviceTitle">{service.title}</h3>
                <p className="serviceDesc">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="servicesFooterCta" data-reveal>
            <Link href="/services" className="servicesLink">
              <span className="relative z-10">View All Services</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="homeSection processSection"
        aria-labelledby="process-heading"
      >
        <div className="homeSectionInner">
          <div className="processHead">
            <span className="eyebrow" data-reveal>
              <span className="eyebrowLine" />
              Our Process
            </span>
            <h2
              id="process-heading"
              className="headingSection"
              style={{ margin: "0 auto" }}
              data-reveal
            >
              How We <span className="accentGradient">Work</span>
            </h2>
            <p className="servicesSubtext" data-reveal>
              Four clear stages that turn your goals into a measurable digital
              engine — no fluff, no wasted cycles, no guesswork.
            </p>
          </div>

          <div className="processGrid">
            <span className="processLine" aria-hidden="true" />
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="processStep"
                data-reveal
              >
                <span className="processDot">
                  <step.Icon className="h-7 w-7" />
                </span>
                <span className="processStepNumber">{step.number}</span>
                <h3 className="processStepTitle">{step.title}</h3>
                <p className="processStepDesc">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="processFooterCta" data-reveal>
            <Link href="/process" className="processLink">
              <span>See Full Process</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="ctaSection" aria-labelledby="cta-heading">
        <div className="ctaPanel">
          <SectionCanvas preset="circuit" className="ctaCanvas" />
          <span className="ctaGlow" aria-hidden="true" />

          <div className="ctaContent">
            <h2 id="cta-heading" className="ctaHeading" data-reveal>
              Ready To Grow{" "}
              <span className="accentGradient">Your Business?</span>
            </h2>
            <p className="ctaText" data-reveal>
              Let&rsquo;s build a stronger digital presence for your brand.
              Share your goals with us — we&rsquo;ll map out a plan that fits
              your stage, market and budget.
            </p>
            <div className="ctaButtons" data-reveal>
              <Link href="/contact" className="btnPrimary">
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </Link>
              <Link href="/contact" className="btnSecondary">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}