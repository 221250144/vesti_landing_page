import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import {
  assetPath,
  getPrimaryInstallHref,
  isExternalPrimaryInstall,
} from "@/lib/marketing-config"
import { releaseArticle, releaseArticleContent } from "@/lib/news"

export const metadata: Metadata = {
  title: releaseArticle.title,
  description: releaseArticle.summary,
  openGraph: {
    title: releaseArticle.title,
    description: releaseArticle.summary,
    images: [assetPath(releaseArticle.cover)],
  },
}

function Screenshot({
  src,
  alt,
  label,
  caption,
  priority = false,
}: {
  src: string
  alt: string
  label: string
  caption: string
  priority?: boolean
}) {
  return (
    <figure className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface shadow-[0_16px_48px_rgba(28,28,28,0.06)]">
        <div className="border-b border-border-subtle px-4 py-3 text-right font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-tertiary">
          {label}
        </div>
        <Image
          src={assetPath(src)}
          alt={alt}
          width={1653}
          height={1078}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs leading-6 text-text-tertiary">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function ReleaseArticlePage() {
  const installHref = getPrimaryInstallHref()
  const isExternal = isExternalPrimaryInstall()
  const article = releaseArticleContent

  return (
    <>
      <Navbar />
      <main>
        <article>
          <header className="px-6 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
            <div className="mx-auto max-w-[960px]">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                All news
              </Link>

              <div className="mx-auto mt-14 max-w-[780px] text-center">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-vesti-accent">
                  New release · Version {article.version}
                </p>
                <h1 className="mt-5 text-balance text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[1.02] tracking-[-0.075em] text-text-primary">
                  {article.headline}
                </h1>
                <p className="mx-auto mt-6 max-w-[620px] text-balance text-[1.05rem] leading-8 text-text-secondary">
                  {article.lead}
                </p>
                <div className="mt-7 flex items-center justify-center gap-3 text-xs text-text-tertiary">
                  <span>{article.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={article.dateIso}>{article.date}</time>
                </div>
              </div>

              <Screenshot
                {...article.coverImage}
                priority
              />
            </div>
          </header>

          <section className="bg-text-primary px-6 py-14 text-white md:px-8 md:py-16">
            <div className="mx-auto max-w-[960px]">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-300">
                {article.highlightsKicker}
              </p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight tracking-[-0.055em]">
                {article.highlightsTitle}
              </h2>
              <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2">
                {article.highlights.map((highlight) => (
                  <div key={highlight.number} className="bg-[#1c1c1c] p-6 md:p-7">
                    <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-blue-300">
                      {highlight.number}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-[720px] rounded-2xl border border-border-subtle bg-[rgba(252,251,248,0.9)] p-6 md:p-9">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-vesti-accent">
                {article.intro.kicker}
              </p>
              {article.intro.paragraphs.map((paragraph, index) => (
                <p
                  key={`${index}-${paragraph}`}
                  className={`${index === 0 ? "mt-5" : "mt-4"} text-base leading-8 text-text-secondary`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {article.sections.map((section) => (
            <section
              key={section.number}
              className="border-t border-border-subtle px-6 py-16 md:px-8 md:py-24"
            >
              <div className="mx-auto max-w-[880px]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-vesti-accent">
                  {section.number} · {section.kicker}
                </p>
                <h2 className="mt-4 max-w-[17ch] text-balance text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-text-primary">
                  {section.title}
                </h2>

                <div className="mt-7 max-w-[700px]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <ul className="mt-7 max-w-[700px] space-y-3 rounded-r-2xl border-l-2 border-vesti-accent bg-blue-50/70 px-5 py-4 text-sm leading-7 text-text-primary">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-vesti-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {section.images.map((image) => (
                  <Screenshot key={image.src} {...image} />
                ))}
              </div>
            </section>
          ))}

          <section className="bg-text-primary px-6 py-20 text-center text-white md:px-8 md:py-24">
            <blockquote className="mx-auto max-w-[780px] text-balance text-[clamp(1.8rem,4vw,3.4rem)] font-semibold leading-[1.35] tracking-[-0.045em]">
              “{article.quote.text}”
            </blockquote>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-white/55">{article.quote.byline}</p>
          </section>

          <section className="px-6 py-20 text-center md:px-8 md:py-24">
            <div className="mx-auto max-w-[680px]">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-vesti-accent">
                {article.closing.kicker}
              </p>
              <h2 className="mt-4 text-balance text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-text-primary">
                {article.closing.title}
              </h2>
              <p className="mx-auto mt-6 max-w-[560px] text-base leading-8 text-text-secondary">
                {article.closing.body}
              </p>
              <a
                href={installHref}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="lovable-button-primary mt-8 gap-2"
              >
                {article.closing.buttonLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}
