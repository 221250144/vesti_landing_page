"use client"

import { useLanguage } from "@/components/language-provider"
import { messages } from "@/lib/i18n"
import { assetPath, marketingLinks } from "@/lib/marketing-config"

export function DemoVideo() {
  const { locale } = useLanguage()
  const copy = messages[locale].demo

  return (
    <section id="demo" className="scroll-mt-24 px-6 py-12 md:px-8 md:py-14">
      <div className="page-shell">
        <div className="mx-auto mb-8 max-w-[620px] text-center">
          <p className="section-kicker">{copy.kicker}</p>
          <h2 className="mt-4 text-balance text-[clamp(2.1rem,4.5vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.06em] text-text-primary">
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[38ch] text-balance text-base leading-7 text-text-secondary">{copy.description}</p>
        </div>

        <div className="lovable-media-frame p-3 md:p-4">
          <video
            className="aspect-video w-full rounded-[1.1rem] border border-border-subtle"
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="metadata"
            poster={assetPath("/library.png")}
          >
            <source src={marketingLinks.demoVideoUrl} type="video/mp4" />
            {copy.fallback}
          </video>
        </div>
      </div>
    </section>
  )
}
