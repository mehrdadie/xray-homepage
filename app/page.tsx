"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

const stats = [
  { value: "12 Weeks", label: "Avg. Time To Value" },
  { value: "<6 Weeks", label: "Avg. First Deployment" },
  { value: "82%", label: "Avg. Manual Task Reduction" },
  { value: "2.5x", label: "Faster Team Output" },
];

const testimonials = [
  {
    quote:
      "It's becoming vitally important for businesses of all types to invest in digital transformation. It's a need now, not a luxury. XRAY understands this, and they're able to help businesses like ours scale digitally without having to change what already works.",
    author: "Karan Sharma",
    role: "Managing Director",
  },
  {
    quote:
      "XRAY was extremely well-prepared and tailored the solution to our specific needs. They bridged the tech knowledge divide and provided extensive training and documentation.",
    author: "Michelle",
    role: "Client",
  },
  {
    quote:
      "This project has been a huge win for both FMSC and our partners! Partners now have ownership of their information, reducing their confusion and the number of emails they send us with questions.",
    author: "Kelsey",
    role: "FMSC",
  },
  {
    quote:
      "Scaling our company has been a key strategic priority for us recently. If we want to find and keep the right people for Level, we need to make sure that their onboarding experience is great from day one.",
    author: "Allyn",
    role: "Level",
  },
  {
    quote:
      "XRAY has given our process a consistency that we just didn't have before. With this automation, all of the information I need to prepare a new employee for onboarding is right where I need it.",
    author: "Matt",
    role: "Client",
  },
  {
    quote:
      "XRAY's automations make it much easier for us to manage and track our hiring process. It lets us create transparency and accountability without having to give someone the job of just constantly checking on the offers we've sent.",
    author: "JT",
    role: "Client",
  },
  {
    quote:
      "This is incredible. The robots are doing so much of this work, and it's way better than we could have done it ourselves. The documentation is also amazing – we're ready to start training our staff.",
    author: "Amelia",
    role: "Client",
  },
];

const pillars = [
  {
    title: "People First:",
    description:
      "Tools should serve people, not the other way around. Our solutions are designed to empower your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Results Oriented:",
    description:
      "We measure our success by creating meaningful outcomes for your business. If it doesn't move the needle, we don't do it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M3 17l4-8 4 5 4-9 4 12" />
        <path d="M3 17h18" />
      </svg>
    ),
  },
  {
    title: "Simplicity by Design:",
    description:
      "We cut through complexity to create elegant, straightforward processes that anyone can use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement:",
    description:
      "As your needs evolve, so do our solutions. We grow and optimize with you to ensure your long-term success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

const blogPosts = [
  {
    title: "Creating Team-wide Standards with Claude Skills",
    description:
      "In this post, we explore the reality of building Claude skills for your team: version control, who approves changes, and what your security team will ask.",
    author: "Tom Nassr",
    readTime: "X min read",
    link: "/post/claude-skills",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a70aab5d4e970ba6df82af0_Claude%20Skills%20for%20Leaders%20Thumbnail%20v2-selection.png",
  },
  {
    title: "Google Sheets To Airtable, Minus The Data Entry",
    description:
      "Learn how we migrated a client from Google Sheets to Airtable without manual data entry, preserving formulas, permissions, and workflows.",
    author: "Matt Jasinski",
    readTime: "X min read",
    link: "/post/google-sheets-to-airtable",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a67698ab294636783807db7_Blog%20Thumbnail%201c-selection%20(3).png",
  },
  {
    title: "The Difference Between Using AI and Building With AI",
    description:
      "Most people judge AI by one good answer. That's the wrong test. Learn how to turn a single answer into a system.",
    author: "Tom Nassr",
    readTime: "X min read",
    link: "/post/build-ai-systems",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a5e3297ab1f94872e8c0f2f_Stop%20Using%20AI%20Like%20a%20Search%20Engine%20Thumbnail-selection%20(1).png",
  },
];

const footerLinks = [
  { title: "Company", links: ["About Us", "Terms & Conditions", "Privacy Policy"] },
  {
    title: "Products",
    links: ["XRSEARCH", "XR DEBRIEF", "XR GUARDIAN", "XR ONBOARDING", "XR BLOB"],
  },
  { title: "Services", links: ["XRAY Monthly", "XRAY Hourly", "Content Creation", "Assessments"] },
  {
    title: "Resources",
    links: ["Blog", "Case Studies"],
  },
];

function AnimatedHeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .float { animation: float 6s ease-in-out infinite; }
          .float-delayed { animation: float 6s ease-in-out 3s infinite; }
          .pulse { animation: pulse 3s ease-in-out infinite; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `}</style>
        <circle cx="200" cy="150" r="120" fill="#b9d6f0" className="pulse" />
        <rect x="120" y="100" width="160" height="100" rx="12" fill="#0e1c2d" className="float" />
        <rect x="140" y="115" width="120" height="8" rx="4" fill="#374151" />
        <rect x="140" y="130" width="80" height="8" rx="4" fill="#4B5563" />
        <circle cx="250" cy="180" r="20" fill="#1566b9" className="float-delayed" />
        <path d="M100 200 L140 160 L180 190 L220 140 L260 170 L300 120" stroke="#1566b9" strokeWidth="3" fill="none" className="pulse" />
        <circle cx="100" cy="200" r="6" fill="#1566b9" />
        <circle cx="140" cy="160" r="6" fill="#1566b9" />
        <circle cx="180" cy="190" r="6" fill="#1566b9" />
        <circle cx="220" cy="140" r="6" fill="#1566b9" />
        <circle cx="260" cy="170" r="6" fill="#1566b9" />
        <circle cx="300" cy="120" r="6" fill="#1566b9" />
      </svg>
    </div>
  );
}

function AnimatedTransparencyGraphic() {
  return (
    <div className="flex justify-center py-8">
      <svg viewBox="0 0 200 200" className="w-48 h-48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .rotate-slow { animation: spin 15s linear infinite; transform-origin: center; }
          .pulse-ring { animation: pulse-ring 2s ease-out infinite; }
          @keyframes pulse-ring {
            0% { r: 40; opacity: 0.8; }
            100% { r: 80; opacity: 0; }
          }
        `}</style>
        <circle cx="100" cy="100" r="60" fill="#0e1c2d" />
        <circle cx="100" cy="100" r="40" fill="#1E293B" />
        <g className="rotate-slow">
          <circle cx="100" cy="100" r="70" stroke="#1566b9" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="100" cy="100" r="80" stroke="#1566b9" strokeWidth="1" fill="none" opacity="0.3" />
        </g>
        <circle cx="100" cy="100" r="40" fill="none" stroke="#1566b9" strokeWidth="3" className="pulse-ring" />
        <text x="100" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">XRAY</text>
      </svg>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-background text-navy">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <span className="font-body text-base font-normal tracking-[-0.5px] leading-[20px] text-charcoal">XRAY</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-body text-[18px] font-normal tracking-[-0.5px] leading-[28px] text-charcoal hover:text-action"
                style={{ padding: '8px' }}
              >
                {item.label}
                <span className="ml-1 inline-block text-xs">▾</span>
              </Link>
            ))}
          </nav>

          <Link
            href="https://calendly.com/xray/15min"
            className="inline-block rounded-lg bg-action px-[24px] py-[16px] font-display text-base font-semibold capitalize text-white hover:bg-action/90"
            style={{ fontFamily: '"new-order", sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: 'normal', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(21, 102, 185)', borderRadius: '8px', padding: '16px 24px', border: '0px none rgb(255, 255, 255)', textTransform: 'capitalize', display: 'inline-block', margin: '0px' }}
          >
            Book 15 Minutes Free
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="absolute left-[22%] -top-8 h-24 w-24 opacity-90" viewBox="0 0 100 100">
            <defs>
              <pattern id="stripes" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#fb923c" strokeWidth="3" />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#stripes)" />
          </svg>
          <svg className="absolute left-[55%] top-[16%] h-36 w-36 opacity-90" viewBox="0 0 100 100">
            <defs>
              <pattern id="dots" patternUnits="userSpaceOnUse" width="5" height="5">
                <circle cx="2.5" cy="2.5" r="1" fill="#0e1c2d" />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#dots)" />
          </svg>
          <span className="absolute left-[16%] top-[30%] h-1.5 w-1.5 rounded-full bg-navy" />
          <span className="absolute left-[44%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-navy" />
          <span className="absolute right-[10%] bottom-[16%] h-1.5 w-1.5 rounded-full bg-navy" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-[96px] leading-[110.4px] tracking-[-2.5px] font-bold text-navy sm:text-[96px]">
              Do your workflows work?
            </h1>
            <p className="mt-6 text-center text-lg leading-8 text-slate">
              We deliver AI that works and automations that flow, all while you keep using the tools you know and love. Cut through the noise, expose what’s slowing you down, and fix it once and for all. That’s our promise.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="inline-block rounded-lg bg-action px-[24px] py-[16px] font-display text-base font-semibold capitalize text-white hover:bg-action/90"
                style={{ fontFamily: '"new-order", sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: 'normal', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(21, 102, 185)', borderRadius: '8px', padding: '16px 24px', border: '0px none rgb(255, 255, 255)', textTransform: 'capitalize', display: 'inline-block', margin: '0px' }}
              >
                Talk With Us
              </button>
              <Link
                href="/assessment"
                className="block rounded-lg bg-transparent px-[24px] py-[16px] font-display text-base font-semibold capitalize text-action hover:bg-navy hover:text-white"
                style={{ fontFamily: '"new-order", sans-serif', fontSize: '16px', fontWeight: 600, letterSpacing: 'normal', color: 'rgb(21, 102, 185)', backgroundColor: 'rgba(255, 255, 255, 0)', borderRadius: '8px', padding: '16px 24px', border: '0px none rgb(21, 102, 185)', textTransform: 'capitalize', display: 'block', margin: '0px' }}
              >
                Free Workflow Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Obsessed with outcomes */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-[40px] leading-[48px] tracking-[-1px] font-bold text-navy">
                Obsessed with outcomes, not apps
              </h2>
              <p className="mt-4 max-w-xl font-body text-[22px] font-normal leading-[34px] text-slate">
                We're experts in best-in-class AI and automation tools serving small and enterprise teams alike. We adopt and stress test emerging tools to keep you on the cutting edge, helping you win the next decade.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="font-display text-xl font-bold text-navy">{stat.value}</div>
                    <div className="mt-1 font-body text-xs text-slate">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 opacity-60">
                {["asana", "censor", "Microsoft", "miro", "zendesk", "Jotform", "n8n", "Typeform", "stripe", "Search", "+ many more"].map((logo) => (
                  <div key={logo} className="font-body text-sm font-semibold text-slate">
                    {logo}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <Image
                src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d452cd0ef147bc869a425_fdb5b1e5ea4bbef216d93f59a2645fef_illus-apps.svg"
                alt="App ecosystem illustration"
                width={1200}
                height={600}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-navy">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">Client stories.</h2>
            </div>
            <Link href="/case-studies" className="font-body text-sm font-semibold text-action hover:text-action/80">
              View All Case Studies
            </Link>
          </div>

          <div className="mt-10">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <blockquote className="font-body text-xl font-medium leading-relaxed text-navy">
                    “{testimonials[currentSlide].quote}”
                  </blockquote>
                  <div className="mt-4">
                    <Link href="/case-studies" className="font-body text-base font-normal tracking-[-0.5px] leading-[20px] text-action hover:text-action/80">
                      Read Case Study
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-center gap-3">
                  <Image
                    src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695ebc56269c4c5850e2e73f_testimonial-karan.svg"
                    alt={testimonials[currentSlide].author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <div className="font-display text-sm font-semibold text-navy">{testimonials[currentSlide].author}</div>
                    <div className="font-body text-xs text-slate">{testimonials[currentSlide].role}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="font-body text-xs text-slate">
                  {currentSlide + 1} of {testimonials.length}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                    }
                    className="rounded-full border border-border p-2 text-sm hover:bg-cream"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
                    }
                    className="rounded-full border border-border p-2 text-sm hover:bg-cream"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Pillars */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Our Process Pillars</h2>
          <p className="mt-4 max-w-2xl font-body text-lg text-gray-300">
            At XRAY, we're driven by a core set of principles that guide everything we do:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl bg-white/5 p-6 text-center">
                <div className="flex justify-center text-action">{pillar.icon}</div>
                <div className="mt-4 font-display text-lg font-semibold text-white">{pillar.title}</div>
                <p className="mt-3 font-body text-sm leading-6 text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Models */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-center text-navy">Two Models, One Mission: Your Time.</h2>
          <p className="mt-4 font-body text-center text-lg text-slate">
            Whether you're an entrepreneur or an enterprise-scale team, we can help you streamline your work with transparent hourly and monthly packages.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* XRAY Hourly */}
            <div className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-border">
              <div className="flex items-center gap-3">
                <Image src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d47a84219730184ac7c38_8abab9dfedcf83e42da65280c8fdb4d1_logo-xray.svg" alt="Xray logo" width={32} height={32} />
                <div className="font-body text-sm font-semibold text-slate">Hourly</div>
              </div>
              <div className="mt-4">
                <p className="font-body text-slate">For agile teams, startups, and owner/operators who need expert, hands-on support – right away.</p>
                <p className="mt-2 font-body text-slate">
                  <strong className="text-navy">XRAY Hourly</strong> is a <strong className="text-navy">Done with You</strong> model focused on immediate outcomes for maximum efficiency on a tight scope.
                </p>
                <ul className="mt-4 font-body space-y-2 text-sm text-slate">
                  <li><strong className="text-navy">Flexible, hourly, as-needed billing</strong> with no long-term commitment.</li>
                  <li><strong className="text-navy">Collaborative Building:</strong> Work side-by-side with a hand-picked expert on a live, recorded Zoom call.</li>
                  <li><strong className="text-navy">The client portal</strong> has a repository of all your past calls and corresponding transcripts for you to review, download, and keep forever if you'd like. Schedule more time whenever is convenient for you, and bring anyone on your team to the sessions.</li>
                </ul>
              </div>
              <div className="mt-6 font-display text-3xl font-bold text-navy">
                $250<span className="font-body text-lg font-medium text-slate">/hr</span>
              </div>
              <Link
                href="/xray-hourly"
                className="mt-4 inline-block rounded-full bg-navy px-5 py-2.5 font-body text-sm font-semibold text-white hover:bg-charcoal"
              >
                Learn More About XRAY Hourly
              </Link>
            </div>

            {/* XRAY Monthly */}
            <div className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-border">
              <div className="flex items-center gap-3">
                <Image src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d47a84219730184ac7c38_8abab9dfedcf83e42da65280c8fdb4d1_logo-xray.svg" alt="Xray logo" width={32} height={32} />
                <div className="font-body text-sm font-semibold text-slate">Monthly</div>
              </div>
              <div className="mt-4">
                <p className="font-body text-slate">For complex, cross-departmental projects, we offer full service workflow transformation at scale.</p>
                <p className="mt-2 font-body text-slate">
                  <strong className="text-navy">XRAY Monthly</strong> is a <strong className="text-navy">Full Service</strong> model where we own the complete workflow design lifecycle: discovery, design, execution, change management, and maintenance.
                </p>
                <ul className="mt-4 font-body space-y-2 text-sm text-slate">
                  <li><strong className="text-navy">Dedicated Team:</strong> Strategist, consultant, and project manager.</li>
                  <li><strong className="text-navy">Proactive support</strong> at every phase with quick POCs.</li>
                  <li><strong className="text-navy">Enterprise tooling</strong> for monitoring and meeting summaries.</li>
                </ul>
              </div>
              <div className="mt-6 font-display text-3xl font-bold text-navy">
                $15,000<span className="font-body text-lg font-medium text-slate">/mo</span>
              </div>
              <Link
                href="/xray-monthly"
                className="mt-4 inline-block rounded-full bg-navy px-5 py-2.5 font-body text-sm font-semibold text-white hover:bg-charcoal"
              >
                Learn More About XRAY Monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/xray-workshops"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-body text-sm font-semibold text-navy hover:bg-cream"
          >
            Explore Our Workshops & Workforce Training
          </Link>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">Blog</h2>
            <Link href="/blog" className="font-body text-sm font-semibold text-action hover:text-action/80">
              View All Articles
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl bg-white p-2 shadow-sm ring-1 ring-border">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={340}
                  className="w-full rounded-2xl"
                />
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold leading-snug text-navy">{post.title}</h3>
                  <div className="mt-4">
                    <Link href={post.link} className="font-body text-sm font-semibold text-action hover:text-action/80">
                      Read Article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">Ready to transform your everyday?</h2>
          <p className="mt-4 font-body max-w-2xl mx-auto text-lg text-slate">
            Schedule a free consultation to discover how we can transform your business processes.
          </p>
          <Link
            href="https://calendly.com/xray/15min"
            className="mt-8 inline-block rounded-full bg-action px-8 py-3.5 font-body text-sm font-semibold text-white hover:bg-action/90"
          >
            Book 15 Minutes Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Your workflow, but smarter.</h3>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-display text-sm font-semibold text-white">{group.title}</h4>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="font-body text-sm text-gray-400 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="font-body text-sm text-gray-400">
              Hear from the humans at XRAY and learn how to get AI and automation working in your workflows.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 font-body text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />
              <button type="button" className="w-full rounded-full bg-white px-5 py-2.5 font-body text-sm font-semibold text-navy hover:bg-gray-100 sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
            <p className="font-body text-sm text-gray-500">© XRAY Tech, Inc. 2026 - Established 2020</p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.youtube.com" className="text-gray-400 hover:text-white">
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <span className="font-display text-4xl font-bold text-white/80">XRAY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
