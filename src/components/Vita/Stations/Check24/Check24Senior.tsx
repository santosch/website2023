import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function Check24Senior(): JSX.Element {
    return (
        <Step
            eventKey="check-senior"
            color={COLORS.CHECK}
            date="04/2019 - 09/2022"
            title="Senior Softwareentwickler"
            tags={['React', 'Redux', 'KnockoutJS', '(S)CSS', 'Laminas']}
        >
            <p>
                Einführung von React und Redux (+ Redux-Toolkit) sowie TypeScript im Frontend-Projekt;
                Refactoring von Legacy-Codebases; Erarbeitung von Best Practices;
                Erweiterung von Tooling; Logauswertung; Priority-Fixes.
            </p>
            <p>
                Fachliches Mentoring von Kolleg:innen und Neustartenden; Schulung von Kolleg:innen in neuen Technologien;
                Code Reviews; technische und konzeptionelle Beratung des Produktmanagements.
            </p>
        </Step>
    );
}