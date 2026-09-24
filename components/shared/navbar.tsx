"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./navbar.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div
        className={cn(
          styles.navbarWrap,
          scrolled && styles.navbarWrapScrolled
        )}
      >
        <div className={cn(styles.pill, scrolled && styles.pillScrolled)}>
          <span className={styles.pillGlow} aria-hidden="true" />

          <Link href="/" className={styles.logoSlot} aria-label="Nexora Digital">
            <Image
              src="/images/logo.png"
              alt="Nexora Digital"
              width={200}
              height={80}
              priority
              className={styles.logoImage}
            />
          </Link>

          <nav className={styles.navCenter}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  styles.navItem,
                  isActive(item.href) && styles.navItemActive
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.ctaSlot}>
            <Link href="/contact" className={styles.ctaButton}>
              <span className="relative z-10">Get Started</span>
              <ArrowRight
                className={cn(styles.ctaArrow, "relative z-10 h-4 w-4")}
              />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className={styles.hamburger}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={cn(styles.drawer, mobileOpen && styles.drawerOpen)}
        aria-hidden={!mobileOpen}
      >
        <div
          className={styles.drawerOverlay}
          onClick={() => setMobileOpen(false)}
        />
        <aside className={styles.drawerPanel}>
          <div className={styles.drawerHeader}>
            <Image
              src="/images/logo.png"
              alt="Nexora Digital"
              width={160}
              height={64}
              className={styles.drawerLogo}
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className={styles.drawerClose}
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className={styles.drawerBody}>
            <nav>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    styles.drawerNavLink,
                    isActive(item.href) && styles.drawerNavLinkActive
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="h-4 w-4 text-brand-blue" />
                </Link>
              ))}
            </nav>

            <div className={styles.drawerContact}>
              <a
                href="tel:+920000000000"
                className={styles.drawerContactRow}
              >
                <Phone className="h-4 w-4 text-brand-blue" />
                <span>+92 000 000 0000</span>
              </a>
              <a
                href="mailto:info@nexoradigital.com"
                className={styles.drawerContactRow}
              >
                <Mail className="h-4 w-4 text-brand-blue" />
                <span>info@nexoradigital.com</span>
              </a>
              <span className={styles.drawerContactRow}>
                <MapPin className="h-4 w-4 text-brand-blue" />
                <span>Pakistan</span>
              </span>
            </div>
          </div>

          <div className={styles.drawerFooter}>
            <Link href="/contact" className={styles.drawerCta}>
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}