import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function Check24Senior(): JSX.Element {
    return (
        <Step
            eventKey="check-senior"
            color={COLORS.CHECK}
            date="04/2019 - 09/2022"
            title="Senior Softwareentwickler"
        >
            <p>
                Einführung von React und Redux (+ Redux-Toolkit) sowie TypeScript im Frontend-Projekt,
                Refactoring von Legacy-Codebases, Erarbeiten von Best Practices,
                Erweiterung von Tooling, Logauswertung, Priority-Fixes.
            </p>
            <p>
                Fachliches Mentoring von Kollegen und Neustartern, Schulung von Kollegen in neuen Technologien,
                Code Reviews, technische und konzeptionelle Beratung des Produktmanagements.
            </p>
        </Step>
    );
}