import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SoftskillConflicts(): JSX.Element {
    return (
        <Step
            eventKey="soft-conflicts"
            color={COLORS.SOFTSKILL}
            date="09/2020"
            title="Workshop „Konflikte wirkungsvoll vermeiden und lösen”"
        />
    );
}