import React from 'react'
import styles from './App.css'

import {REPOSITORY} from 'src/store/constants'

import GithubCorner from 'src/components/GithubCorner/GithubCorner'
import Board from 'src/components/Board/Board'
import Footer from 'src/components/Footer/Footer'

export default function App () {
  return (
    <div className={styles.app}>
      <GithubCorner
        repository={REPOSITORY}
        bgColor="white"
        mainColor="#9F0F17"
      />
      <Board />
      <Footer />
    </div>
  )
}
