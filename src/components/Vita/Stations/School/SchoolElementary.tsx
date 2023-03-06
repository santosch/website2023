import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SchoolElementary(): JSX.Element {
    return (
        <Step
            eventKey="school-elementary"
            color={COLORS.SCHOOL}
            date="08/1998 - 07/2002"
            title="Volksschule Königsbrunn West (GS)"
        >
        </Step>
    );
}