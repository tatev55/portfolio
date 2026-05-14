export type ProjectStackFilter = 'react' | 'javascript' | 'typescript' | 'htmlCss'

export type FeaturedProject = {
  id: string
  title: string
  tags: string[]
  demoUrl: string
  /** Present when the repository is public */
  repoUrl?: string
  isRepoPrivate: boolean
  stackFilters: ProjectStackFilter[]
  isGroupProject?: boolean
  /** Overrides capture path (e.g. `/captures/custom-name.png`); on error the SVG thumb is used. */
  thumbSrc?: string
}

/** Default screenshot path — files under `public/captures/{id}.png`. */
export const projectCapturePath = (id: string): string => `/captures/${id}.png`

export const projectThumbSvgPath = (id: string): string => `/projects/thumbs/${id}.svg`

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'movies',
    title: 'Movies',
    tags: ['REACT', 'REDUX', 'VITE', 'MUI', 'REACT ROUTER'],
    demoUrl: 'https://tatev55.github.io/Movies-project/',
    repoUrl: 'https://github.com/tatev55/Movies-project',
    isRepoPrivate: false,
    stackFilters: ['react', 'javascript'],
  },
  {
    id: 'dayana-jewelry',
    title: 'Dayana jewelry',
    tags: ['REACT', 'TYPESCRIPT', 'REACT ROUTER'],
    demoUrl: 'https://jewelry-ivory.vercel.app/',
    isRepoPrivate: true,
    stackFilters: ['react', 'typescript'],
  },
  {
    id: 'game-x-o',
    title: 'Game X / O',
    tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    demoUrl: 'https://game-x-o-two.vercel.app/',
    isRepoPrivate: true,
    stackFilters: ['htmlCss', 'javascript'],
  },
  {
    id: 'women-secret',
    title: 'Women secret',
    tags: ['REACT', 'TYPESCRIPT', 'REDUX TOOLKIT', 'I18N', 'REACT ROUTER'],
    demoUrl: 'https://womensecret.vercel.app/',
    isRepoPrivate: true,
    stackFilters: ['react', 'typescript'],
    isGroupProject: true,
  },
  {
    id: 'milk-fantasy',
    title: 'Milk-Fantasy',
    tags: ['REACT', 'TYPESCRIPT', 'I18N'],
    demoUrl: 'https://milk-fantast.vercel.app/',
    isRepoPrivate: true,
    stackFilters: ['react', 'typescript'],
  },
  {
    id: 'meals',
    title: 'Meals',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'REST API'],
    demoUrl: 'https://meals-gw5ngp3tp-tatev55s-projects.vercel.app/',
    isRepoPrivate: true,
    stackFilters: ['react', 'typescript'],
  },
  {
    id: 'memory-game',
    title: 'Memory Game',
    tags: ['REACT', 'JAVASCRIPT'],
    demoUrl: 'https://tatev55.github.io/memory_game/',
    repoUrl: 'https://github.com/tatev55/memory_game',
    isRepoPrivate: false,
    stackFilters: ['react', 'javascript'],
  },
]

export const projectStackFilterIds: ProjectStackFilter[] = [
  'react',
  'javascript',
  'typescript',
  'htmlCss',
]
