// pages/index.jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/** ---------- CONFIG (swap filenames if yours differ) ---------- **/
const HERO_IMAGE = "/images/worker-illustration.png"; // right-side hero illustration

// 3D glass icons (put PNGs in /public/icons/**)
const SERVICE_CARDS = [
  { title: "Electricians", image: "/images/services/electrician.webp" },
  { title: "Cleaning Crews", image: "/images/services/cleaning.webp" },
  { title: "Gardeners", image: "/images/services/gardening.webp" },
  { title: "Carpenters", image: "/images/services/carpenter.webp" },
  { title: "Roofing Teams", image: "/images/services/roofing.webp" },
  { title: "Tech Support", image: "/images/services/tech.webp" },
];

const KPIS = [
  { label: "vetted professionals", value: "1,200+" },
  { label: "cities covered", value: "150+" },
  { label: "services available", value: "45+" },
];

const SAFEGUARDS = [
  {
    title: "Insurance & Compliance",
    items: [
      "Industry-leading coverage for all services",
      "Continuous checks for standards adherence",
    ],
  },
  {
    title: "Dedicated Assistance",
    items: [
      "7-day support for any issues",
      "Fast escalation for urgent jobs",
    ],
  },
  {
    title: "Security for Compliance",
    items: [
      "Required levels of security & privacy",
      "Strong adherence to regulations",
    ],
  },
  {
    title: "Anonymous Ratings",
    items: [
      "Confident, private feedback",
      "Transparent quality history",
    ],
  },
];

/** ---------- ANIMATION HELPERS ---------- **/
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut", delay: d },
});

/** ---------- PAGE ---------- **/
export default function Home() {
  return (
    <>
      <Head>
        <title>FixEasy — Trusted Professionals. Verified for Your Peace of Mind.</title>
        <meta
          name="description"
          content="Easily book reliable home services in your area. Vetted professionals, premium support, secure payments, and transparent pricing."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-indigo-50/30 to-white text-slate-900">
        {/* Top Nav */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-200/60">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold">
              <span className="text-sky-700">Fix</span>Easy
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <Link href="#services" className="hover:text-slate-900">Services</Link>
              <Link href="#how" className="hover:text-slate-900">How It Works</Link>
              <Link href="#contact" className="hover:text-slate-900">Contact</Link>
            </div>
            <Link
              href="/signup"
              className="rounded-xl bg-indigo-600 text-white text-sm px-4 py-2 shadow-sm hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </nav>
        </header>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HERO */}
          <section className="py-10 md:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div {...fadeUp(0)}>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  Trusted Professionals.<br />Verified for Your Peace of Mind.
                </h1>
                <p className="mt-4 text-slate-600 max-w-xl">
                  Easily book reliable home services in your area. All professionals are vetted to ensure your safety.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-indigo-700"
                  >
                    Find a Professional
                  </Link>
                  <Link
                    href="#how"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Learn More
                  </Link>
                </div>

                {/* KPI cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {KPIS.map((k, i) => (
                    <motion.div
                      key={k.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 * i }}
                      className="rounded-2xl bg-white/80 backdrop-blur ring-1 ring-slate-200 shadow-sm p-4"
                    >
                      <div className="text-2xl font-semibold">{k.value}</div>
                      <div className="text-xs text-slate-600">{k.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="relative" {...fadeUp(0.05)}>
                <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur ring-1 ring-slate-200 shadow-lg">
                  <Image
                    src={HERO_IMAGE}
                    alt="FixEasy professional"
                    width={1200}
                    height={900}
                    priority
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  {/* subtle glass highlight */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                </div>
              </motion.div>
            </div>
          </section>

          {/* PREMIUM SUPPORT / SERVICES GRID (as in mock) */}
          <section id="services" className="pb-10 md:pb-14">
            <motion.h2 className="text-2xl sm:text-3xl font-semibold" {...fadeUp(0)}>
              Premium support for every booking
            </motion.h2>

            <motion.ul
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {SERVICE_CARDS.map((c, i) => (
                <motion.li
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: i * 0.03 }}
                  className="group flex flex-col items-center gap-3 rounded-2xl bg-white/80 backdrop-blur p-4 ring-1 ring-slate-200 shadow-sm hover:shadow-md"
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={c.image}
                      alt={c.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-medium mt-2">{c.title}</h3>
                  <p className="text-xs text-slate-600">Available 24/7</p>
                </motion.li>
              ))}
            </motion.ul>
          </section>

          {/* SAFEGUARDS */}
          <section className="pb-16">
            <motion.h2 className="text-2xl sm:text-3xl font-semibold" {...fadeUp(0)}>
              Safeguards for Clients, Pros, and Data
            </motion.h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {SAFEGUARDS.map((block, i) => (
                <motion.div
                  key={block.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.04 * i }}
                  className="rounded-2xl bg-white/80 backdrop-blur p-5 ring-1 ring-slate-200 shadow-sm"
                >
                  <h3 className="font-medium">{block.title}</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer id="contact" className="border-t border-slate-200 bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} FixEasy. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-900">Terms</Link>
              <Link href="/support" className="hover:text-slate-900">Support</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
