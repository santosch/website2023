import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";
import Link from "next/link";

export default function HardskillZf2(): JSX.Element {
    return (
        <Step
            eventKey="hard-zf2"
            color={COLORS.HARDSKILL}
            date="06/2016"
            title="Zend Framework 2"
        >
            <p>
                Ausführliche Schulung (3 Tage) über Architektur und Anwendung des Zend Framework 2 von <Link
                    href="https://www.ralfeggert.de"
                    target="_blank"
                    rel="nofollow"
                >
                    Ralf Eggert
                </Link>.
            </p>
        </Step>
    );
}