import React from "react"

import styles from './layout.module.css'

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <h1>Steve Worley</h1>
      <p>Decoupled blog with Gatsby+Drupal</p>
    </div>
    <div className={styles.layoutContainer}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  </div>
)