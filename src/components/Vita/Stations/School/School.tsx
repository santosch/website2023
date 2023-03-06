import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "@santosch/components/Vita/vitaColors";

export default function School(): JSX.Element {
    return (
        <Station
            eventKey="school"
            color={COLORS.SCHOOL}
        />
    );
}