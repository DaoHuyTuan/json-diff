export interface DiffEditorProps {
  height?: string
  defaultLanguage?: string
  original?: string
  modified?: string
  onMount?: (editor?: object, monaco?: object) => void
}

export interface RefObject<T> {
  readonly current: T | null
}
