import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function CreaFreelancer(): JSX.Element {
    return (
        <Step
            eventKey="crea-freelancer"
            color={COLORS.CREA}
            date="04/2014 - 09/2015"
            title="Freiberuflicher Webentwickler"
        />
    );
}