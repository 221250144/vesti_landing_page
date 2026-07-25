import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { assetPath } from "@/lib/marketing-config"
import { newsArticles } from "@/lib/news"

export const metadata: Metadata = {
  title: "News — Vesti",
  description: "Vesti 产品更新、发布报道与团队动态。",
}

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 pb-20 pt-16 md:px-8 md:pb-24 md:pt-20">
        <div className="page-shell">
          <header className="max-w-[760px]">
            <p className="section-kicker">Vesti News</p>
            <h1 className="mt-4 text-balance text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.07em] text-text-primary">
              Product notes, releases, and ideas.
            </h1>
            <p className="mt-5 max-w-[42ch] text-base leading-7 text-text-secondary">
              记录 Vesti 的每一次发布，以及我们如何让 AI 对话成为可以长期积累的知识。
            </p>
          </header>

          <section className="mt-12 border-t border-border-subtle pt-8 md:mt-16 md:pt-10">
            {newsArticles.map((article) => (
              <Link
                key={article.slug}
                href={article.href}
                className="lovable-panel group grid overflow-hidden md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="border-b border-border-subtle bg-[rgba(255,255,255,0.45)] p-3 md:border-b-0 md:border-r md:p-4">
                  <Image
                    src={assetPath(article.cover)}
                    alt="Vesti 0.3.0 工作概览"
                    width={1653}
                    height={1078}
                    priority
                    className="h-full min-h-[260px] w-full rounded-xl border border-border-subtle object-cover object-left-top"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-9 lg:p-12">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-text-tertiary">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime="2026-07-23">{article.date}</time>
                  </div>
                  <h2 className="mt-5 text-balance text-[clamp(1.8rem,3.5vw,3rem)] font-semibold leading-[1.12] tracking-[-0.05em] text-text-primary">
                    {article.title}
                  </h2>
                  <p className="mt-4 max-w-[48ch] text-base leading-7 text-text-secondary">
                    {article.summary}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-text-primary">
                    Read announcement
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
