import React, { useRef } from 'react'
import { DiffEditor } from '@monaco-editor/react'
import { DiffEditorProps } from '../../interfaces/index'
const JSONDiffEditor: React.FC<DiffEditorProps> = props => {
  // let diffEditorRef = useRef<HTMLElement | null>(null)
  const handleEditorDidMount = (editor: Object, monaco: Object) => {
    // diffEditorRef.current = editor
  }
  return (
    <DiffEditor
      height='100%'
      language='json'
      onMount={handleEditorDidMount}
      original='// the original code'
      modified='// the modified code'
      theme='vs-dark'
    />
  )
}
export default JSONDiffEditor
