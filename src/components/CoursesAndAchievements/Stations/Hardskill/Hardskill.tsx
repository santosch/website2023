import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "../../coursesAndAchievementsColors";

export default function Hardskill(): JSX.Element {
    return (
        <Station
            eventKey="hard"
            color={COLORS.HARDSKILL}
        >
            Technische Weiterbildungen
        </Station>
    );
}