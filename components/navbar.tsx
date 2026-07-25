"use client"

import Image from "next/image"
import { Languages } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { messages } from "@/lib/i18n"
import { assetPath, marketingLinks } from "@/lib/marketing-config"

export function Navbar() {
  const { locale, toggleLocale } = useLanguage()
  const copy = messages[locale].nav

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle/80 bg-[rgba(247,244,237,0.82)] backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between px-6 md:px-8">
        <a href={assetPath("/")} className="flex items-center gap-3">
          <Image src={assetPath("/logo.svg")} alt="Vesti logo" width={28} height={28} className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-text-primary">Vesti</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <a href={assetPath("/#download")} className="text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary">
            {copy.products}
          </a>
          <a href={assetPath("/#features")} className="text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary">
            {copy.features}
          </a>
          <a href={assetPath("/#demo")} className="text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary">
            {copy.demo}
          </a>
          <a
            href={assetPath("/news")}
            className="text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"
          >
            News
          </a>
          <a
            href={marketingLinks.appRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary transition-colors duration-150 hover:text-text-primary"
          >
            {copy.github}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            className="lovable-button-secondary h-10 gap-1.5 px-3 py-0 text-[12px]"
            aria-label={copy.switchLanguage}
            title={copy.switchLanguage}
          >
            <Languages className="h-3.5 w-3.5" />
            {locale === "zh" ? "EN" : "中"}
          </button>
          <a href={assetPath("/#download")} className="lovable-button-secondary hidden px-4 py-2.5 text-[13px] sm:inline-flex">
            {copy.install}
          </a>
        </div>
      </div>
    </nav>
  )
}
