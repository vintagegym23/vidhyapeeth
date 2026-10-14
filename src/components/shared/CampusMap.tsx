import { MAPS_EMBED_URL } from '../../data/contact'

export default function CampusMap({ className = '' }: { className?: string }) {
  return (
    <iframe
      src={MAPS_EMBED_URL}
      title="Map showing the Vidhyapeeth Karimnagar campus"
      className={`block w-full border-0 ${className}`}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  )
}
