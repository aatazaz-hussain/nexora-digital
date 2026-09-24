"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Clock,
  Sparkles,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import styles from "./contact.module.css";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

const serviceOptions = [
  "Creative Design & Branding",
  "Social Media Marketing",
  "Digital Marketing",
  "SEO & Search Growth",
  "Web Design & Development",
  "AI Solutions",
  "Strategic Growth",
  "Not sure yet",
];

const contactDetails = {
  email: "info@nexoradigital.com",
  phone: "+92 300 000 0000",
  whatsapp: "+92 300 000 0000",
  whatsappLink: "https://wa.me/923000000000",
  location: "Pakistan",
  linkedin: "https://linkedin.com/company/nexoradigital",
  facebook: "https://facebook.com/nexoradigital",
  instagram: "https://instagram.com/nexoradigital",
};

const trustItems = [
  { Icon: ShieldCheck, label: "Free Consultation" },
  { Icon: Clock, label: "Reply within 24h" },
  { Icon: Sparkles, label: "No Pressure" },
];

const timelineSteps = [
  {
    title: "You send the message",
    desc: "Fill the form with your goals and details.",
  },
  {
    title: "We reply within 24 hours",
    desc: "A short reply from the team, not a sales pitch.",
  },
  {
    title: "Free 30-minute call",
    desc: "We discuss your project and recommend the next step.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (serverError) setServerError(null);
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (form.phone.trim().length < 6) {
      next.phone = "Please enter a valid phone or WhatsApp number.";
    }
    if (!form.service) next.service = "Please choose a service.";
    if (form.message.trim().length < 10) {
      next.message = "Please write a short message (10+ characters).";
    }
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setServerError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Contact Nexora Digital">
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>Contact</span>
          </nav>

          <span className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine} />
            Let&rsquo;s Talk
            <span className={`${styles.heroEyebrowLine} ${styles.heroEyebrowLineRight}`} />
          </span>

          <h1 className={styles.heroHeadline}>
            Let&rsquo;s talk about{" "}
            <span className={styles.accentGradient}>your project</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Tell us where you want to take your business. We&rsquo;ll reply
            within 24 hours with a clear, considered next step — no
            boilerplate proposals, no sales pressure.
          </p>
        </div>
      </section>

      <section className={styles.mainSection} aria-label="Contact form">
        <div className={styles.mainInner}>
          <div className={styles.formColumn}>
            {success ? (
              <div className={styles.successPanel}>
                <span className={styles.successIcon}>
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h2 className={styles.successTitle}>Message sent</h2>
                <p className={styles.successText}>
                  Thanks for reaching out. We&rsquo;ve received your message
                  and will reply within 24 hours. Keep an eye on your inbox.
                </p>
                <button
                  type="button"
                  className={styles.successBtn}
                  onClick={() => setSuccess(false)}
                >
                  <span>Send another message</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.formHeading}>Start your project</h2>
                <p className={styles.formSubtext}>
                  Fill in the details below. Every enquiry is read by a senior
                  member of the team.
                </p>

                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="name" className={styles.label}>
                        Name
                      </label>
                      <div className={styles.inputWrap}>
                        <input
                          id="name"
                          type="text"
                          className={styles.input}
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          autoComplete="name"
                        />
                        <span className={styles.inputGlow} aria-hidden="true" />
                      </div>
                      {errors.name && (
                        <span className={styles.errorMsg}>{errors.name}</span>
                      )}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>
                        Email
                      </label>
                      <div className={styles.inputWrap}>
                        <input
                          id="email"
                          type="email"
                          className={styles.input}
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          autoComplete="email"
                        />
                        <span className={styles.inputGlow} aria-hidden="true" />
                      </div>
                      {errors.email && (
                        <span className={styles.errorMsg}>{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone / WhatsApp
                      </label>
                      <div className={styles.inputWrap}>
                        <input
                          id="phone"
                          type="tel"
                          className={styles.input}
                          placeholder="+92 300 000 0000"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          autoComplete="tel"
                        />
                        <span className={styles.inputGlow} aria-hidden="true" />
                      </div>
                      {errors.phone && (
                        <span className={styles.errorMsg}>{errors.phone}</span>
                      )}
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="company" className={styles.label}>
                        Company Name
                      </label>
                      <div className={styles.inputWrap}>
                        <input
                          id="company"
                          type="text"
                          className={styles.input}
                          placeholder="Optional"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          autoComplete="organization"
                        />
                        <span className={styles.inputGlow} aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="service" className={styles.label}>
                      Service Required
                    </label>
                    <div className={styles.selectWrap}>
                      <select
                        id="service"
                        className={styles.select}
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <span className={styles.selectIcon} aria-hidden="true">
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </div>
                    {errors.service && (
                      <span className={styles.errorMsg}>{errors.service}</span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>
                      Message
                    </label>
                    <div className={styles.inputWrap}>
                      <textarea
                        id="message"
                        className={styles.textarea}
                        placeholder="Tell us about your project, goals and timeline…"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                      />
                      <span className={styles.inputGlow} aria-hidden="true" />
                    </div>
                    {errors.message && (
                      <span className={styles.errorMsg}>{errors.message}</span>
                    )}
                  </div>

                  {serverError && (
                    <span className={styles.errorMsg}>{serverError}</span>
                  )}

                  <div className={styles.submitRow}>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={submitting}
                    >
                      <span className="relative z-10">
                        {submitting ? "Sending…" : "Send Message"}
                      </span>
                      <Send className="relative z-10 h-4 w-4" />
                    </button>
                    <span className={styles.submitHint}>
                      We reply within 24 hours
                    </span>
                  </div>
                </form>

                <div className={styles.trustStrip}>
                  {trustItems.map(({ Icon, label }) => (
                    <span key={label} className={styles.trustChip}>
                      <Icon className={`${styles.trustIcon} h-3.5 w-3.5`} />
                      {label}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className={styles.sideColumn}>
            <div className={styles.sideCard}>
              <span className={styles.sideHeading}>
                <MessageCircle className="h-3.5 w-3.5" />
                Contact Details
              </span>

              <div className={styles.contactList}>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className={styles.contactRow}
                >
                  <span className={styles.contactIcon}>
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>
                      {contactDetails.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className={styles.contactRow}
                >
                  <span className={styles.contactIcon}>
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Phone</span>
                    <span className={styles.contactValue}>
                      {contactDetails.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={contactDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactRow}
                >
                  <span className={styles.contactIcon}>
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>WhatsApp</span>
                    <span className={styles.contactValue}>
                      {contactDetails.whatsapp}
                    </span>
                  </span>
                </a>

                <div className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>
                      {contactDetails.location}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.sideCard}>
              <span className={styles.sideHeading}>
                <Sparkles className="h-3.5 w-3.5" />
                Follow Us
              </span>

              <div className={styles.socialsGrid}>
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.socialBtnLinkedIn}`}
                >
                  <span className={styles.socialIcon}>
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
                </a>

                <a
                  href={contactDetails.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.socialBtnWhatsapp}`}
                >
                  <span className={styles.socialIcon}>
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>WhatsApp</span>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
                </a>

                <a
                  href={contactDetails.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.socialBtnFacebook}`}
                >
                  <span className={styles.socialIcon}>
                    <Facebook className="h-4 w-4" />
                  </span>
                  <span>Facebook</span>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
                </a>

                <a
                  href={contactDetails.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.socialBtnInstagram}`}
                >
                  <span className={styles.socialIcon}>
                    <Instagram className="h-4 w-4" />
                  </span>
                  <span>Instagram</span>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
                </a>
              </div>
            </div>

            <div className={styles.sideCard}>
              <span className={styles.sideHeading}>
                <Clock className="h-3.5 w-3.5" />
                What Happens Next
              </span>

              <div className={styles.timelineSteps}>
                {timelineSteps.map((step, index) => (
                  <div key={step.title} className={styles.timelineItem}>
                    <span className={styles.timelineMarker}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.timelineText}>
                      <h3 className={styles.timelineTitle}>{step.title}</h3>
                      <p className={styles.timelineDesc}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.quickChat}>
              <span className={styles.quickChatIcon}>
                <MessageCircle className="h-5 w-5" />
              </span>
              <h3 className={styles.quickChatTitle}>Prefer a quick chat?</h3>
              <p className={styles.quickChatText}>
                Skip the form — message us directly on WhatsApp and we&rsquo;ll
                get back to you as soon as possible.
              </p>
              <a
                href={contactDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.quickChatBtn}
              >
                <MessageCircle className="relative z-10 h-4 w-4" />
                <span className="relative z-10">Chat on WhatsApp</span>
                <ArrowRight className="relative z-10 h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}