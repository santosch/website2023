import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function CreaIntern(): JSX.Element {
    return (
        <Step
            eventKey="crea-intern"
            color={COLORS.CREA}
            date="09/2013 - 02/2014"
            title="Praktikum im Rahmen des Praxissemesters"
        />
    );
}