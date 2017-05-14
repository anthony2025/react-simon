import React from 'react'
import styles from './App.css';

import {REPOSITORY} from 'src/utils/constants'

import GithubCorner from 'src/GithubCorner'
import Game from 'src/Game'
import Footer from 'src/Footer'

export default function App () {
  return (
    <div className={styles.app}>
      <GithubCorner
        repository={REPOSITORY}
        bgColor='white'
        mainColor='#9F0F17'
      />
      <Game />
      <Footer />
    </div>
  )
}
