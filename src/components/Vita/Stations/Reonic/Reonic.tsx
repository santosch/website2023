import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "@santosch/components/Vita/vitaColors";
import {JSX} from "react";

export default function Reonic(): JSX.Element {
    return (
        <Station
            eventKey="reonic"
            color={COLORS.REONIC}
            image="/assets/images/reonic-logo.png"
        >
            Reonic&nbsp;GmbH
        </Station>
    );
}