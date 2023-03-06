import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "@santosch/components/Vita/vitaColors";

export default function Crea(): JSX.Element {
    return (
        <Station
            eventKey="crea"
            color={COLORS.CREA}
            image="/assets/images/creationell-logo.png"
        >
            creationell - die Werbeagentur
        </Station>
    );
}