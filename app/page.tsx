"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const stats = [
  { value: "100,000+", label: "Hours Saved" },
  { value: "500+", label: "Projects" },
  { value: "100+", label: "Integrations" },
  { value: "99%", label: "Satisfaction" },
];

const testimonials = [
  {
    quote:
      "It's becoming really important for businesses of all types to invest in digital transformation. It's not a nice to have, it's a must. XRAY understands this, and they're able to help businesses like ours scale digitally without having to change what already works.",
    author: "Aaron Shapiro",
    role: "CEO",
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
    title: "People First",
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
    title: "Results Oriented",
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
    title: "Simplicity by Design",
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
    title: "Continuous Improvement",
    description:
      "As your needs evolve, so do our solutions. We grow and optimize with you to ensure your long-term success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

const products = [
  {
    title: "Automation Platform",
    description: "Build and manage no-code/low-code automations.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-32">
        <rect x="12" y="8" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20h8M20 26h16" stroke="currentColor" strokeWidth="2" />
        <circle cx="44" cy="44" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M44 38v12M38 44h12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "AI Assistant",
    description: "Intelligent assistance for your workflows.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-32">
        <rect x="16" y="20" width="32" height="24" rx="12" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="4" fill="currentColor" />
        <path d="M24 44h16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Documentation",
    description: "Auto-generated docs and runbooks.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-32">
        <rect x="14" y="6" width="36" height="52" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="24" y="16" width="16" height="4" rx="2" fill="#EF4444" />
        <path d="M22 28h20M22 34h20M22 40h12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Checklist",
    description: "Track tasks and approvals.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-32">
        <rect x="12" y="10" width="40" height="44" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M20 22h24M20 30h24M20 38h24" stroke="currentColor" strokeWidth="2" />
        <path d="M28 22l4 4 6-6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const blogPosts = [
  {
    title: "Creating Tools with Datadog...",
    description:
      "How we built custom Datadog tools to monitor and improve workflow performance across client environments.",
    author: "Tom Nassr",
    readTime: "X min read",
    link: "/post/datadog-tools",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a70aab5d4e970ba6df82af0_Claude%20Skills%20for%20Leaders%20Thumbnail%20v2-selection.png",
  },
  {
    title: "Google Search is Evolving...",
    description:
      "What the latest changes to Google Search mean for automation workflows and how to adapt your strategy.",
    author: "Matt Jasinski",
    readTime: "X min read",
    link: "/post/google-search-evolving",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a67698ab294636783807db7_Blog%20Thumbnail%201c-selection%20(3).png",
  },
  {
    title: "The Difference Between...",
    description:
      "Most people judge AI by one good answer. That's the wrong test. Learn how to turn a single answer into a system.",
    author: "Tom Nassr",
    readTime: "X min read",
    link: "/post/build-ai-systems",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a5e3297ab1f94872e8c0f2f_Stop%20Using%20AI%20Like%20a%20Search%20Engine%20Thumbnail-selection%20(1).png",
  },
];

const footerLinks = [
  { title: "Brands", links: ["About Us", "Terms & Conditions", "Privacy Policy"] },
  {
    title: "Products",
    links: ["XRSEARCH", "XR DEBRIEF", "XR GUARDIAN", "XR ONBOARDING", "XR BLOB"],
  },
  { title: "Services", links: ["XRAY Monthly", "XRAY Hourly", "Content Creation"] },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Assessments"],
  },
];

function AnimatedIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>{`
          .float { animation: float 6s ease-in-out infinite; }
          .float-delayed { animation: float 6s ease-in-out 3s infinite; }
          .pulse { animation: pulse 3s ease-in-out infinite; }
          .spin-slow { animation: spin 20s linear infinite; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <circle cx="200" cy="150" r="120" fill="#E0F2FE" className="pulse" />
        <rect x="120" y="100" width="160" height="100" rx="12" fill="#111827" className="float" />
        <rect x="140" y="115" width="120" height="8" rx="4" fill="#374151" />
        <rect x="140" y="130" width="80" height="8" rx="4" fill="#4B5563" />
        <circle cx="250" cy="180" r="20" fill="#2563EB" className="float-delayed" />
        <path d="M100 200 L140 160 L180 190 L220 140 L260 170 L300 120" stroke="#2563EB" strokeWidth="3" fill="none" className="pulse" />
        <circle cx="100" cy="200" r="6" fill="#2563EB" />
        <circle cx="140" cy="160" r="6" fill="#2563EB" />
        <circle cx="180" cy="190" r="6" fill="#2563EB" />
        <circle cx="220" cy="140" r="6" fill="#2563EB" />
        <circle cx="260" cy="170" r="6" fill="#2563EB" />
        <circle cx="300" cy="120" r="6" fill="#2563EB" />
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
        <circle cx="100" cy="100" r="60" fill="#0F172A" />
        <circle cx="100" cy="100" r="40" fill="#1E293B" />
        <g className="rotate-slow">
          <circle cx="100" cy="100" r="70" stroke="#2563EB" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="100" cy="100" r="80" stroke="#2563EB" strokeWidth="1" fill="none" opacity="0.3" />
        </g>
        <circle cx="100" cy="100" r="40" fill="none" stroke="#2563EB" strokeWidth="3" className="pulse-ring" />
        <path d="M85 95 L95 105 L115 85" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d47a84219730184ac7c38_8abab9dfedcf83e42da65280c8fdb4d1_logo-xray.svg"
              alt="XRAY"
              width={120}
              height={32}
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#111827] hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="https://calendly.com/xray/15min"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-tight text-[#111827] sm:text-6xl">
              Do your workflows work?
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#374151]">
              We deliver AI that works and automations that flow, all while you keep using the tools you know and love. Cut through the noise, expose what's slowing you down, and fix it once and for all. That's our promise.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="https://calendly.com/xray/15min"
                className="rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#000]"
              >
                Get a demo
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-[#111827] px-6 py-3 text-sm font-semibold text-[#111827] hover:bg-[#111827] hover:text-white"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-10 hidden lg:block">
          <AnimatedIllustration />
        </div>
      </section>

      {/* Obsessed with outcomes */}
      <section className="bg-[#FAF9F6] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Obsessed with outcomes, not apps
              </h2>
              <p className="mt-4 max-w-xl text-lg text-[#374151]">
                We're experts in best-in-class AI and automation tools serving small and enterprise teams alike.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="text-xl font-bold text-[#111827]">{stat.value}</div>
                    <div className="mt-1 text-xs text-[#374151]">{stat.label}</div>
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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-tight">Client stories.</h2>
            <Link href="/case-studies" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
              View All Case Studies
            </Link>
          </div>

          <div className="mt-10">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <blockquote className="text-xl font-medium leading-relaxed text-[#111827]">
                    “{testimonials[currentSlide].quote}”
                  </blockquote>
                  <div className="mt-4">
                    <Link href="/case-studies" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
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
                    <div className="font-semibold">{testimonials[currentSlide].author}</div>
                    <div className="text-xs text-gray-500">{testimonials[currentSlide].role}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  {currentSlide + 1} of {testimonials.length}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                    }
                    className="rounded-full border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
                    }
                    className="rounded-full border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
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

      {/* Transparency */}
      <section className="bg-[#FAF9F6] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            We're transparent with everything. It's in the name.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#374151]">
            No hidden fees, no vague timelines. Full visibility into every step of your workflow transformation.
          </p>
          <AnimatedTransparencyGraphic />
        </div>
      </section>

      {/* Process Pillars */}
      <section className="bg-[#111827] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Our Process Pillars</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            At XRAY, we're driven by a core set of principles that guide everything we do:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl bg-white/5 p-6 text-center">
                <div className="flex justify-center text-blue-400">{pillar.icon}</div>
                <div className="mt-4 text-lg font-semibold">{pillar.title}</div>
                <p className="mt-3 text-sm leading-6 text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Models */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-center">Two Models, One Mission: Your Time.</h2>
          <p className="mt-4 text-center text-lg text-[#374151]">
            Whether you're an entrepreneur or an enterprise-scale team, we can help you streamline your work.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* XRAP Weekly/Bi-weekly */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="text-sm font-semibold text-blue-700">XRAP (Weekly or Bi-weekly)</div>
              <h3 className="mt-2 text-2xl font-semibold text-[#111827]">
                Flexible engagement for growing teams.
              </h3>
              <p className="mt-4 text-[#374151]">
                Ideal for teams that need expert support on a regular cadence without a full-time commitment.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#374151]">
                <li><strong>Weekly or bi-weekly sprints</strong> with dedicated experts.</li>
                <li><strong>Async support</strong> between sessions via Slack and Loom.</li>
                <li><strong>Transparent tracking</strong> with shared task boards.</li>
              </ul>
              <div className="mt-6 text-3xl font-bold">
                $4,500<span className="text-lg font-medium text-gray-500">/mo</span>
              </div>
              <Link
                href="/xray-xrap"
                className="mt-4 inline-block rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#000]"
              >
                Get started
              </Link>
            </div>

            {/* XRAP Membership Full Time */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="text-sm font-semibold text-blue-700">XRAP Membership (Full Time)</div>
              <h3 className="mt-2 text-2xl font-semibold text-[#111827]">
                Full-service workflow transformation.
              </h3>
              <p className="mt-4 text-[#374151]">
                For complex, cross-departmental projects that need a dedicated team and fixed budget.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#374151]">
                <li><strong>Dedicated team:</strong> Strategist, consultant, and project manager.</li>
                <li><strong>Proactive support</strong> at every phase with quick POCs.</li>
                <li><strong>Enterprise tooling</strong> for monitoring and meeting summaries.</li>
              </ul>
              <div className="mt-6 text-3xl font-bold">
                $18,000<span className="text-lg font-medium text-gray-500">/mo</span>
              </div>
              <Link
                href="/xray-xrap-membership"
                className="mt-4 inline-block rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#000]"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">XRAY Workshops</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#374151]">
            Intensive Workflow Education on AI & Automation. In-person and remote workshops designed to teach your team how to work in the future.
          </p>
          <Link
            href="/xray-workshops"
            className="mt-6 inline-block rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#000]"
          >
            View all workshop packages.
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Our Products</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#374151]">
            Solved Workflows, Productized for You.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {products.map((product) => (
              <div key={product.title} className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm">
                <div className="flex justify-center text-[#111827]">{product.icon}</div>
                <div className="mt-4 text-sm font-semibold">{product.title}</div>
                <div className="mt-2 text-xs text-[#374151]">{product.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold tracking-tight">Blog</h2>
            <Link href="/blog" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
              View All Articles
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-3xl bg-white p-2 shadow-sm ring-1 ring-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={340}
                  className="w-full rounded-2xl"
                />
                <div className="p-4">
                  <div className="flex gap-2 text-xs font-semibold text-blue-700">
                    <span className="rounded-full bg-blue-50 px-2 py-1">AI</span>
                    <span className="rounded-full bg-blue-50 px-2 py-1">Tutorial</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-[#111827]">{post.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#374151]">{post.description}</p>
                  <div className="mt-4 text-xs text-gray-500">
                    {post.author} • {post.readTime}
                  </div>
                  <Link
                    href={post.link}
                    className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#111827] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to transform your everyday?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            Schedule a free consultation to discover how we can transform your business processes.
          </p>
          <Link
            href="https://calendly.com/xray/15min"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#111827] hover:bg-gray-100"
          >
            Get started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020617] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">Our work does the talking.</h3>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-white">{group.title}</h4>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 pt-8">
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com" className="text-sm text-gray-400 hover:text-white">
                LinkedIn
              </Link>
              <Link href="https://www.youtube.com" className="text-sm text-gray-400 hover:text-white">
                YouTube
              </Link>
            </div>
            <p className="text-sm text-gray-500">© XRAY Tech, Inc. 2026 - Established 2020</p>
          </div>

          <div className="mt-12 flex justify-center">
            <Image
              src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d47a84219730184ac7c38_8abab9dfedcf83e42da65280c8fdb4d1_logo-xray.svg"
              alt="XRAY"
              width={200}
              height={60}
              className="opacity-80"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
