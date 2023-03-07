"use client";

import styles from './CoursesAndAchievements.module.scss'
import Entry from "@santosch/components/Graph/Entry/Entry";
import Graph from "@santosch/components/Graph/Graph";
import Line from "@santosch/components/Graph/Line/Line";
import {COLORS} from './coursesAndAchievementsColors';



export default function CoursesAndAchievements(): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Graph>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} event="soft" />}
                    >
                        <h2 className={styles.headline}>
                            Weiterbildung
                        </h2>
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.SOFTSKILL} />}
                        s2={<Line bl={COLORS.SOFTSKILL} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-radical-candor" />}
                    >
                        Radical candor 2023
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.SOFTSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line bl={COLORS.ACHIEVEMENT} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} />}
                        s3={<Line color={COLORS.ACHIEVEMENT} event="achievement-feature-challenge" />}
                    >
                        Recruiting 2022
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.SOFTSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line tl={COLORS.ACHIEVEMENT} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-recruiting" />}
                    >
                        Intercultural 2022
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-intercultural" />}
                    >
                        FK Programm 2022
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-fk-programm" />}
                    >
                        FK basis 2021
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-fk-basis" />}
                    >
                        Insights 2021
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-insights" />}
                    >
                        Konflikte 2020
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-conflicts" />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.SOFTSKILL} />}
                        s2={<Line tl={COLORS.SOFTSKILL} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} event="hard" />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.HARDSKILL} />}
                        s2={<Line bl={COLORS.HARDSKILL} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-mysql" />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line bl={COLORS.ACHIEVEMENT} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-phpunit" />}
                        s3={<Line color={COLORS.ACHIEVEMENT} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.ACHIEVEMENT} event="achievement-excellence-programm" />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line tl={COLORS.ACHIEVEMENT} />}
                    />


                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-zf2" />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.HARDSKILL} />}
                        s2={<Line tl={COLORS.HARDSKILL} />}
                    />

                </Graph>
            </div>
        </div>
    );
}