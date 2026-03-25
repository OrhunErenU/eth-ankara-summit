"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ─────────────── ANIMATION HELPERS ─────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className={`relative px-4 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}

/* ─────────────── COUNTDOWN HOOK ─────────────── */

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    function calc() {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      };
    }
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 60_000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

/* ─────────────── NAVBAR ─────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Hakkında", href: "#about" },
    { label: "Program", href: "#program" },
    { label: "Konuşmacılar", href: "#speakers" },
    { label: "Kayıt", href: "#register" },
    { label: "Mekan", href: "#venue" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="font-heading text-lg font-bold tracking-tight">
          <span className="gradient-text">ETH</span> Ankara
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Kayıt Ol
          </a>
        </div>
        {/* Mobile: simple CTA */}
        <a
          href="#register"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Kayıt
        </a>
      </div>
    </nav>
  );
}

/* ─────────────── HERO ─────────────── */

function Hero() {
  const target = new Date("2025-05-23T09:00:00+03:00");
  const { days, hours, minutes } = useCountdown(target);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-accent/15 blur-[100px]" />

        {/* Floating nodes */}
        {[
          { size: 6, left: "10%", top: "20%", delay: 0 },
          { size: 4, left: "80%", top: "15%", delay: 1 },
          { size: 8, left: "70%", top: "60%", delay: 2 },
          { size: 5, left: "20%", top: "70%", delay: 0.5 },
          { size: 3, left: "50%", top: "30%", delay: 1.5 },
          { size: 6, left: "90%", top: "80%", delay: 3 },
        ].map((n, i) => (
          <div
            key={i}
            className="animate-float-slow absolute rounded-full"
            style={{
              width: n.size * 4,
              height: n.size * 4,
              left: n.left,
              top: n.top,
              animationDelay: `${n.delay}s`,
              background: `linear-gradient(135deg, #627EEA, #8C8DFC, #00D4AA)`,
              opacity: 0.3,
            }}
          />
        ))}
        {/* Connection lines (SVG) */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
          <line x1="10%" y1="20%" x2="50%" y2="30%" stroke="#627EEA" strokeWidth="1" />
          <line x1="50%" y1="30%" x2="80%" y2="15%" stroke="#8C8DFC" strokeWidth="1" />
          <line x1="50%" y1="30%" x2="70%" y2="60%" stroke="#00D4AA" strokeWidth="1" />
          <line x1="20%" y1="70%" x2="50%" y2="30%" stroke="#627EEA" strokeWidth="1" />
          <line x1="70%" y1="60%" x2="90%" y2="80%" stroke="#8C8DFC" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-[0.3em] text-accent">
            TEDU Blockchain Topluluğu Sunar
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            <span className="gradient-text">ETH Ankara</span>
            <br />
            Summit
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary md:text-xl">
            Where Ethereum Meets the Multi-Chain Future
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm text-text-secondary md:flex-row md:justify-center md:gap-4">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              23-24 Mayıs 2025
            </span>
            <span className="hidden text-text-secondary/50 md:inline">|</span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              23 Mayıs: TED Üniversitesi (Fiziksel)
            </span>
            <span className="hidden text-text-secondary/50 md:inline">|</span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              24 Mayıs: Online Hackathon
            </span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          {[
            { value: days, label: "Gün" },
            { value: hours, label: "Saat" },
            { value: minutes, label: "Dakika" },
          ].map((t) => (
            <div key={t.label} className="glass rounded-xl px-5 py-3 text-center md:px-8 md:py-4">
              <div className="font-heading text-3xl font-bold text-white md:text-4xl">
                {String(t.value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-text-secondary">
                {t.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#register"
            className="group relative rounded-full bg-gradient-to-r from-primary via-secondary to-accent px-8 py-3.5 font-heading text-sm font-bold text-white transition-all hover:shadow-xl hover:shadow-primary/30"
          >
            Ücretsiz Kayıt Ol
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/20 px-8 py-3.5 font-heading text-sm font-bold text-white transition-all hover:border-white/50 hover:bg-white/5"
          >
            Detayları Gör
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT ─────────────── */

function About() {
  const cards = [
    {
      icon: "🎤",
      title: "2 Gün 2 Format",
      desc: "23 Mayıs'ta TED Üniversitesi'nde yüz yüze konferans, 24 Mayıs'ta online hackathon. Hem öğren hem inşa et.",
    },
    {
      icon: "🔗",
      title: "Multi-Chain Vizyon",
      desc: "Ethereum odaklı, ama Solana, Sui ve diğer ekosistemlere de açık. Zincirler arası geleceği birlikte keşfedelim.",
    },
    {
      icon: "🏆",
      title: "Build & Network",
      desc: "$10K ödül havuzlu hackathon, networking alanları ve endüstri liderleriyle birebir tanışma fırsatı.",
    },
  ];

  return (
    <Section id="about">
      <motion.div variants={fadeUp} className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          Neden <span className="gradient-text">ETH Ankara</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Türkiye&apos;nin başkentinde, Ethereum ve multi-chain ekosistemini bir araya getiren en büyük öğrenci odaklı Web3 etkinliği.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            className="glass group cursor-default rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="mb-4 text-4xl">{c.icon}</div>
            <h3 className="font-heading text-xl font-bold">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────── PROGRAM ─────────────── */

function Program() {
  const [tab, setTab] = useState<"day1" | "day2">("day1");

  const topics = ["Layer 2", "DeFi", "Cross-Chain Bridges", "Account Abstraction"];

  return (
    <Section id="program">
      <motion.div variants={fadeUp} className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Program</span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <motion.div variants={fadeUp} className="mb-8 flex justify-center gap-2">
        <button
          onClick={() => setTab("day1")}
          className={`rounded-full px-6 py-2.5 font-heading text-sm font-semibold transition-all ${
            tab === "day1"
              ? "bg-primary text-white shadow-lg shadow-primary/30"
              : "border border-white/15 text-text-secondary hover:text-white"
          }`}
        >
          23 Mayıs — Fiziksel
        </button>
        <button
          onClick={() => setTab("day2")}
          className={`rounded-full px-6 py-2.5 font-heading text-sm font-semibold transition-all ${
            tab === "day2"
              ? "bg-accent text-bg shadow-lg shadow-accent/30"
              : "border border-white/15 text-text-secondary hover:text-white"
          }`}
        >
          24 Mayıs — Online
        </button>
      </motion.div>

      <motion.div variants={fadeUp}>
        {tab === "day1" ? (
          <div className="space-y-6">
            <div className="dashed-gradient flex min-h-[200px] flex-col items-center justify-center p-10 text-center">
              <span className="mb-3 text-4xl">🎤</span>
              <p className="font-heading text-lg font-semibold text-white">
                Konferans Programı Yakında
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                Keynote&apos;lar, paneller ve workshop&apos;lar açıklanacak
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="dashed-gradient flex min-h-[200px] flex-col items-center justify-center p-10 text-center">
            <span className="mb-3 text-4xl">💻</span>
            <p className="font-heading text-lg font-semibold text-white">
              Hackathon Detayları Yakında
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              $10K ödül havuzu • Takım eşleştirme • Mentor desteği
            </p>
          </div>
        )}
      </motion.div>
    </Section>
  );
}

/* ─────────────── SPEAKERS ─────────────── */

function Speakers() {
  const placeholders = [
    { role: "Keynote Speaker" },
    { role: "Panelist" },
    { role: "Keynote Speaker" },
    { role: "Panelist" },
  ];

  return (
    <Section id="speakers">
      <motion.div variants={fadeUp} className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Konuşmacılar</span>
        </h2>
        <p className="mt-4 text-text-secondary">Endüstri liderlerini yakında duyuracağız.</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {placeholders.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex flex-col items-center rounded-2xl bg-card-bg/50 p-8 opacity-60"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent">
              <span className="font-heading text-3xl font-bold text-white">?</span>
            </div>
            <p className="mt-5 font-heading text-sm font-semibold text-text-secondary">
              Yakında Açıklanacak
            </p>
            <p className="mt-1 text-xs text-text-secondary/60">{s.role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────── SPONSORS ─────────────── */

function Sponsors() {
  const tiers = [
    { name: "Summit Lead", count: 2 },
    { name: "Chain Partners", count: 3 },
    { name: "Community Partners", count: 4 },
  ];

  return (
    <Section id="sponsors">
      <motion.div variants={fadeUp} className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Sponsorlar</span>
        </h2>
      </motion.div>

      <div className="space-y-12">
        {tiers.map((tier) => (
          <motion.div key={tier.name} variants={fadeUp}>
            <h3 className="mb-6 text-center font-heading text-lg font-semibold text-text-secondary">
              {tier.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from({ length: tier.count }).map((_, i) => (
                <div
                  key={i}
                  className="dashed-gradient flex h-20 w-40 items-center justify-center md:h-24 md:w-48"
                >
                  <span className="text-xs text-text-secondary/50">Yakında</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} className="mt-12 text-center">
        <a
          href="mailto:sponsor@ethankara.xyz"
          className="inline-block rounded-full border border-accent/40 px-8 py-3 font-heading text-sm font-semibold text-accent transition-all hover:bg-accent/10"
        >
          Sponsorluk İçin Bizimle İletişime Geçin
        </a>
      </motion.div>
    </Section>
  );
}

/* ─────────────── REGISTRATION ─────────────── */

function Registration() {
  const passes = [
    {
      name: "General Pass",
      price: "Ücretsiz",
      features: ["23 Mayıs fiziksel erişim", "Konferans & paneller", "Network alanı"],
      featured: false,
    },
    {
      name: "Hacker Pass",
      price: "Ücretsiz",
      badge: "LIMITED",
      features: [
        "Her iki gün erişim",
        "Hackathon katılımı",
        "$10K ödül havuzu",
        "Mentor desteği",
        "Özel Hacker lounge",
      ],
      featured: true,
    },
    {
      name: "Student Pass",
      price: "Ücretsiz",
      features: ["23 Mayıs fiziksel erişim", "Öğrenci network alanı", "CV drop fırsatı"],
      featured: false,
    },
    {
      name: "Media Pass",
      price: "Ücretsiz",
      features: ["Her iki gün erişim", "Basın özel alanı", "Konuşmacı röportajları"],
      featured: false,
    },
  ];

  return (
    <Section id="register">
      <motion.div variants={fadeUp} className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Kayıt</span>
        </h2>
        <p className="mt-4 text-text-secondary">Hepsi ücretsiz. Yerini ayırt.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {passes.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            className={`relative flex flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 ${
              p.featured
                ? "border-2 border-accent bg-card-bg shadow-lg shadow-accent/10"
                : "glass"
            }`}
          >
            {/* LIMITED ribbon */}
            {p.badge && (
              <div className="absolute -right-8 top-5 rotate-45 bg-accent px-10 py-1 text-xs font-bold text-bg">
                {p.badge}
              </div>
            )}

            <h3 className="font-heading text-lg font-bold">{p.name}</h3>
            <p className={`mt-1 text-2xl font-bold ${p.featured ? "text-accent" : "text-primary"}`}>
              {p.price}
            </p>

            <ul className="mt-5 flex-1 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                      p.featured ? "text-accent" : "text-primary"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className={`mt-6 block rounded-full py-2.5 text-center font-heading text-sm font-semibold transition-all ${
                p.featured
                  ? "bg-accent text-bg hover:shadow-lg hover:shadow-accent/30"
                  : "border border-primary/40 text-primary hover:bg-primary/10"
              }`}
            >
              Kayıt Ol
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────── VENUE ─────────────── */

function Venue() {
  return (
    <Section id="venue">
      <motion.div variants={fadeUp} className="mb-12 text-center">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          <span className="gradient-text">Mekan</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeUp}>
        <div className="glass mx-auto max-w-2xl rounded-2xl p-8 text-center md:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-heading text-2xl font-bold">TED Üniversitesi Kampüsü</h3>
          <p className="mt-2 text-text-secondary">Kolej, Çankaya / Ankara</p>
          <div className="mt-6 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-text-secondary">
            <span>📅 23 Mayıs 2025</span>
            <span className="text-white/20">|</span>
            <span>🕘 09:00 - 18:00</span>
          </div>
          <p className="mt-6 text-sm text-text-secondary/70">
            Kolay ulaşım: Kızılay Metro → Dolmuş / Otobüs ile 10 dakika
          </p>
        </div>
      </motion.div>
    </Section>
  );
}

/* ─────────────── FOOTER ─────────────── */

function Footer() {
  const socials = [
    {
      name: "Twitter / X",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-white/5 px-4 py-12">
      <div className="mx-auto max-w-6xl text-center">
        <a href="#" className="inline-block font-heading text-xl font-bold">
          <span className="gradient-text">ETH</span> Ankara Summit
        </a>

        <div className="mt-6 flex justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-secondary transition-all hover:border-primary/50 hover:text-primary"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-text-secondary">
          <span className="text-accent">TEDU Blockchain Topluluğu</span> tarafından
          düzenlenmektedir.
        </p>
        <p className="mt-2 text-xs text-text-secondary/50">
          <a href="mailto:iletisim@ethankara.xyz" className="hover:text-white">
            iletisim@ethankara.xyz
          </a>
        </p>
        <p className="mt-4 text-xs text-text-secondary/40">&copy; 2025 ETH Ankara Summit</p>
      </div>
    </footer>
  );
}

/* ─────────────── PAGE ─────────────── */

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bg">
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Speakers />
      <Sponsors />
      <Registration />
      <Venue />
      <Footer />
    </main>
  );
}
