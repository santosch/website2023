import styles from './page.module.scss'
import Teaser from "@santosch/components/Teaser/Teaser";
import VitaGraph from "@santosch/components/VitaGraph/VitaGraph";

export default function Home() {
  return (
      <>
        <Teaser />
        <main className={styles.main}>
          <h1 className={styles.test}>
            Hello World
          </h1>
            <VitaGraph />
        </main>
      </>
  )
}
