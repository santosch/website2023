import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";
import Link from "next/link";

export default function HardskillPhpUnit(): JSX.Element {
    return (
        <Step
            eventKey="hard-phpunit"
            color={COLORS.HARDSKILL}
            date="07/2017"
            title="PHPUnit"
        >
            <p>
                Eintägige Schulung über UnitTesting mit PHPUnit, direkt von dessen Autor <Link
                    href="https://sebastian-bergmann.de/"
                    target="_blank"
                    rel="nofollow"
                >
                    Sebastian Bergmann
                </Link>.
            </p>
        </Step>
    );
}