import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function Check24Professional(): JSX.Element {
    return (
        <Step
            eventKey="check-professional"
            color={COLORS.CHECK}
            date="02/2016 - 03/2019"
            title="Softwareentwickler"
        >
            <p>
                Weiterentwicklung der Frontend-Applikation des Mietwagenvergleichs basierend auf PHP (Zend&nbsp;Framework&nbsp;2/3&nbsp;/&nbsp;Laminas),
                SCSS, Javascript/jQuery sowie Einführung des ersten Client-Side-Renderings mit Knockout.JS.
            </p>
            <p>
                Testing mit PHPUnit und Karma/Jasmine; Durchführung von Code Reviews.
            </p>
        </Step>
    );
}