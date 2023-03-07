import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SoftskillILeadershipBasics(): JSX.Element {
    return (
        <Step
            eventKey="soft-leadership-basics"
            color={COLORS.SOFTSKILL}
            date="01/2021"
            title="Basisschulung Führung"
        >
            <p>
                Eintägige Schulung zu den Basics der Mitarbeiterführung.
            </p>
            <p>
                Onboarding; Aufgabenübertragung; Kommunikation; Lob &amp; Kritik;
            </p>
        </Step>
    );
}