import styles from './page.module.scss'
import Teaser from "@santosch/components/Teaser/Teaser";
import Vita from "@santosch/components/Vita/Vita";
import CoursesAndAchievements from "@santosch/components/CoursesAndAchievements/CoursesAndAchievements";
import Skills from "@santosch/components/Skills/Skills";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Skills
                    title="Frontend"
                    categories={{
                        HTML: 90,
                        CSS: 90,
                        JS: 90,
                        React: 88,
                        Redux: 79,
                        NextJS: 35,
                        jQuery: 91,
                        KnockoutJS: 89,
                    }}
                />
            </main>
            <Teaser
                videoKey="buttons"
                quote={
                    <>
                        Real quality means making sure that people are proud of the code they write,
                        that they&apos;re involved and taking it personally.
                    </>
                }
                author="Linus Torvalds, 2008"
            />
            <main className={styles.main}>
                <Vita/>
            </main>
            <Teaser
                videoKey="typing"
                quote={
                    <>
                        In software development, “perfect” is a verb, not an adjective.
                        There is no perfect process. There is no perfect design. There are no perfect stories.
                        You can, however, perfect your process, your design, and your stories.
                    </>
                }
                author="Kent Beck, 2004"
            />
            <main className={styles.main}>
                <CoursesAndAchievements/>
            </main>
        </>
    )
}
