import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "@santosch/components/Vita/vitaColors";

export default function Isan(): JSX.Element {
    return (
        <Station
            eventKey="isan"
            color={COLORS.ISAN}
            image="/assets/images/i-san-logo.png"
        >
            I-SAN.de Webdesign & Hosting GbR
        </Station>
    );
}