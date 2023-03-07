import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SoftskillIntercultural(): JSX.Element {
    return (
        <Step
            eventKey="soft-intercultural"
            color={COLORS.SOFTSKILL}
            date="11/2022"
            title="Intercultural Training"
        >
            <p>
                Workshop zu Unterschieden in Kommunikation, Verständnis
                und Gewohnheiten unterschiedlicher Kulturkreise.
            </p>
        </Step>
    );
}