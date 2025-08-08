'use client';

import Link from "next/link";
import styles from './Header.module.css';

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>Aktivitetskollen</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/aktiviteter"> Aktiviteter</Link>
        </nav>
      </div>
    </header>
  )
}