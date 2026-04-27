import type { ReactNode } from 'react'

export type TechnicalArsenalProps = Record<string, never>

export type ArsenalAccent = 'purple' | 'cyan' | 'pink'

export type MeterPercent = 95 | 92 | 88

export type ArsenalCardProps = {
  title: string
  description: string
  meterLabel: string
  meterValue: string
  meterPercent: MeterPercent
  accent: ArsenalAccent
  icon: ReactNode
}

