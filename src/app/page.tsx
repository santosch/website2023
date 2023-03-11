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
                        HTML: 85,
                        ['(S)CSS']: 85,
                        JS: 95,
                        React: 92,
                        Redux: 87,
                        NextJS: 35,
                        Webpack: 60,
                        jQuery: 80,
                        KnockoutJS: 85,
                    }}
                />
            </main>
            <div className={styles.dark}>
                <main className={styles.main}>
                    <Skills
                        title="Backend"
                        categories={{
                            PHP: 80,
                            PHPUnit: 70,
                            MySQL: 35,
                            Laminas: 75,
                            TYPO3: 60,
                            Joomla: 55,
                            Kirby: 60,
                            NextJS: 35,
                            NodeJS: 45,
                        }}
                        dark={true}
                    />
                </main>
            </div>
            <main className={styles.main}>
                <Skills
                    title="Tools"
                    categories={{
                        Git: 85,
                        PHPStorm: 85,
                        Bitbucket: 80,
                        Jira: 70,
                        Confluence: 65,
                        Bamboo: 65,
                        Illustrator: 40,
                        Photoshop: 65,
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
