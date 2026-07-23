"use client"

import { BarChart3, Lock, RadioTower, Search } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { messages } from "@/lib/i18n"

const icons = [RadioTower, Search, Lock, BarChart3]

export function Features() {
  const { locale } = useLanguage()
  const copy = messages[locale].features

  return (
    <section id="features" className="scroll-mt-24 px-6 py-12 md:px-8 md:py-14">
      <div className="page-shell">
        <div className="mx-auto mb-8 max-w-[620px] text-center">
          <p className="section-kicker">{copy.kicker}</p>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.6rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
            {copy.title}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.items.map((feature, index) => {
            const Icon = icons[index]
            return (
              <article key={feature.title} className="lovable-card p-6">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.92)]">
                  <Icon className="h-4 w-4 text-text-primary" />
                </div>
                <h3 className="text-[1.15rem] font-medium leading-7 tracking-[-0.03em] text-text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
