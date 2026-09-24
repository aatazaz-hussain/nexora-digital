"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Palette,
  TrendingUp,
  Cpu,
  Heart,
  Target,
  Users,
  Award,
  Shield,
} from "lucide-react";
import styles from "./about.module.css";

const values = [
  {
    number: "01",
    title: "Creative First",
    description:
      "Every project starts with originality. We design work that stands out — not work that follows the trend.",
    Icon: Palette,
  },
  {
    number: "02",
    title: "Growth Focused",
    description:
      "Aesthetics without results is decoration. Every decision we make is measured against your commercial outcome.",
    Icon: TrendingUp,
  },
  {
    number: "03",
    title: "Modern Technology",
    description:
      "We build with the tools the industry will use tomorrow — faster, safer and easier to maintain long term.",
    Icon: Cpu,
  },
  {
    number: "04",
    title: "Client Obsessed",
    description:
      "Your goals become ours. We act like an extension of your team, not an external vendor with a ticket queue.",
    Icon: Heart,
  },
];

const team = [
  {
    initials: "AF",
    name: "Aqsa Fayyaz",
    role: "Chief Executive Officer",
    bio: "Leads Nexora's vision, brand direction and long-term partnerships — shaping how the studio grows and who it grows with.",
  },
  {
    initials: "JI",
    name: "Javed Iqbal",
    role: "Director",
    bio: "Oversees operations, delivery and client success across every engagement — from first brief to final handoff.",
  },
  {
    initials: "SN",
    name: "Samiya Nazeer",
    role: "Chief Technology Officer",
    bio: "Drives the technology, engineering and product architecture behind every digital platform we build.",
  },
];

const whyChoose = [
  {
    title: "Strategy Before Design",
    description:
      "We map the market, the audience and the numbers before we open a design tool. Every pixel has a reason.",
    Icon: Target,
  },
  {
    title: "Senior Team, No Handoffs",
    description:
      "You work directly with the people doing the work — no account managers, no relay between departments.",
    Icon: Users,
  },
  {
    title: "Measurable Results",
    description:
      "Traffic, conversions, rankings, revenue — we report against outcomes you actually care about.",
    Icon: Award,
  },
  {
    title: "Built to Scale",
    description:
      "Designs, campaigns and code that grow with you — not rebuilt every eighteen months.",
    Icon: Shield,
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="About Nexora Digital">
        <div className={styles.heroBgWrap} aria-hidden="true">
          <Image
            src="/images/about-hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImage}
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>About</span>
          </nav>

          <span className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine} />
            About Nexora
            <span className={`${styles.heroEyebrowLine} ${styles.heroEyebrowLineRight}`} />
          </span>

          <h1 className={styles.heroHeadline}>
            We Build Digital Experiences That{" "}
            <span className={styles.accentGradient}>Grow Businesses</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Nexora Digital is a creative digital solutions company helping
            businesses build their online presence, connect with their
            audience and achieve measurable growth. We combine creative
            design, smart marketing and modern technology to deliver results
            that move your business forward.
          </p>

          <div className={styles.heroCtaRow}>
            <Link href="/contact" className={styles.btnPrimary}>
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
            </Link>
            <Link href="/work" className={styles.btnSecondary}>
              <span>See Our Work</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.storySection} aria-labelledby="story-heading">
        <div className={styles.sectionInner}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Our Story
              </span>

              <h2
                id="story-heading"
                className={`${styles.storyHeading} ${styles.hoverTitle}`}
              >
                A studio built on craft,{" "}
                <span className={styles.accentGradient}>clarity and results</span>
              </h2>

              <p className={`${styles.storyText} ${styles.hoverText}`}>
                Nexora Digital was founded with a simple belief: small and
                growing businesses deserve the same quality of digital work
                as the brands they look up to — without agency bloat, hidden
                retainers or jargon-filled proposals.
              </p>

              <p className={`${styles.storyText} ${styles.hoverText}`}>
                We started as a small team of designers, marketers and
                engineers. Today we deliver full-stack digital solutions —
                branding, campaigns, websites and intelligent systems — under
                one roof. Every client gets the same senior attention,
                whether they&rsquo;re a startup launching their first product
                or an established business rebuilding their digital presence.
              </p>

              <div className={styles.storyStats}>
                <div className={styles.storyStat}>
                  <span className={styles.storyStatValue}>7+</span>
                  <span className={styles.storyStatLabel}>Core Services</span>
                </div>
                <div className={styles.storyStat}>
                  <span className={styles.storyStatValue}>100%</span>
                  <span className={styles.storyStatLabel}>Senior Team</span>
                </div>
                <div className={styles.storyStat}>
                  <span className={styles.storyStatValue}>24/7</span>
                  <span className={styles.storyStatLabel}>Support</span>
                </div>
              </div>
            </div>

            <div className={styles.storyImageWrap}>
              <Image
                src="/images/about-story.png"
                alt="Nexora Digital creative team reviewing a client strategy"
                width={900}
                height={700}
                className={styles.storyImage}
              />
              <span
                className={`${styles.storyCorner} ${styles.storyCornerTL}`}
                aria-hidden="true"
              />
              <span
                className={`${styles.storyCorner} ${styles.storyCornerBR}`}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="values-heading">
        <div className={styles.sectionInner}>
          <div className={styles.valuesHead}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              What We Stand For
            </span>
            <h2
              id="values-heading"
              className={`${styles.headingSection} ${styles.hoverTitle}`}
              style={{ margin: "0 auto" }}
            >
              The principles behind{" "}
              <span className={styles.accentGradient}>every project</span>
            </h2>
            <p className={`${styles.valuesSubtext} ${styles.hoverText}`}>
              Four values that shape how we think, how we build and how we
              work with every client — no exceptions.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value.number} className={styles.valueCard}>
                <span className={styles.valueNumber}>{value.number}</span>
                <span className={styles.valueIcon}>
                  <value.Icon className="h-6 w-6" />
                </span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSection} aria-labelledby="team-heading">
        <Image
          src="/images/about-team-bg.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.teamBg}
        />
        <div className={styles.sectionInner}>
          <div className={styles.teamHead}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Meet the Team
            </span>
            <h2
              id="team-heading"
              className={`${styles.headingSection} ${styles.hoverTitle}`}
              style={{ margin: "0 auto" }}
            >
              Senior people,{" "}
              <span className={styles.accentGradient}>directly on your work</span>
            </h2>
            <p className={`${styles.valuesSubtext} ${styles.hoverText}`}>
              No handoffs, no account managers in the middle. You work
              directly with the people who build your project.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {team.map((member) => (
              <article key={member.initials} className={styles.teamCard}>
                <span className={styles.teamInitials}>{member.initials}</span>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <span className={styles.teamDivider} aria-hidden="true" />
                <p className={styles.teamBio}>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whySection} aria-labelledby="why-heading">
        <div className={styles.sectionInner}>
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Why Choose Nexora
              </span>

              <h2
                id="why-heading"
                className={`${styles.whyHeading} ${styles.hoverTitle}`}
              >
                What actually makes us{" "}
                <span className={styles.accentGradient}>different</span>
              </h2>

              <div className={styles.whyList}>
                {whyChoose.map((item) => (
                  <div key={item.title} className={styles.whyItem}>
                    <span className={styles.whyIcon}>
                      <item.Icon className="h-5 w-5" />
                    </span>
                    <div className={styles.whyItemContent}>
                      <h3 className={styles.whyItemTitle}>{item.title}</h3>
                      <p className={styles.whyItemDesc}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.whyImageWrap}>
              <Image
                src="/images/about-why.png"
                alt="Nexora Digital analytics dashboard on a laptop"
                width={900}
                height={700}
                className={styles.whyImage}
              />
              <span className={styles.whyImageGlow} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaPanel}>
          <span className={styles.ctaGlow} aria-hidden="true" />

          <div className={styles.ctaContent}>
            <h2
              id="cta-heading"
              className={`${styles.ctaHeading} ${styles.hoverTitle}`}
            >
              Let&rsquo;s Build Something{" "}
              <span className={styles.accentGradient}>That Grows</span>
            </h2>
            <p className={`${styles.ctaText} ${styles.hoverText}`}>
              Whether you&rsquo;re launching, rebranding or scaling — we&rsquo;d
              like to hear about it. Share your goals and we&rsquo;ll map out
              the next step.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </Link>
              <Link href="/services" className={styles.btnSecondary}>
                <Sparkles className="h-4 w-4" />
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}