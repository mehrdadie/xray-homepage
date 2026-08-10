"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Services", href: "#" },
  { label: "Products", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About Us", href: "/about" },
];

const stats = [
  { value: "250+", label: "Orgs Served" },
  { value: "100,000+", label: "Hours Saved" },
  { value: "50x", label: "Highest Client ROI" },
  { value: "1,550+", label: "Workflows Delivered" },
];

const testimonials = [
  {
    quote:
      "It’s becoming vitally important for businesses of all types to invest in digital transformation. It’s a need now, not a luxury. XRAY understands this, and they’re able to help businesses like ours scale digitally without having to change what already works.",
    author: "Karan Sharma",
    role: "Managing Director",
  },
  {
    quote:
      "This project has been a huge win for both FMSC and our partners! Partners now have ownership of their information, reducing their confusion and the number of emails they send us with questions.",
    author: "Kelsey",
    role: "FMSC",
  },
  {
    quote:
      "XRAY was extremely well-prepared and tailored the solution to our specific needs. They bridged the tech knowledge divide and provided extensive training and documentation.",
    author: "Michelle",
    role: "Client",
  },
  {
    quote:
      "Scaling our company has been a key strategic priority for us recently. If we want to find and keep the right people for Level, we need to make sure that their onboarding experience is great from day one.",
    author: "Allyn",
    role: "Level",
  },
  {
    quote:
      "XRAY has given our process a consistency that we just didn’t have before. With this automation, all of the information I need to prepare a new employee for onboarding is right where I need it.",
    author: "Matt",
    role: "Client",
  },
  {
    quote:
      "XRAY’s automations make it much easier for us to manage and track our hiring process. It lets us create transparency and accountability without having to give someone the job of just constantly checking on the offers we’ve sent.",
    author: "JT",
    role: "Client",
  },
  {
    quote:
      "This is incredible. The robots are doing so much of this work, and it's way better than we could have done it ourselves. The documentation is also amazing – we’re ready to start training our staff.",
    author: "Amelia",
    role: "Client",
  },
];

const pillars = [
  {
    title: "People First:",
    description:
      "Tools should serve people, not the other way around. Our solutions are designed to empower your team and make their work more meaningful.",
  },
  {
    title: "Results Oriented:",
    description:
      "We measure our success by creating meaningful outcomes for your business. If it doesn't move the needle, we don't do it.",
  },
  {
    title: "Simplicity by Design:",
    description:
      "We cut through complexity to create elegant, straightforward processes that anyone can use. Simplicity is the ultimate sophistication.",
  },
  {
    title: "Continuous Improvement:",
    description:
      "As your needs evolve, so do our solutions. We grow and optimize with you to ensure your long-term success.",
  },
];

const products = [
  {
    title: "Manage and maintain no-code/low-code automations.",
    link: "https://guardian.xray.tech/",
    linkLabel: "Explore XR GUARDIAN",
    image: "https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d63d0a4b1ffe13a8c7627_product-1.svg",
  },
  {
    title: "Plan your next build with a free automation search engine",
    link: "https://search.xray.tech/",
    linkLabel: "Explore XR SEARCH",
    image: "https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d63d5533ace8a3305959f_product-2.svg",
  },
  {
    title: "Generate a 60-second debrief from an hour-long meeting.",
    link: "https://debrief.xray.tech/",
    linkLabel: "Explore XR DEBRIEF",
    image: "https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d63d9ad44f49554e0934e_product-3.svg",
  },
  {
    title: "View the full list  of tools",
    link: "/products",
    linkLabel: "Explore All Tools",
    image: "https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d63dd990a98d1548cce3a_product-4.svg",
  },
];

const blogPosts = [
  {
    title: "Creating Team-wide Standards with Claude Skills",
    description:
      "In this post, we explore the reality of building Claude skills for your team: version control, who approves changes, and what your security team will ask.",
    author: "Tom Nassr",
    readTime: "X min read",
    link: "/post/claude-skills-for-leaders",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a70aab5d4e970ba6df82af0_Claude%20Skills%20for%20Leaders%20Thumbnail%20v2-selection.png",
  },
  {
    title: "Google Sheets To Airtable, Minus The Data Entry",
    description:
      "Sick of messy spreadsheets? We'll show you how to convert scattered Google Sheets to a single Airtable base with some help from Claude.",
    author: "Matt Jasinski",
    readTime: "X min read",
    link: "/post/convert-sheets-airtable-claude-skill",
    image: "https://cdn.prod.website-files.com/618b2c8275195d098d29c61c/6a67698ab294636783807db7_Blog%20Thumbnail%201c-selection%20(3).png",
  },
  {
    title: "The Difference Between Using AI and Building With AI",
    description:
      "Most people judge AI by one good answer. That's the wrong test. Learn how to turn a single answer into a system that scores your work and improves itself.",
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
  { title: "Services", links: ["XRAY Monthly", "XRAY Hourly", "Content Creation"] },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Assessments"],
  },
];

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
            Book 15 Minutes Free
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
              We deliver AI that works and automations that flow, all while you keep using the tools you know and love. Cut through the noise, expose what’s slowing you down, and fix it once and for all. That’s our promise.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="https://calendly.com/xray/15min"
                className="rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#000]"
              >
                Talk With Us
              </Link>
              <Link
                href="https://quiz.xray.tech/?ref=xraytech&section=hero"
                className="rounded-full border border-[#111827] px-6 py-3 text-sm font-semibold text-[#111827] hover:bg-[#111827] hover:text-white"
              >
                Free Workflow Assessment
              </Link>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-10 hidden lg:block">
          <Image
            src="https://cdn.prod.website-files.com/618802531368e6e30ac8dfe4/695d6966aa508f9e1d57e05b_chat.svg"
            alt=""
            width={320}
            height={320}
          />
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
                We’re experts in best-in-class AI and automation tools serving small and enterprise teams alike. We adopt and stress test emerging tools to keep you on the cutting edge, helping you win the next decade.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
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

      {/* Process Pillars */}
      <section className="bg-[#111827] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Our Process Pillars</h2>
          <p className="mt-4 max-w-2xl text-gray-300">
            At XRAY, we're driven by a core set of principles that guide everything we do:
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, idx) => (
              <div key={pillar.title} className="rounded-2xl bg-white/5 p-6">
                <div className="text-lg font-semibold">{pillar.title}</div>
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
            Whether you’re an entrepreneur or an enterprise-scale team, we can help you streamline your work with transparent hourly and monthly packages.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Hourly */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="text-sm font-semibold text-blue-700">Hourly</div>
              <h3 className="mt-2 text-2xl font-semibold">
                <span className="text-[#111827]">XRAY Hourly is a </span>
                <span className="text-blue-700">Done with You</span>
              </h3>
              <p className="mt-4 text-[#374151]">
                For agile teams, startups, and owner/operators who need expert, hands-on support – right away.
              </p>
              <p className="mt-4 text-[#374151]">
                XRAY Hourly is a <strong>Done with You</strong> model focused on immediate outcomes for maximum efficiency on a tight scope.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#374151]">
                <li><strong>On-demand Support:</strong> Flexible, hourly, as-needed billing with no long-term commitment.</li>
                <li><strong>Collaborative Building:</strong> Work side-by-side with a hand-picked expert on a live, recorded Zoom call.</li>
                <li><strong>Transparent Management:</strong> The client portal has a repository of all your past calls and corresponding transcripts.</li>
              </ul>
              <div className="mt-6 text-3xl font-bold">
                $250<span className="text-lg font-medium text-gray-500">/hr</span>
              </div>
              <Link
                href="/xray-hourly"
                className="mt-4 inline-block rounded-full border border-[#111827] px-5 py-2.5 text-sm font-semibold hover:bg-[#111827] hover:text-white"
              >
                Learn More About XRAY Hourly
              </Link>
            </div>

            {/* Monthly */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="text-sm font-semibold text-blue-700">Monthly</div>
              <h3 className="mt-2 text-2xl font-semibold">
                <span className="text-[#111827]">XRAY Monthly is a </span>
                <span className="text-blue-700">Full Service</span>
              </h3>
              <p className="mt-4 text-[#374151]">
                For complex, cross-departmental projects, we offer full service workflow transformation at scale.
              </p>
              <p className="mt-4 text-[#374827]">
                XRAY Monthly is a <strong>Full Service</strong> model where we own the complete workflow design lifecycle: discovery, design, execution, change management, and maintenance.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#374151]">
                <li><strong>Dedicated Team:</strong> A dedicated executive strategist, workflow consultant, and project manager to build anything from your dream automation system to your executive dashboard.</li>
                <li><strong>Proactive Partnership:</strong> Fixed, monthly billing that includes proactive support at every phase of your project, and quick POCs for all the ideas you come up with along the way.</li>
                <li><strong>Proprietary Tooling:</strong> Access enterprise-grade workflow management tools, automation error monitoring, actionable meeting summaries, and more.</li>
              </ul>
              <div className="mt-6 text-3xl font-bold">
                $15,000<span className="text-lg font-medium text-gray-500">/mo</span>
              </div>
              <Link
                href="/xray-monthly"
                className="mt-4 inline-block rounded-full border border-[#111827] px-5 py-2.5 text-sm font-semibold hover:bg-[#111827] hover:text-white"
              >
                Learn More About XRAY Monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Workshops</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#374151]">
            Intensive Workflow Education on AI & Automation. In-person and remote workshops designed to teach your team how to work in the future. Our workshops are empowering, fun, practical, and will change how your team will work forever.
          </p>
          <p className="mt-4 text-[#374151]">
            Want something custom? We can do that. Let's talk about your team, tooling, and timing.
          </p>
          <Link
            href="/xray-workshops"
            className="mt-6 inline-block rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white hover:bg-[#000]"
          >
            Explore Our Workshops & Workforce Training
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Our Products</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#374151]">
            Solved Workflows, Productized for You. We’ve made these products for ourselves, hundreds of clients, and every builder on the internet, so we mean it when we say our products work.
          </p>
          <p className="mt-2 text-[#374151]">Want to try them out for yourself?</p>
          <p className="font-semibold text-[#111827]">Take a look at our tasting menu:</p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.linkLabel}
                href={product.link}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={200}
                  className="w-full"
                />
                <div className="mt-4 font-medium">{product.title}</div>
                <div className="mt-2 text-sm font-semibold text-blue-700">{product.linkLabel}</div>
              </Link>
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
            Book 15 Minutes Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-2xl font-semibold tracking-tight">Your workflow, but smarter.</h3>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-[#111827]">{group.title}</h4>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-gray-600 hover:text-blue-700">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gray-50 p-8">
            <h4 className="text-lg font-semibold">
              Hear from the humans at XRAY and learn how to get AI and automation working in your workflows.
            </h4>
            <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-sm"
              />
              <button
                type="submit"
                className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">© XRAY Tech, Inc. 2026 - Established 2020</p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com" className="text-sm text-gray-600 hover:text-blue-700">
                LinkedIn
              </Link>
              <Link href="https://www.youtube.com" className="text-sm text-gray-600 hover:text-red-700">
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
