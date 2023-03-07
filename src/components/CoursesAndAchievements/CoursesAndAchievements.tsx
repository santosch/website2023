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
import AchievementExcellenceProgram
    from "@santosch/components/CoursesAndAchievements/Stations/Achievements/AchievementExcellenceProgram";
import HardskillZf2 from "@santosch/components/CoursesAndAchievements/Stations/Hardskill/HardskillZf2";
import HardskillMySqlPerformance
    from "@santosch/components/CoursesAndAchievements/Stations/Hardskill/HardskillMySqlPerformance";
import HardskillPhpUnit from "@santosch/components/CoursesAndAchievements/Stations/Hardskill/HardskillPhpUnit";
import SoftskillRadicalCandor
    from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillRadicalCandor";
import SoftskillRecruiting from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillRecruiting";
import SoftskillIntercultural
    from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillIntercultural";
import SoftskillILeadershipProgram
    from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillILeadershipProgram";
import SoftskillILeadershipBasics
    from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillILeadershipBasics";
import SoftskillIInsights from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillIInsights";
import SoftskillConflicts from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillConflicts";



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
                        <SoftskillRadicalCandor />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-intercultural" />}
                        spaceBefore={true}
                    >
                        <SoftskillIntercultural />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-recruiting" />}
                        spaceBefore={true}
                    >
                        <SoftskillRecruiting />
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
                        <SoftskillILeadershipProgram />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.SOFTSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line tl={COLORS.ACHIEVEMENT} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-leadership-program" />}
                    >
                        <SoftskillIInsights />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-insights" />}
                        spaceBefore={true}
                    >
                        <SoftskillILeadershipBasics />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-leadership-basics" />}
                        spaceBefore={true}
                    >
                        <SoftskillConflicts />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SOFTSKILL} event="soft-conflicts" />}
                        spaceBefore={true}
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
                        s3={<Line color={COLORS.ACHIEVEMENT} event="achievement-excellence-program" />}
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
                        <AchievementExcellenceProgram />
                    </Entry>

                </Graph>
            </div>
        </div>
    );
}