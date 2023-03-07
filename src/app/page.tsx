import styles from './page.module.scss'
import Teaser from "@santosch/components/Teaser/Teaser";
import Vita from "@santosch/components/Vita/Vita";
import CoursesAndAchievements from "@santosch/components/CoursesAndAchievements/CoursesAndAchievements";

export default function Home() {
  return (
      <>
        <Teaser />
        <main className={styles.main}>
            <Vita />
            <CoursesAndAchievements />
        </main>
      </>
  )
}
