import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Välkommen till Aktivitetskollen</h1>
        <p className={styles.subtitle}>Hitta roliga aktiviteter för barn och unga i din närhet.</p>
        <div className={styles.ctas}>
          <Link href="/aktiviteter" className="primary">
            Sök aktiviteter
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Aktivitetskollen</p>
      </footer>
    </div>
  );
}
