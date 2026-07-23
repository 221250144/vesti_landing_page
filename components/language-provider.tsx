"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

import type { Locale } from "@/lib/i18n"

const STORAGE_KEY = "vesti-site-locale"
const LanguageContext = createContext<{
  locale: Locale
  toggleLocale: () => void
} | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh")

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    const detected: Locale = window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en"
    setLocale(saved === "zh" || saved === "en" ? saved : detected)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en"
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo(
    () => ({ locale, toggleLocale: () => setLocale((current) => (current === "zh" ? "en" : "zh")) }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
  return context
}
