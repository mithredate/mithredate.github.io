import contentData from '@/content.json'

export function loadMetaTags() {
  // Update title
  const titleElement = document.getElementById('page-title')
  if (titleElement) {
    titleElement.textContent = contentData.meta.title
  }

  // Update meta tags
  const updateMetaTag = (id, content) => {
    const element = document.getElementById(id)
    if (element) {
      element.setAttribute('content', content)
    }
  }

  updateMetaTag('meta-description', contentData.meta.description)
  updateMetaTag('meta-keywords', contentData.meta.keywords)
  updateMetaTag('meta-author', contentData.meta.author)
  updateMetaTag('og-title', contentData.meta.ogTitle)
  updateMetaTag('og-description', contentData.meta.ogDescription)
  updateMetaTag('twitter-title', contentData.meta.twitterTitle)
  updateMetaTag('twitter-description', contentData.meta.twitterDescription)
}

export default contentData