import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function IsanDev(): JSX.Element {
    return (
        <Step
            eventKey="isan"
            color={COLORS.ISAN}
            date="04/2010 - 12/2022"
            title={(
                <>
                    Webentwickler, Geschäftsführender Gesellschafter<br/>
                    <small>im Nebenerwerb</small>
                </>
            )}
        >
            <p>
                Konzeption, Design & Erstellung von Websiten für lokale Unternehmen basierend auf CMS Joomla;
                Programmierung von individuellen responsiven Templates;
                Entwicklung und Vertrieb eigener Joomla&#8209;Module.

            </p>
        </Step>
    );
}