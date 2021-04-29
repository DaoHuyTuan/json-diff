import { ElementProps } from '../Element/interfaces'

interface Options {}

export interface ButtonProps extends Omit<ElementProps, 'children'> {
  label?: string
  options?: Options
  children: React.ReactNode
  onClick: () => void
}
