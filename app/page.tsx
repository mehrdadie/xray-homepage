"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "100,000+", label: "Hours Saved" },
  { value: "50x", label: "Average ROI" },
  { value: "1,550+", label: "Workflows Built" },
];

const testimonials = [
  {
    quote:
      "XRAY truly understands our business needs. They've helped us transform our operations digitally while keeping our existing workflows intact. The results have been outstanding.",
    author: "Rene Dours",
    role: "VP of Operations",
  },
  {
    quote:
      "Working with XRAY has been a game-changer. Their expertise in automation and AI has allowed us to scale without adding headcount.",
    author: "Sarah Chen",
    role: "CTO",
  },
  {
    quote:
      "The team at XRAY doesn't just build tools—they build systems that last. Our onboarding process is now fully automated and our team couldn't be happier.",
    author: "Marcus Johnson",
    role: "Operations Director",
  },
];

const pillars = [
  {
    title: "People First",
    description:
      "Tools should serve people, not the other way around. We design solutions that empower your team and reduce friction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    title: "Simplify by Design",
    description:
      "We cut through complexity to create elegant, straightforward processes that anyone can use without extensive training.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M9 18h6M10 22h4M12 2v1M4.22 4.22l.71.71M2 12h1M4.22 19.78l.71-.71M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
      </svg>
    ),
  },
  {
    title: "Results Oriented",
    description:
      "We measure success by meaningful outcomes. If it doesn't move the needle for your business, we don't waste time on it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M3 17l4-8 4 5 4-9 4 12" />
        <path d="M3 17h18" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    description:
      "As your needs evolve, so do our solutions. We grow and optimize with you to ensure long-term success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
];

const blogPosts = [
  {
    title: "Creating Team-wide Dashboards with Google Sheets",
    description:
      "Learn how we built a unified dashboard system that gives every team member real-time visibility into key metrics.",
    author: "Tom Nassr",
    readTime: "5 min read",
    link: "/post/google-sheets-dashboards",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a70aab5d4e970ba6df82af0_Claude%20Skills%20for%20Leaders%20Thumbnail%20v2-selection.png",
  },
  {
    title: "Google Sheets vs. Airtable: When to Use Each",
    description:
      "Not sure which tool fits your workflow? We break down the strengths and ideal use cases for both platforms.",
    author: "Matt Jasinski",
    readTime: "7 min read",
    link: "/post/google-sheets-vs-airtable",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a67698ab294636783807db7_Blog%20Thumbnail%201c-selection%20(3).png",
  },
  {
    title: "The Difference Between Low-Code and No-Code",
    description:
      "Understanding when to use low-code vs no-code platforms can save your team weeks of development time.",
    author: "Tom Nassr",
    readTime: "6 min read",
    link: "/post/low-code-vs-no-code",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a5e3297ab1f94872e8c0f2f_Stop%20Using%20AI%20Like%20a%20Search%20Engine%20Thumbnail-selection%20(1).png",
  },
];

const footerLinks = [
  { title: "Services", links: ["XRAY Monthly", "XRAY Hourly", "Content Creation"] },
  {
    title: "Products",
    links: ["XRSEARCH", "XR DEBRIEF", "XR GUARDIAN", "XR ONBOARDING", "XR BLOB"],
  },
  { title: "Resources", links: ["Blog", "Case Studies", "Assessments"] },
  { title: "About", links: ["About Us", "Terms & Conditions", "Privacy Policy", "Contact"] },
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
            <span className="font-display text-2xl font-bold tracking-tight text-navy">XRAY</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-body text-sm font-medium text-navy hover:text-action"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="https://calendly.com/xray/15min"
            className="rounded-full bg-action px-5 py-2.5 font-body text-sm font-semibold text-white hover:bg-action/90"
          >
            Book a Free Intro
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
              Do your workflows work?
            </h1>
            <p className="mt-6 font-body text-lg leading-8 text-slate">
              We deliver AI that works and automations that flow, all while you keep using the tools you know and love. Cut through the noise, expose what's slowing you down, and fix it once and for all.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="https://calendly.com/xray/15min"
                className="rounded-full bg-action px-6 py-3 font-body text-sm font-semibold text-white hover:bg-action/90"
              >
                Book a Free Intro
              </Link>
              <Link
                href="/work"
                className="rounded-full border border-border px-6 py-3 font-body text-sm font-semibold text-navy hover:bg-navy hover:text-white"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-10 hidden lg:block">
          <AnimatedHeroIllustration />
        </div>
      </section>

      {/* Obsessed with outcomes */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                Obsessed with outcomes, not apps.
              </h2>
              <p className="mt-4 max-w-xl font-body text-lg text-slate">
                We're experts in best-in-class AI and automation tools serving small and enterprise teams alike.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                    <div className="font-display text-xl font-bold text-navy">{stat.value}</div>
                    <div className="mt-1 font-body text-xs text-slate">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Logo cloud placeholder */}
              <div className="mt-8 flex flex-wrap items-center gap-6 opacity-60">
                {["Salesforce", "HubSpot", "Slack", "Google", "Microsoft"].map((logo) => (
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
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">Client stories.</h2>
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
                    <Link href="/case-studies" className="font-body text-sm font-semibold text-action hover:text-action/80">
                      Read Case Study
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center text-navy font-display text-xl font-bold">
                    {testimonials[currentSlide].author.split(' ').map(n => n[0]).join('')}
                  </div>
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
                    className="rounded-full border border-border px-3 py-2 text-sm hover:bg-cream"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
                    }
                    className="rounded-full border border-border px-3 py-2 text-sm hover:bg-cream"
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
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">
            We're transparent with everything; it's in the name.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-slate">
            No hidden fees, no vague timelines. Full visibility into every step of your workflow transformation.
          </p>
          <AnimatedTransparencyGraphic />
        </div>
      </section>

      {/* Process Pillars */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">Our Process Pillars</h2>
          <p className="mt-4 max-w-2xl font-body text-lg text-slate">
            At XRAY, we're driven by a core set of principles that guide everything we do:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
                <div className="flex justify-center text-action">{pillar.icon}</div>
                <div className="mt-4 font-display text-lg font-semibold text-navy">{pillar.title}</div>
                <p className="mt-3 font-body text-sm leading-6 text-slate">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Models */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white text-center">Two Models, One Mission: Your Time.</h2>
          <p className="mt-4 font-body text-center text-lg text-gray-300">
            Whether you're an entrepreneur or an enterprise-scale team, we can help you streamline your work.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* XRAY Hourly */}
            <div className="rounded-3xl bg-white/5 p-8 shadow-sm ring-1 ring-white/10">
              <div className="font-body text-sm font-semibold text-gray-300">XRAY Hourly</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                Expert support when you need it.
              </h3>
              <p className="mt-4 font-body text-gray-300">
                Ideal for teams that need expert support without a full-time commitment.
              </p>
              <ul className="mt-6 font-body space-y-3 text-sm text-gray-300">
                <li><strong className="text-white">Strategy & Consulting</strong> to align on goals.</li>
                <li><strong className="text-white">Project Management</strong> to keep delivery on track.</li>
                <li><strong className="text-white">Implementation</strong> with your existing tools.</li>
              </ul>
              <div className="mt-6 font-display text-3xl font-bold text-white">
                $250<span className="font-body text-lg font-medium text-gray-400">/hr</span>
              </div>
              <Link
                href="/xray-hourly"
                className="mt-4 inline-block rounded-full bg-white px-5 py-2.5 font-body text-sm font-semibold text-navy hover:bg-gray-100"
              >
                Get started
              </Link>
            </div>

            {/* XRAY Monthly */}
            <div className="rounded-3xl bg-white/5 p-8 shadow-sm ring-1 ring-white/10">
              <div className="font-body text-sm font-semibold text-gray-300">XRAY Monthly</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                Full-service workflow transformation.
              </h3>
              <p className="mt-4 font-body text-gray-300">
                For complex projects that need a dedicated team and fixed budget.
              </p>
              <ul className="mt-6 font-body space-y-3 text-sm text-gray-300">
                <li><strong className="text-white">Dedicated Team</strong> working across your stack.</li>
                <li><strong className="text-white">Priority Support</strong> with guaranteed response times.</li>
                <li><strong className="text-white">Fractional CMO</strong> for strategy and execution.</li>
              </ul>
              <div className="mt-6 font-display text-3xl font-bold text-white">
                $15,000<span className="font-body text-lg font-medium text-gray-400">/mo</span>
              </div>
              <Link
                href="/xray-monthly"
                className="mt-4 inline-block rounded-full bg-white px-5 py-2.5 font-body text-sm font-semibold text-navy hover:bg-gray-100"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-navy">XRAY Workshops</h2>
              <p className="mt-4 font-body max-w-2xl text-lg text-slate">
                Intensive Workflow Education on AI & Automation. In-person and remote workshops designed to teach your team how to work in the future.
              </p>
              <Link
                href="/xray-workshops"
                className="mt-6 inline-block rounded-full bg-navy px-6 py-3 font-body text-sm font-semibold text-white hover:bg-charcoal"
              >
                Explore Workshops & Training
              </Link>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d452cd0ef147bc869a425_fdb5b1e5ea4bbef216d93f59a2645fef_illus-apps.svg"
                alt="Workshops illustration"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
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
                  <div className="flex gap-2 font-body text-xs font-semibold text-action">
                    <span className="rounded-full bg-inset/30 px-2 py-1">Guide</span>
                    <span className="rounded-full bg-inset/30 px-2 py-1">Tutorial</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-navy">{post.title}</h3>
                  <p className="mt-2 font-body text-sm leading-6 text-slate">{post.description}</p>
                  <div className="mt-4 font-body text-xs text-slate">
                    {post.author} • {post.readTime}
                  </div>
                  <Link
                    href={post.link}
                    className="mt-3 inline-block font-body text-sm font-semibold text-action hover:text-action/80"
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
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Ready to transform your everyday?</h2>
          <p className="mt-4 font-body max-w-2xl mx-auto text-lg text-gray-300">
            Schedule a free consultation to discover how we can transform your business processes.
          </p>
          <Link
            href="https://calendly.com/xray/15min"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-body text-sm font-semibold text-navy hover:bg-gray-100"
          >
            Book a Free Intro
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

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com" className="font-body text-sm text-gray-400 hover:text-white">
                LinkedIn
              </Link>
              <Link href="https://www.youtube.com" className="font-body text-sm text-gray-400 hover:text-white">
                YouTube
              </Link>
            </div>
            <p className="font-body text-sm text-gray-500">© XRAY Tech, Inc. 2026 - Established 2020</p>
          </div>

          <div className="mt-12 flex justify-center">
            <span className="font-display text-4xl font-bold text-white/80">XRAY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
