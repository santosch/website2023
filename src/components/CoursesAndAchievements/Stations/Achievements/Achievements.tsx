import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "../../coursesAndAchievementsColors";

export default function Achievements(): JSX.Element {
    return (
        <Station
            eventKey="achievement"
            color={COLORS.ACHIEVEMENT}
        >
            Auszeichnungen
        </Station>
    );
}