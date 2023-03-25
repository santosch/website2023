import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "@santosch/components/Vita/vitaColors";

export default function Check24(): JSX.Element {
    return (
        <Station
            eventKey="check"
            color={COLORS.CHECK}
            image="/assets/images/check24-logo.png"
        >
            CHECK24 Vergleichsportal Mietwagen&nbsp;GmbH
        </Station>
    );
}