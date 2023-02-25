import styles from './page.module.scss'
import Teaser from "@santosch/components/Teaser/Teaser";

export default function Home() {
  return (
      <>
        <Teaser />
        <main className={styles.main}>
          <h1 className={styles.test}>
            Hello World
          </h1>
        </main>
      </>
  )
}
