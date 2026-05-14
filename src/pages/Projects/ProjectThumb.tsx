import type { FC } from 'react'
import { useState } from 'react'
import {
  projectCapturePath,
  projectThumbSvgPath,
  type FeaturedProject,
} from '../../content/featuredProjects'

type ProjectThumbProps = {
  project: FeaturedProject
  className?: string
}

export const ProjectThumb: FC<ProjectThumbProps> = ({ project: p, className }) => {
  const svg = projectThumbSvgPath(p.id)
  const [src, setSrc] = useState(() => p.thumbSrc ?? projectCapturePath(p.id))

  return (
    <img
      src={src}
      alt=""
      className={className}
      width={800}
      height={450}
      loading="lazy"
      decoding="async"
      onError={() => setSrc((current) => (current === svg ? current : svg))}
    />
  )
}
