const linuxAppDownloadUrl =
  "https://box.nju.edu.cn/seafhttp/f/31fb1e4032fc4814a783/?op=view"
const windowsAppDownloadUrl =
  "https://box.nju.edu.cn/seafhttp/f/0fbfd50b8ee34f92b66f/?op=view"
const extensionDownloadUrl =
  "https://box.nju.edu.cn/seafhttp/f/8103dc3087cf45c699aa/?op=view"

export const marketingLinks = {
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/ofbdkflponkdfpdipfikdchepngakblo?utm_source=item-share-cb",
  extensionRepoUrl: "https://github.com/221250144/VESTI",
  extensionDownloadUrl,
  appRepoUrl: "https://github.com/221250144/VESTI-APP",
  appDownloads: {
    windows: windowsAppDownloadUrl,
    macos: null,
    linux: linuxAppDownloadUrl,
  },
  cliRepoUrl: "https://github.com/firefly-hefeng/VESTI-CLI",
  demoVideoUrl:
    "https://vesti-landing-page0211.vercel.app/demo-vesti-0319.mp4",
  libraryScreenshotUrl: "/library.png",
} as const

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function assetPath(path: string): string {
  return path.startsWith("/") ? `${siteBasePath}${path}` : path
}

export function getPrimaryInstallHref(fallback = "#download"): string {
  const chromeStoreUrl: string = marketingLinks.chromeStoreUrl
  return chromeStoreUrl === "#" ? fallback : chromeStoreUrl
}

export function isExternalPrimaryInstall(): boolean {
  const chromeStoreUrl: string = marketingLinks.chromeStoreUrl
  return chromeStoreUrl !== "#"
}
