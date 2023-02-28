import styles from './page.module.scss'
import Teaser from "@santosch/components/Teaser/Teaser";
import VitaGraph from "@santosch/components/VitaGraph/VitaGraph";
import Vita from "@santosch/components/Vita/Vita";

export default function Home() {
  return (
      <>
        <Teaser />
        <main className={styles.main}>
            <Vita />
            <VitaGraph />
        </main>
      </>
  )
}
