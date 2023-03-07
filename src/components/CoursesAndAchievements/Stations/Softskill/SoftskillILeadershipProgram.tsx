import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SoftskillILeadershipProgram(): JSX.Element {
    return (
        <Step
            eventKey="soft-leadership-program"
            color={COLORS.SOFTSKILL}
            date="06/2022 - 08-2022"
            title="Führungskräfteprogramm"
        >
            <p>
                Ausführliche Schulung (3 x 2 Tage) zu den wichtigsten Themen der Mitarbeiterführung.
            </p>
            <p>
                Führungsstile; MA-Reife; Erwartungsklärung;
                Beobachtung; Feedback; MA-Entwicklung; Motivation;
                Teamentwicklung.
            </p>
        </Step>
    );
}