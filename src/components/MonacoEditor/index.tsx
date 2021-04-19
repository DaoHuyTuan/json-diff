import React, { useRef } from 'react'
import Editor from '@monaco-editor/react'

const MonacoEditor = () => {
  let editorRef = useRef<any>(null)

  const handleEditorDidMount = (editor: Object, monaco: Object) => {
    if (editorRef && editorRef.current) {
      editorRef.current = editor
    }
  }
  return (
    <Editor
      height='100%'
      defaultLanguage='json'
      defaultValue='{"name": "hello"}'
      onMount={handleEditorDidMount}
      theme='vs-dark'
    />
  )
}
export default MonacoEditor
