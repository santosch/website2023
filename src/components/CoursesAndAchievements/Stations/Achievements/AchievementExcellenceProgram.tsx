import {COLORS} from "../../coursesAndAchievementsColors";
import Step from "@santosch/components/Graph/Step/Step";
import Link from "next/link";

export default function AchievementExcellenceProgram(): JSX.Element {
    return (
        <Step
            eventKey="achievement-excellence-program"
            color={COLORS.ACHIEVEMENT}
            date="2017"
            title="CHECK24 Excellence Programm"
        >
            <p>
                Teilnahme am <Link
                    href="https://jobs.check24.de/de/blog/check24-excellence-programm/"
                    target="_blank"
                    rel="nofollow"
                >
                    CHECK24 Excellence Programm
                </Link> für High Performer.
            </p>
        </Step>
    );
}