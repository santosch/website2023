"use client";

import styles from './CoursesAndAchievements.module.scss'
import Entry from "@santosch/components/Graph/Entry/Entry";
import Graph from "@santosch/components/Graph/Graph";
import Line from "@santosch/components/Graph/Line/Line";
import {COLORS} from './coursesAndAchievementsColors';
import Softskill from "@santosch/components/CoursesAndAchievements/Stations/Softskill/Softskill";
import Hardskill from "@santosch/components/CoursesAndAchievements/Stations/Hardskill/Hardskill";
import Achievements from "@santosch/components/CoursesAndAchievements/Stations/Achievements/Achievements";
import AchievementFeatureChallenge
    from "@santosch/components/CoursesAndAchievements/Stations/Achievements/AchievementFeatureChallenge";
import AchievementExcellenceProgramm
    from "@santosch/components/CoursesAndAchievements/Stations/Achievements/AchievementExcellenceProgramm";
import HardskillZf2 from "@santosch/components/CoursesAndAchievements/Stations/Hardskill/HardskillZf2";
import HardskillMySqlPerformance
    from "@santosch/components/CoursesAndAchievements/Stations/Hardskill/HardskillMySqlPerformance";
import HardskillPhpUnit from "@santosch/components/CoursesAndAchievements/Stations/Hardskill/HardskillPhpUnit";



export default function CoursesAndAchievements(): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Graph>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} event="soft" />}
                    >
                        <Softskill />
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
                        spaceBefore={true}
                    >
                        FK Programm 2022
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-fk-programm" />}
                        spaceBefore={true}
                    >
                        FK basis 2021
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-fk-basis" />}
                        spaceBefore={true}
                    >
                        Insights 2021
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-insights" />}
                        spaceBefore={true}
                    >
                        Konflikte 2020
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-conflicts" />}
                    >
                        <Hardskill />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.SOFTSKILL} />}
                        s2={<Line tl={COLORS.SOFTSKILL} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} event="hard" />}
                    >
                        <HardskillMySqlPerformance />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.HARDSKILL} />}
                        s2={<Line bl={COLORS.HARDSKILL} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-mysql" />}
                    >
                        <HardskillPhpUnit />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line bl={COLORS.ACHIEVEMENT} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-phpunit" />}
                        s3={<Line color={COLORS.ACHIEVEMENT} />}
                    >
                        <HardskillZf2 />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.ACHIEVEMENT} event="achievement-excellence-programm" />}
                        spaceBefore={true}
                    >
                        <Achievements />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line tl={COLORS.ACHIEVEMENT} />}
                    />


                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-zf2" />}
                    >
                        <AchievementFeatureChallenge />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.HARDSKILL} />}
                        s2={<Line tl={COLORS.HARDSKILL} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                    >
                        <AchievementExcellenceProgramm />
                    </Entry>

                </Graph>
            </div>
        </div>
    );
}