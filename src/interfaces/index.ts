export interface DiffEditorProps {
  height?: string
  defaultLanguage?: string
  original?: string
  modified?: string
  onMount?: (editor?: object, monaco?: object) => void
}

export interface MonacoEditorProps {}
export interface ContainerProps {
  classNames?: any
  children: React.ReactNode
}
