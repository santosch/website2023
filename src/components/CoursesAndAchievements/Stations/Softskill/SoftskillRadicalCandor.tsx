import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SoftskillRadicalCandor(): JSX.Element {
    return (
        <Step
            eventKey="soft-radical-candor"
            color={COLORS.SOFTSKILL}
            date="01/2023"
            title="Radical Candor"
        >
            <p>
                Workshop zum Thema &bdquo;Radical Candor&rdquo; - einer Feedbacktechnik basierend auf radikaler Ehrlichkeit.
            </p>
        </Step>
    );
}