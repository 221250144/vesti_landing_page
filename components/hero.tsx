"use client"

import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { messages } from "@/lib/i18n"
import { assetPath, marketingLinks } from "@/lib/marketing-config"

export function Hero() {
  const { locale } = useLanguage()
  const copy = messages[locale].hero

  return (
    <section className="px-6 pb-14 pt-16 md:px-8 md:pb-16 md:pt-20">
      <div className="page-shell">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="section-kicker">{copy.kicker}</p>
          <h1 className={`mt-4 text-balance font-semibold leading-[1.02] tracking-[-0.07em] text-text-primary ${locale === "zh" ? "text-[clamp(2.35rem,6vw,5.2rem)]" : "text-[clamp(2.8rem,6vw,5.2rem)]"}`}>
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[38ch] text-balance text-[1.05rem] leading-7 text-text-secondary">
            {copy.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#download" className="lovable-button-primary min-w-[148px] gap-2">
              {copy.primary}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#demo" className="lovable-button-secondary min-w-[148px] gap-2">
              <Play className="h-4 w-4" />
              {copy.secondary}
            </a>
          </div>
        </div>

        <div className="mt-10 lovable-media-frame p-3 md:mt-12 md:p-4">
          <div className="mb-3 flex items-center justify-between rounded-xl border border-border-subtle bg-[rgba(252,251,248,0.9)] px-4 py-3">
            <p className="text-sm font-medium text-text-primary">{copy.library}</p>
            <p className="text-sm text-text-tertiary">{copy.libraryHint}</p>
          </div>
          <Image
            src={assetPath(marketingLinks.libraryScreenshotUrl)}
            alt={copy.imageAlt}
            width={1388}
            height={868}
            className="w-full rounded-[1.1rem] border border-border-subtle"
            priority
          />
        </div>
      </div>
    </section>
  )
}
