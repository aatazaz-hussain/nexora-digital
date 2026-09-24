"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { services } from "@/lib/data/services";
import styles from "./services.module.css";

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Our Digital Solutions">
        <div className={styles.heroBgWrap} aria-hidden="true">
          <Image
            src="/images/services-hero-bg.png"
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
            <span className={styles.breadcrumbCurrent}>Services</span>
          </nav>

          <span className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine} />
            Our Digital Solutions
            <span className={`${styles.heroEyebrowLine} ${styles.heroEyebrowLineRight}`} />
          </span>

          <h1 className={styles.heroHeadline}>
            Everything you need to grow,{" "}
            <span className={styles.accentGradient}>under one roof</span>
          </h1>

          <p className={styles.heroSubtitle}>
            From creative design to digital marketing and technology, we
            provide solutions designed to help businesses grow. Seven
            disciplines, one team, and a single standard of quality across
            every engagement.
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

      <section className={styles.section} aria-labelledby="services-heading">
        <div className={styles.sectionInner}>
          <div className={styles.servicesHead}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              What We Do
            </span>
            <h2 id="services-heading" className={styles.headingSection} style={{ margin: "0 auto" }}>
              Seven disciplines,{" "}
              <span className={styles.accentGradient}>one growth engine</span>
            </h2>
            <p className={styles.servicesSubtext}>
              Every service is delivered by senior specialists who work
              directly with you — no handoffs, no account-manager relay, no
              wasted cycles between teams.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article key={service.slug} className={styles.serviceCard}>
                <div className={styles.serviceImageWrap}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.serviceImage}
                  />
                  <span className={styles.serviceImageOverlay} aria-hidden="true" />
                  <span className={styles.serviceNumber}>{service.number}</span>
                  <span className={styles.serviceIconBadge}>
                    <service.Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>

                  <div className={styles.chipGroup}>
                    <span className={styles.chipLabel}>What&rsquo;s Included</span>
                    <div className={styles.chipList}>
                      {service.includes.map((item) => (
                        <span key={item} className={styles.includeChip}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.chipGroup}>
                    <span className={styles.chipLabel}>Tech We Use</span>
                    <div className={styles.chipList}>
                      {service.technologies.map((tech) => (
                        <span key={tech} className={styles.techChip}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.serviceCtaWrap}>
                    <Link href="/contact" className={styles.serviceCta}>
                      <MessageCircle className="relative z-10 h-4 w-4" />
                      <span className="relative z-10">{service.ctaLabel}</span>
                      <ArrowRight className={`${styles.serviceCtaArrow} relative z-10 h-4 w-4`} />
                    </Link>
                    <span className={styles.serviceCtaHint}>
                      Free consultation
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className={styles.ctaPanel}>
          <Image
            src="/images/services-cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.ctaBgImage}
          />
          <span className={styles.ctaGlow} aria-hidden="true" />

          <div className={styles.ctaContent}>
            <h2 id="cta-heading" className={styles.ctaHeading}>
              Not sure which service{" "}
              <span className={styles.accentGradient}>you need?</span>
            </h2>
            <p className={styles.ctaText}>
              Tell us your goals and we&rsquo;ll recommend the right
              combination. Every plan is tailored — no boilerplate packages,
              no one-size-fits-all retainers.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span className="relative z-10">Talk to a Specialist</span>
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