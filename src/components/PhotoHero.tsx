import { cn } from '../lib/utils'
import { heroPhotos, photoAttributions } from '../data/visuals'

type HeroKey = keyof typeof heroPhotos

export function PhotoHero({
  kind,
  title,
  subtitle,
  emoji,
}: {
  kind: HeroKey
  title: string
  subtitle?: string
  emoji?: string
}) {
  const photoId = heroPhotos[kind]
  const photo = photoAttributions.find((p) => p.id === photoId)

  return (
    <div className="relative overflow-hidden rounded-lg border bg-card shadow-soft">
      {photo ? (
        <img
          src={photo.url}
          alt={photo.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      <div
        className={cn(
          'absolute inset-0',
          'bg-gradient-to-b from-black/10 via-black/30 to-black/60',
        )}
      />

      <div className="relative p-4 md:p-5">
        <div className="text-xs font-semibold tracking-wide text-white/80">
          {emoji ? <span className="mr-2">{emoji}</span> : null}
          Umwelt Interview Study Hub
        </div>
        <div className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">{title}</div>
        {subtitle ? <div className="mt-1 text-sm text-white/80">{subtitle}</div> : null}
        {photo ? (
          <div className="mt-3 text-[11px] text-white/70">
            Photo:{" "}
            <a className="underline" href={photo.photographerUrl} target="_blank" rel="noreferrer">
              {photo.photographer}
            </a>{" "}
            (Unsplash)
          </div>
        ) : null}
      </div>
    </div>
  )
}

