import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function AchievementFeatureChallenge(): JSX.Element {
    return (
        <Step
            eventKey="achievement-feature-challenge"
            color={COLORS.ACHIEVEMENT}
            date="07/2022"
            title="CHECK24 Mietwagen Feature-Challenge"
        >
            <p>
                Erster Platz im Wettbewerb um die beste Feature-Idee für den CHECK24 Mietwagenvergleich.
            </p>
        </Step>
    );
}