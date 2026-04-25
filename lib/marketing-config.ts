export const marketingLinks = {
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo?utm_source=item-share-cb",
  githubRepoUrl: "https://github.com/abraxas914/VESTI",
  manualZipUrl:
    "https://vesti-landing-page0211.vercel.app/Vesti_MVP_v1.2.0-rc.8-b7cf816-2026-03-19.zip",
  demoVideoUrl:
    "https://vesti-landing-page0211.vercel.app/demo-vesti-0319.mp4",
  libraryScreenshotUrl: "/library.png",
} as const

export function getPrimaryInstallHref(fallback = "#download"): string {
  return marketingLinks.chromeStoreUrl === "#" ? fallback : marketingLinks.chromeStoreUrl
}

export function isExternalPrimaryInstall(): boolean {
  return marketingLinks.chromeStoreUrl !== "#"
}
