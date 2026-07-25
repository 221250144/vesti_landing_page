import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DemoVideo } from "@/components/demo-video"
import { NewsSection } from "@/components/news-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoVideo />
        <NewsSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
