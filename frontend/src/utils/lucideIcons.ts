import {
  Box,
  Cloud,
  Database,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export type LucideIconId =
  | 'Layers'
  | 'GitBranch'
  | 'Cloud'
  | 'Lock'
  | 'Box'
  | 'Globe'
  | 'Database'
  | 'Shield'
  | 'Zap'

const iconMap: Record<LucideIconId, LucideIcon> = {
  Layers,
  GitBranch,
  Cloud,
  Lock,
  Box,
  Globe,
  Database,
  Shield,
  Zap,
}

export function getLucideIcon(id: LucideIconId): LucideIcon {
  return iconMap[id]
}
