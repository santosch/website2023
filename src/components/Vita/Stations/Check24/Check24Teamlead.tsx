import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function Check24Teamlead(): JSX.Element {
    return (
        <Step
            eventKey="check-teamlead"
            color={COLORS.CHECK}
            date="10/2022 - 12/2023"
            title="stellv. Teamleiter Softwareentwicklung"
            tags={['React', 'Redux', 'Laminas']}
        >
            <p>
                Geteilte Personalverantwortung mit dem Teamlead (~12 MA);
                Durchführung von Feedback- und Entwicklungsgesprächen;
                fachliches und persönliches Mentoring.
            </p>
            <p>
                Sichtung von Bewerbungen; Durchführung von Telefon-/Videointerviews sowie Bewerbertagen.
            </p>
            <p>
                Beratung des Produktmanagements und der Geschäftsführung bzgl. Themenpriorisierung und
                IT&#8209;Prozessoptimierung; teamübergreifende technische Konzeption und Koordination.
            </p>
        </Step>
    );
}