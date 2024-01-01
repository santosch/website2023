import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";
import {JSX} from "react";

export default function ReonicDeveloper(): JSX.Element {
    return (
        <Step
            eventKey="reonic-developer"
            color={COLORS.REONIC}
            date="seit 01/2024"
            title="Softwareentwickler"
            tags={['React', 'Tailwind', 'NodeJS']}
        >
            <p>
                Entwicklung der webbasierten Planungs- und Berechnungslösungen (SAAS) für
                Photovoltaik, Speicher, Wallboxen und Wärmepumpen.
            </p>
        </Step>
    );
}