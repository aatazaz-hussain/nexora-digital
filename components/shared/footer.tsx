import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./footer.module.css";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Our Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Creative Design & Branding", href: "/services/creative-design" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "SEO & Search Growth", href: "/services/seo" },
  { label: "Web Design & Development", href: "/services/web-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Strategic Growth", href: "/services/strategic-growth" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/nexoradigital",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/nexoradigital",
    Icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/nexoradigital",
    Icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/920000000000",
    Icon: MessageCircle,
  },
  {
    label: "Gmail",
    href: "mailto:info@nexoradigital.com",
    Icon: Mail,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerPanel}>
        <span className={styles.footerGlow} aria-hidden="true" />
        <span className={styles.footerCircuit} aria-hidden="true" />

        <div className={styles.grid}>
          <div>
            <Link href="/" className={styles.brandBlock} aria-label="Nexora Digital">
              <Image
                src="/images/logo.png"
                alt="Nexora Digital"
                width={240}
                height={110}
                className={styles.brandLogo}
              />
            </Link>

            <p className={styles.brandText}>
              Nexora Digital is a creative digital solutions company helping
              businesses build their online presence, connect with their
              audience and achieve measurable growth.
            </p>

            <div className={styles.socialsRow}>
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialButton}
                >
                  <Icon className={cn(styles.socialIcon, "h-4 w-4")} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={styles.linkHeading}>Company</h3>
            <ul className={styles.linkList}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    <span>{link.label}</span>
                    <ArrowRight
                      className={cn(styles.footerLinkArrow, "h-3.5 w-3.5")}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.linkHeading}>Services</h3>
            <ul className={styles.linkList}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    <span>{link.label}</span>
                    <ArrowRight
                      className={cn(styles.footerLinkArrow, "h-3.5 w-3.5")}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.linkHeading}>Get In Touch</h3>
            <ul className={styles.contactList}>
              <li>
                <a
                  href="mailto:info@nexoradigital.com"
                  className={styles.contactRow}
                >
                  <span className={styles.contactIcon}>
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>
                      info@nexoradigital.com
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+920000000000" className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Phone</span>
                    <span className={styles.contactValue}>
                      +92 000 000 0000
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/920000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactRow}
                >
                  <span className={styles.contactIcon}>
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>WhatsApp</span>
                    <span className={styles.contactValue}>Chat with us</span>
                  </span>
                </a>
              </li>
              <li>
                <span className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>Pakistan</span>
                  </span>
                </span>
              </li>
            </ul>

            <span className={styles.availabilityRow}>
              <span className={styles.statusDot} />
              <span>Available for new projects</span>
            </span>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {year} Nexora Digital. All rights reserved.</p>
          <div className={styles.legalLinks}>
            {legalLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-6">
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className={styles.legalDivider} />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}