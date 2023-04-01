import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function HsaBachelor(): JSX.Element {
    return (
        <Step
            eventKey="hsa-bachelor"
            color={COLORS.HSA}
            date="10/2011 - 09/2015"
            title="Interaktive Medien (BA)"
            tags={['AngularJS', 'Ionic', 'Cordova', 'CSS', 'Python']}
        >
            Abschluss Note 1,2 - <em>&bdquo;mit Auszeichnung bestanden&rdquo;</em><br/>
            als Abschlussjahrgangsbester (Top 2% der Absolventen)
        </Step>
    );
}