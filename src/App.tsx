import React from 'react'
import styles from './App.module.css'
import Container from './components/container'
import JSONDiffEditor from './components/DiffEditor'
import MonacoEditor from './components/MonacoEditor'

function App() {
  return (
    <div className={styles.main}>
      <Container classNames={styles.root}>
        <Container classNames={styles.header}>this is header</Container>
        <Container classNames={styles.content}>
          <Container>
            <MonacoEditor />
          </Container>
          <Container>
            <MonacoEditor />
          </Container>
        </Container>
        <Container classNames={styles.footer}>this is footer</Container>
      </Container>
    </div>
  )
}

export default App
