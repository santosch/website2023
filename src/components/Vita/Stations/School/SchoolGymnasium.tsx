import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function SchoolGymnasium(): JSX.Element {
    return (
        <Step
            eventKey="school-highschool"
            color={COLORS.SCHOOL}
            date="08/2002 - 05/2011"
            title="Gymnasium Königsbrunn"
        >
            Abitur (1,9) / neunjähriges Gymnasium
        </Step>
    );
}