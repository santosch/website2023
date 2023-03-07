import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SoftskillRecruiting(): JSX.Element {
    return (
        <Step
            eventKey="soft-recruiting"
            color={COLORS.SOFTSKILL}
            date="10/2022"
            title="Recruiting Workshop"
        />
    );
}