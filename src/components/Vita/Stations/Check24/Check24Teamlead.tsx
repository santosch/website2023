import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function Check24Teamlead(): JSX.Element {
    return (
        <Step
            eventKey="check-teamlead"
            color={COLORS.CHECK}
            date="seit 10/2022"
            title="stellv. Teamleiter Softwareentwicklung"
        >
            <p>
                Geteilte Personalverantwortung mit dem Teamlead (~12 MA),
                Durchführen von Feedback- und Entwicklungsgesprächen,
                fachliches und persönliches Mentoring.
                Sichten von Bewerbungen, Durchführen von Telefon/Videointerviews sowie Bewerbertagen.
            </p>
            <p>
                Beratung des Produktmanagements und der Geschäftsführung bzgl. Themenpriorisierung und
                IT-Prozessoptimierung, teamübergreifende technische Konzeption und Koordination.
            </p>
        </Step>
    );
}