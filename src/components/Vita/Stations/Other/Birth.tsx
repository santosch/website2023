import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function Birth(): JSX.Element {
    return (
        <Step
            eventKey="birth"
            color={COLORS.DEFAULT}
            date="27.10.1991"
        >
            geboren in Augsburg
        </Step>
    );
}