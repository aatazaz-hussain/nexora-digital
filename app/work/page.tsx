"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Search,
  X,
  Sparkles,
} from "lucide-react";
import { projects, filterOptions } from "@/lib/data/projects";
import type { Project } from "@/lib/data/projects";
import styles from "./work.module.css";

const GITHUB_URL =
  "https://github.com/aqsatanoli?tab=repositories&type=source";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openProject, setOpenProject] = useState<Project | null>(null);

  useEffect(() => {
    if (openProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openProject]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "all" || project.tags.includes(activeFilter);

      if (!matchesFilter) return false;

      if (!q) return true;

      return (
        project.title.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.shortDescription.toLowerCase().includes(q) ||
        project.tech.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, searchQuery]);

  const getFilterCount = (key: string) => {
    if (key === "all") return projects.length;
    return projects.filter((p) => p.tags.includes(key)).length;
  };

  const clearSearch = () => setSearchQuery("");

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Our Recent Work">
        <div className={styles.heroBgWrap} aria-hidden="true">
          <Image
            src="/images/work-hero-bg.png"
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
            <span className={styles.breadcrumbCurrent}>Work</span>
          </nav>

          <span className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine} />
            Our Recent Work
            <span className={`${styles.heroEyebrowLine} ${styles.heroEyebrowLineRight}`} />
          </span>

          <h1 className={styles.heroHeadline}>
            Ideas we&rsquo;ve turned into{" "}
            <span className={styles.accentGradient}>intelligent solutions</span>
          </h1>

          <p className={styles.heroSubtitle}>
            A selection of AI, machine learning, generative AI, data
            analytics, software and creative projects — each built to solve a
            real problem across a different domain.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>{projects.length}</span>
              <span className={styles.heroStatLabel}>Projects</span>
            </div>
            <span className={styles.heroStatDivider} aria-hidden="true" />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>
                {filterOptions.length - 1}
              </span>
              <span className={styles.heroStatLabel}>Disciplines</span>
            </div>
            <span className={styles.heroStatDivider} aria-hidden="true" />
            <div className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>Open</span>
              <span className={styles.heroStatLabel}>Source</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.controlsSection} aria-label="Search and filter">
        <div className={styles.controlsInner}>
          <div className={styles.searchWrap}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search projects by name, tech or category…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                className={styles.searchClear}
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
            <span className={styles.searchCount}>
              {filtered.length} {filtered.length === 1 ? "result" : "results"}
            </span>
          </div>

          <div className={styles.filterBar}>
            {filterOptions.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterBtnActive : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
                <span className={styles.filterCount}>
                  {getFilterCount(f.key)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gridSection} aria-label="Project grid">
        <div className={styles.gridInner}>
          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>
                <Search className="h-7 w-7" />
              </span>
              <h2 className={styles.emptyTitle}>No projects found</h2>
              <p className={styles.emptyText}>
                Try a different search term or clear your filters to see all
                projects.
              </p>
              <button
                type="button"
                className={styles.emptyBtn}
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
              >
                <span>Reset Filters</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((project, index) => (
                <article
                  key={project.slug}
                  className={styles.card}
                  style={{ animationDelay: `${Math.min(index * 60, 500)}ms` }}
                >
                  <button
                    type="button"
                    className={styles.cardButton}
                    onClick={() => setOpenProject(project)}
                    aria-label={`Open ${project.title}`}
                  >
                    <div className={styles.cardVisual}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={styles.cardImage}
                      />
                      <span className={styles.cardImageOverlay} aria-hidden="true" />
                      <span className={styles.cardNumber}>{project.number}</span>
                      <span className={styles.cardIconBadge}>
                        <project.Icon className="h-5 w-5" />
                      </span>
                    </div>

                    <div className={styles.cardBody}>
                      <span className={styles.cardCategory}>
                        {project.category}
                      </span>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardDesc}>
                        {project.shortDescription}
                      </p>

                      <div className={styles.cardTech}>
                        {project.tech.slice(0, 4).map((t) => (
                          <span key={t} className={styles.cardTechChip}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className={styles.cardFooter}>
                        <span className={styles.cardCta}>
                          <span>View Project</span>
                          <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardGithub}
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Code2 size={16} />
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.ctaSection} aria-label="Start a project">
        <div className={styles.ctaPanel}>
          <span className={styles.ctaGlow} aria-hidden="true" />

          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>
              Your next project could be{" "}
              <span className={styles.accentGradient}>our next build</span>
            </h2>
            <p className={styles.ctaText}>
              Have a problem that needs AI, software, data or a combination of
              technologies? Let&rsquo;s explore what we can build together.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <Code2 className="h-4 w-4" />
                <span>View GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {openProject && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setOpenProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openProject.title}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setOpenProject(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className={styles.modalHero}>
              <Image
                src={openProject.image}
                alt=""
                fill
                sizes="100vw"
                className={styles.modalHeroImage}
              />
              <span className={styles.modalHeroOverlay} aria-hidden="true" />
              <span className={styles.modalHeroGlow} aria-hidden="true" />

              <div className={styles.modalHeroContent}>
                <div className={styles.modalBadgeRow}>
                  <span className={styles.modalNumber}>
                    {openProject.number}
                  </span>
                  <span className={styles.modalCategory}>
                    {openProject.category}
                  </span>
                </div>

                <h2 className={styles.modalTitle}>{openProject.title}</h2>
                <p className={styles.modalDescription}>
                  {openProject.shortDescription}
                </p>

                <a
                  href={openProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalGithub}
                >
                  <Code2 size={16} />
                  <span>View on GitHub</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalBlock}>
                <span className={styles.modalBlockLabel}>Problem</span>
                <p className={styles.modalBlockText}>{openProject.problem}</p>
              </div>

              <div className={styles.modalBlock}>
                <span className={styles.modalBlockLabel}>Solution</span>
                <p className={styles.modalBlockText}>{openProject.solution}</p>
              </div>

              <div className={styles.modalBlock}>
                <span className={styles.modalBlockLabel}>Key Features</span>
                <div className={styles.modalChips}>
                  {openProject.features.map((f) => (
                    <span key={f} className={styles.modalFeatureChip}>
                      <Sparkles className="h-3 w-3" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.modalBlock}>
                <span className={styles.modalBlockLabel}>Technology</span>
                <div className={styles.modalChips}>
                  {openProject.tech.map((t) => (
                    <span key={t} className={styles.modalTechChip}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`${styles.modalBlock} ${styles.modalBlockHighlight}`}>
                <span className={styles.modalBlockLabel}>Purpose</span>
                <p className={styles.modalBlockText}>{openProject.purpose}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}