import {COLORS} from "@santosch/components/Vita/vitaColors";
import Step from "@santosch/components/Graph/Step/Step";

export default function CreaWebdev(): JSX.Element {
    return (
        <Step
            eventKey="crea-webdev"
            color={COLORS.CREA}
            date="10/2015 - 02/2016"
            title="Webentwickler"
        >
            <p>
                Erstellung und Wartung von Webseiten, Landingpages und Shops basierend auf diversen CMS
                (meist TYPO3, auch Magento, Shopware, Wordpress);
                Umsetzung von responsiven Templates (individuell und mit Bootstrap);
                Entwicklung von individuellen TYPO3-Extensions (Extbase, Fluid) sowie Custom-jQuery-Plugins.
            </p>
            <p>
                Performanceoptimierung (PageSpeed); Umsetzung von OnPage-SEO-Maßnahmen;
                Programmierung von Newslettertemplates (CleverReach, Emarsys); Einführung von GIT und SASS.
            </p>
        </Step>
    );
}