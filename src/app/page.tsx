"use client"

import styles from './page.module.scss'
import Teaser from "@santosch/components/Teaser/Teaser";
import Vita from "@santosch/components/Vita/Vita";
import CoursesAndAchievements from "@santosch/components/CoursesAndAchievements/CoursesAndAchievements";
import Skills from "@santosch/components/Skills/Skills";
import Contact from "@santosch/components/Contact/Contact";
import Navigation from "@santosch/components/Navigation/Navigation";
import ObservedArea from "@santosch/components/ScrollObserver/ObservedArea/ObservedArea";
import ScrollObserver from "@santosch/components/ScrollObserver/ScrollObserver";
import Hero from "@santosch/components/Hero/Hero";
import Headline from "@santosch/components/Headline/Headline";
import {backendSkills, frontendSkills, toolSkills} from "@santosch/data/skills";

export default function Home() {
    return (
        <>
            <ScrollObserver>
                <Hero>
                    {(open, setOpen) => (
                        <Navigation
                            open={open}
                            setOpen={setOpen}
                            entries={[
                                {id: 'skills', label: 'Skills'},
                                {id: 'vita', label: 'Vita'},
                                {id: 'trainings', label: 'Trainings & Achievements'},
                                {id: 'contact', label: 'Kontakt'},
                            ]}
                        />
                    )}
                </Hero>

                <section className={styles.dummy}>
                    <div className={styles.dummyInner} />
                </section>

                <ObservedArea id="skills">
                    <section>
                        <Skills
                            title="Frontend"
                            categories={frontendSkills}
                        />
                    </section>
                    <div className={styles.dark}>
                        <section>
                            <Skills
                                title="Backend"
                                categories={backendSkills}
                                dark={true}
                            />
                        </section>
                    </div>
                    <section>
                        <Skills
                            title="Tools"
                            categories={toolSkills}
                        />
                    </section>
                </ObservedArea>

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

                <ObservedArea id="vita">
                    <section>
                        <Vita
                            headlineProfessional={(
                                <Headline>Beruflicher Werdegang</Headline>
                            )}
                            headlineSchool={(
                                <Headline>Schulische Ausbildung</Headline>
                            )}
                        />
                    </section>
                </ObservedArea>

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

                <ObservedArea id="trainings">
                    <section>
                        <CoursesAndAchievements/>
                    </section>
                </ObservedArea>

                <ObservedArea id="contact">
                    <Contact />
                </ObservedArea>

            </ScrollObserver>
        </>
    )
}
