import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SoftskillFireprotection(): JSX.Element {
    return (
        <Step
            eventKey="soft-fireprotection"
            color={COLORS.SOFTSKILL}
            date="03/2023"
            title="Brandschutzhelfer"
        >
            <p>
                Ausbildung zum Brandschutzhelfer gemäß ArbSchG §10, DGUV Information 205-023 und ASR A2.2.
            </p>
        </Step>
    );
}