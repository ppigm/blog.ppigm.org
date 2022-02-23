import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="https://www.ppigm.org" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>PPI Greater Manchester</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          All Entries
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
