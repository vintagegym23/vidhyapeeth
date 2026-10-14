import { useEffect } from 'react'

/** Sets the document title and meta description while a page is shown, restoring the site defaults after. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const created = !meta
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    const previousDescription = meta.content

    document.title = title
    meta.content = description

    return () => {
      document.title = previousTitle
      if (created) meta.remove()
      else meta.content = previousDescription
    }
  }, [title, description])
}
