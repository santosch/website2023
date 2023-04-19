"use client";

import styles from './CoursesAndAchievements.module.scss'
import Entry from "@santosch/components/Graph/Entry/Entry";
import Graph from "@santosch/components/Graph/Graph";
import Line from "@santosch/components/Graph/Line/Line";
import {COLORS} from './coursesAndAchievementsColors';
import Softskill from "./Stations/Softskill/Softskill";
import Hardskill from "./Stations/Hardskill/Hardskill";
import Achievements from "./Stations/Achievements/Achievements";
import AchievementFeatureChallenge from "./Stations/Achievements/AchievementFeatureChallenge";
import AchievementExcellenceProgram from "./Stations/Achievements/AchievementExcellenceProgram";
import HardskillZf2 from "./Stations/Hardskill/HardskillZf2";
import HardskillMySqlPerformance from "./Stations/Hardskill/HardskillMySqlPerformance";
import HardskillPhpUnit from "./Stations/Hardskill/HardskillPhpUnit";
import SoftskillRadicalCandor from "./Stations/Softskill/SoftskillRadicalCandor";
import SoftskillRecruiting from "./Stations/Softskill/SoftskillRecruiting";
import SoftskillIntercultural from "./Stations/Softskill/SoftskillIntercultural";
import SoftskillILeadershipProgram from "./Stations/Softskill/SoftskillILeadershipProgram";
import SoftskillILeadershipBasics from "./Stations/Softskill/SoftskillILeadershipBasics";
import SoftskillIInsights from "./Stations/Softskill/SoftskillIInsights";
import SoftskillConflicts from "./Stations/Softskill/SoftskillConflicts";
import SoftskillFireprotection
    from "@santosch/components/CoursesAndAchievements/Stations/Softskill/SoftskillFireprotection";



export default function CoursesAndAchievements(): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Graph>



                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} />}
                    >
                        <Softskill />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-fireprotection" />}
                        spaceBefore={true}
                    >
                        <SoftskillFireprotection />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-radical-candor" />}
                        spaceBefore={true}
                    >
                        <SoftskillRadicalCandor />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-intercultural" />}
                        spaceBefore={true}
                    >
                        <SoftskillIntercultural />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-recruiting" />}
                        spaceBefore={true}
                    >
                        <SoftskillRecruiting />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line color={COLORS.SOFTSKILL} x={COLORS.ACHIEVEMENT} />}
                        s4={<Line bl={COLORS.ACHIEVEMENT} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} />}
                        s4={<Line color={COLORS.ACHIEVEMENT} event="achievement-feature-challenge" />}
                    >
                        <SoftskillILeadershipProgram />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line color={COLORS.SOFTSKILL} x={COLORS.ACHIEVEMENT} />}
                        s4={<Line tl={COLORS.ACHIEVEMENT} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-leadership-program" />}
                    >
                        <SoftskillIInsights />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-insights" />}
                        spaceBefore={true}
                    >
                        <SoftskillILeadershipBasics />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-leadership-basics" />}
                        spaceBefore={true}
                    >
                        <SoftskillConflicts />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s3={<Line color={COLORS.SOFTSKILL} event="soft-conflicts" />}
                        spaceBefore={true}
                    >
                        <Hardskill />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.SOFTSKILL} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.SOFTSKILL} />}
                        s3={<Line tl={COLORS.SOFTSKILL} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                    >
                        <HardskillMySqlPerformance />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-mysql" />}
                        spaceBefore={true}
                    >
                        <HardskillPhpUnit />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line x={COLORS.ACHIEVEMENT} />}
                        s4={<Line bl={COLORS.ACHIEVEMENT} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} event="hard-phpunit" />}
                        s4={<Line color={COLORS.ACHIEVEMENT} />}
                    >
                        <HardskillZf2 />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HARDSKILL} />}
                        s4={<Line color={COLORS.ACHIEVEMENT} event="achievement-excellence-program" />}
                        spaceBefore={true}
                    >
                        <Achievements />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.ACHIEVEMENT} />}
                        s2={<Line color={COLORS.HARDSKILL} x={COLORS.ACHIEVEMENT} />}
                        s3={<Line x={COLORS.ACHIEVEMENT} />}
                        s4={<Line tl={COLORS.ACHIEVEMENT} />}
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