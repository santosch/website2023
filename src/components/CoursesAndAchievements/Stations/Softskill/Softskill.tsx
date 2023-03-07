import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "../../coursesAndAchievementsColors";

export default function Softskill(): JSX.Element {
    return (
        <Station
            eventKey="soft"
            color={COLORS.SOFTSKILL}
        >
            Persönliche Weiterbildungen
        </Station>
    );
}