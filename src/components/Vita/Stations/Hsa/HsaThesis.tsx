import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function HsaThesis(): JSX.Element {
    return (
        <Step
            eventKey="hsa-thesis"
            color={COLORS.HSA}
            date="03/2015 - 06/2015"
            title="Bachelorarbeit (1,0)"
            tags={['PHP', 'MySQL', 'AngularJS', '(S)CSS']}
        >
            <em>
                &bdquo;Amanu - Webbasierte Projektmanagementsoftware für Selbstständige und Freelancer<br/>
                Entwicklung eines datenbankgestützten PHP-Backends mit JSON-Schnittstelle&rdquo;
            </em>
        </Step>
    );
}