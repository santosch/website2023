import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function HardskillMySqlPerformance(): JSX.Element {
    return (
        <Step
            eventKey="hard-mysql"
            color={COLORS.HARDSKILL}
            date="06/2018"
            title="MySQL Performance Tuning"
        >
            <p>
                2 Tage
            </p>
        </Step>
    );
}