import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "@santosch/components/Vita/vitaColors";

export default function Hsa(): JSX.Element {
    return (
        <Station
            eventKey="hsa"
            color={COLORS.HSA}
            image="/assets/images/hsa-logo.png"
        >
            Hochschule Augsburg<br/>
            <em>University of Applied Sciences</em>
        </Station>
    );
}