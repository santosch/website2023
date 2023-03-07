import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";
import Link from "next/link";

export default function SoftskillIInsights(): JSX.Element {
    return (
        <Step
            eventKey="soft-insights"
            color={COLORS.SOFTSKILL}
            date="07/2021"
            title="Insights Workshop"
        >
            <p>
                Eintägiger Workshop mit Persönlichkeitsauswertung und Kommunikationsempfehlungen im Team nach <Link
                    href="https://www.ttisi.com/disc/"
                    target="_blank"
                    rel="nofollow"
                >
                    DISC
                </Link> Methode von TTI SUCCESS INSIGHTS &copy;
            </p>
        </Step>
    );
}