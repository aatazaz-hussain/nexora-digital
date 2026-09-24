"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { CountUp } from "@/components/shared/count-up";
import { processSteps, processStats } from "@/lib/data/process";
import styles from "./process.module.css";

export default function ProcessPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="How We Work">
        <div className={styles.heroBgWrap} aria-hidden="true">
          <Image
            src="/images/process-hero-bg.png"
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
            <span className={styles.breadcrumbCurrent}>Process</span>
          </nav>

          <span className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine} />
            How We Work
            <span className={`${styles.heroEyebrowLine} ${styles.heroEyebrowLineRight}`} />
          </span>

          <h1 className={styles.heroHeadline}>
            A clear process that turns{" "}
            <span className={styles.accentGradient}>goals into growth</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Four deliberate stages — Discover, Strategize, Create, Grow. No
            guesswork, no wasted cycles, no handoffs between departments. Just
            a structured path from where you are to where you want to be.
          </p>

          <div className={styles.heroCtaRow}>
            <Link href="/contact" className={styles.btnPrimary}>
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="relative z-10 h-4 w-4" />
            </Link>
            <Link href="/services" className={styles.btnSecondary}>
              <span>Explore Services</span>
            </Link>
          </div>

          <div className={styles.miniTimeline}>
            {processSteps.map((step, i) => (
              <div key={step.number} className={styles.miniTimelineStep}>
                <a
                  href={`#step-${step.number}`}
                  className={styles.miniTimelineDot}
                  aria-label={`Jump to step ${step.number}: ${step.title}`}
                >
                  {step.number}
                </a>
                {i < processSteps.length - 1 && (
                  <span className={styles.miniTimelineConnector} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stepsSection} aria-labelledby="steps-heading">
        <div className={styles.stepsInner}>
          <div className={styles.stepsHead}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Our Process
            </span>
            <h2 id="steps-heading" className={styles.headingSection} style={{ margin: "0 auto" }}>
              Four stages,{" "}
              <span className={styles.accentGradient}>one continuous journey</span>
            </h2>
            <p className={styles.headingSubtext}>
              Each phase builds on the last. By the time we launch, your
              strategy, creative and technology are already working together —
              not bolted on after the fact.
            </p>
          </div>

          <div className={styles.stepsWrap}>
            <span className={styles.stepsConnector} aria-hidden="true" />

            {processSteps.map((step, i) => {
              const isReverse = i % 2 === 1;
              return (
                <article
                  key={step.number}
                  id={`step-${step.number}`}
                  className={`${styles.stepBlock} ${isReverse ? styles.stepBlockReverse : ""}`}
                >
                  <span className={styles.stepNumeric} aria-hidden="true">
                    {step.number}
                  </span>

                  <div className={styles.stepText}>
                    <span className={styles.stepNumberBadge}>
                      Step {step.number}
                    </span>

                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepTagline}>{step.tagline}</p>
                    <p className={styles.stepDescription}>{step.description}</p>

                    <div className={styles.stepDeliverables}>
                      <span className={styles.stepDeliverablesLabel}>
                        What You Get
                      </span>
                      <div className={styles.stepChips}>
                        {step.deliverables.map((item) => (
                          <span key={item} className={styles.stepChip}>
                            <Sparkles className="h-3 w-3" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.stepTimelineRow}>
                      <span className={styles.stepTimelineIcon}>
                        <Clock className="h-4 w-4" />
                      </span>
                      <span className={styles.stepTimelineLabel}>Timeline</span>
                      <span className={styles.stepTimelineValue}>
                        {step.timeline}
                      </span>
                    </div>
                  </div>

                  <div className={styles.stepImageWrap}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={styles.stepImage}
                    />
                    <span className={styles.stepImageOverlay} aria-hidden="true" />
                    <span className={styles.stepImageIconBadge}>
                      <step.Icon className="h-6 w-6" />
                    </span>
                    <span
                      className={`${styles.stepCorner} ${styles.stepCornerTL}`}
                      aria-hidden="true"
                    />
                    <span
                      className={`${styles.stepCorner} ${styles.stepCornerBR}`}
                      aria-hidden="true"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.statsSection} aria-labelledby="stats-heading">
        <Image
          src="/images/process-stats-bg.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.statsCanvas}
        />

        <div className={styles.statsInner}>
          <div className={styles.statsHead}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Results
            </span>
            <h2 id="stats-heading" className={styles.headingSection} style={{ margin: "0 auto" }}>
              Turning ideas into{" "}
              <span className={styles.accentGradient}>digital growth</span>
            </h2>
            <p className={styles.headingSubtext}>
              Every number below is real work — projects shipped, clients
              served, audiences engaged and support delivered. No inflated
              claims, no vanity metrics.
            </p>
          </div>

          <div className={styles.statsGrid}>
            {processStats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>
                  <CountUp
                    target={stat.numericTarget}
                    decimals={stat.decimals}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
                <p className={styles.statDesc}>{stat.description}</p>
                <span className={styles.statProgressTrack}>
                  <span className={styles.statProgressBar} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaPanel}>
          <Image
            src="/images/process-cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.ctaBgImage}
          />
          <span className={styles.ctaGlow} aria-hidden="true" />

          <div className={styles.ctaContent}>
            <h2 id="cta-heading" className={styles.ctaHeading}>
              Ready to start at{" "}
              <span className={styles.accentGradient}>step one?</span>
            </h2>
            <p className={styles.ctaText}>
              Share your goals and we&rsquo;ll walk you through exactly how
              Discover would run for your business — no commitment, no
              pressure.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </Link>
              <Link href="/work" className={styles.btnSecondary}>
                <span>See Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}