import styles from './styles.module.css'
import type { FC } from 'react'
import { Hero } from './components/Hero'
import { LuminaryAI } from './components/LuminaryAI'
import { MeetMyVirtualSelf } from './components/MeetMyVirtualSelf'
import { TechnicalArsenal } from './components/TechnicalArsenal'
import type { HomePageProps } from './types'

export const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <MeetMyVirtualSelf />
      <LuminaryAI />
      <TechnicalArsenal />
    </div>
  )
}

