import type React from "react";
import Card from "@santosch/components/Card/Card";

export default function Impressum(): React.ReactNode {
    return (
        <>
            <h2>
                Impressum
            </h2>

            <Card title="Angaben gemäß § 5 TMG:">
                <p>
                    <strong>Sebastian Antosch</strong><br/>
                    Stettenstraße 17<br/>
                    86150 Augsburg
                </p>
                <p>
                    <strong>Kontakt:</strong><br/>
                    Telefon: 01578 8562613<br/>
                    E-Mail: write(at)sebastian-antosch.de
                </p>
                <p>
                    <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: </strong><br/>
                    Sebastian Antosch<br/>
                    Stettenstraße 17<br/>
                    86150 Augsburg
                </p>
            </Card>

            <Card title="Streitschlichtung">
                <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br/>
                    <a href="https://ec.europa.eu/consumers/odr">ec.europa.eu/consumers/odr</a><br/>
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </Card>

            <Card title="Haftung für Inhalte">
                <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
                    den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
                    jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                    oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
                    ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                    von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
            </Card>

            <Card title="Haftung für Links">
                <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                    Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                    mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
                    nicht erkennbar.
                </p>
                <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
            </Card>

            <Card title="Urheberrecht">
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                    Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
                    des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
                    privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                    Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                    gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                    bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
                    wir derartige Inhalte umgehend entfernen.
                </p>
                <p>
                    Quelle: <a href="http://e-recht24.de">e-recht24.de</a>
                </p>
            </Card>

            <Card title="Bildquellen">
                <p>
                    Bild Startseite: &quot;Möwe über Bodensee&quot; von Sebastian Antosch
                </p>
                <p>
                    Video Startseite: &quot;Black Keys&quot; von coverr.co | <a
                        href="https://coverr.co/license"
                        target="blank"
                        rel="nofollow"
                    >
                        https://coverr.co/license
                    </a>
                </p>
                <p>
                    Video Startseite: &quot;Pushing buttons on a keyboard&quot; von coverr.co | <a
                        href="https://coverr.co/license"
                        target="blank"
                        rel="nofollow"
                    >
                        https://coverr.co/license
                    </a>
                </p>
            </Card>
        </>
    );
}