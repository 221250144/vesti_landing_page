import releaseArticleContent from "@/content/news/vesti-0-3-0.json"

export { releaseArticleContent }

export const releaseArticle = {
  slug: releaseArticleContent.slug,
  href: `/news/${releaseArticleContent.slug}`,
  version: releaseArticleContent.version,
  date: releaseArticleContent.date,
  category: releaseArticleContent.category,
  title: releaseArticleContent.title,
  summary: releaseArticleContent.summary,
  cover: releaseArticleContent.coverImage.src,
} as const

export const newsArticles = [releaseArticle] as const
