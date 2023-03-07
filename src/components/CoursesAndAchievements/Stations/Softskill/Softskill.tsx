import Station from "@santosch/components/Graph/Station/Station";
import {COLORS} from "../../coursesAndAchievementsColors";

export default function Check24(): JSX.Element {
    return (
        <Station
            eventKey="hard"
            color={COLORS.SOFTSKILL}
        >
            Persönliche Weiterbildungen
        </Station>
    );
}