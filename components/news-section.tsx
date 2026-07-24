import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { assetPath } from "@/lib/marketing-config"
import { releaseArticle } from "@/lib/news"

export function NewsSection() {
  return (
    <section id="news" className="scroll-mt-24 px-6 py-12 md:px-8 md:py-14">
      <div className="page-shell">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="section-kicker">News</p>
            <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
              What&apos;s new at Vesti.
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:inline-flex"
          >
            All news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Link
          href={releaseArticle.href}
          className="lovable-panel group grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-text-tertiary">
                <span>{releaseArticle.category}</span>
                <span aria-hidden="true">·</span>
                <time dateTime="2026-07-23">{releaseArticle.date}</time>
              </div>
              <h3 className="mt-5 max-w-[14ch] text-balance text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] text-text-primary">
                Vesti {releaseArticle.version}，正式发布。
              </h3>
              <p className="mt-5 max-w-[42ch] text-base leading-7 text-text-secondary">
                {releaseArticle.summary}
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-text-primary">
              阅读发布报道
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          <div className="border-t border-border-subtle bg-[rgba(255,255,255,0.45)] p-3 md:border-l md:border-t-0 md:p-4">
            <Image
              src={assetPath(releaseArticle.cover)}
              alt="Vesti 0.3.0 工作概览"
              width={1653}
              height={1078}
              className="h-full min-h-[280px] w-full rounded-xl border border-border-subtle object-cover object-left-top"
            />
          </div>
        </Link>
      </div>
    </section>
  )
}
