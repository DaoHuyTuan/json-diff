import React from 'react'
import styles from './App.module.css'
import Container from './components/Container'
import JSONDiffEditor from './components/DiffEditor'
import Footer from './components/Footer'
import Header from './components/Header'
import MonacoEditor from './components/MonacoEditor'

function App() {
  return (
    <div className={styles.main}>
      <Container classNames={styles.root}>
        <Header />
        <Container classNames={styles.content}>
          <Container>
            <MonacoEditor />
          </Container>
          <Container>
            <MonacoEditor />
          </Container>
        </Container>
        <Footer />
      </Container>
    </div>
  )
}

export default App
