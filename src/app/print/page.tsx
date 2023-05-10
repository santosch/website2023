import styles from "./page.module.scss";
import Vita from "@santosch/components/Vita/Vita";
import CoursesAndAchievements from "@santosch/components/CoursesAndAchievements/CoursesAndAchievements";
import Image from "next/image";
import classNames from "classnames";
import {FaEnvelope, FaGlobe, FaHome, FaPassport, FaPhone} from "react-icons/fa";

export default function Print(): JSX.Element {
    return (
        <>
            <div className={classNames(styles.grid, styles.grid__center)}>
                <div className={styles.aside}>
                    <Image
                        src="/assets/images/sebastian-antosch.jpg"
                        alt="Sebastian Antosch"
                        width={970}
                        height={970}
                        className={styles.image}
                    />
                </div>
                <div className={styles.main}>
                    <div className={styles.header}>
                        <h1>
                            Sebastian Antosch
                        </h1>
                        <p>
                            Softwareentwickler mit Schwerpunkt Web (Frontend/Fullstack),
                            Typescript-Tüftler und UI&#8209;Enthusiast mit über zehn Jahren Erfahrung
                            in der Webentwicklung.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <div className={styles.aside}>

                    <div className={styles.entry}>
                        <a href="mailto:sebastian.antosch@gmail.com">
                            sebastian.antosch@gmail.com
                        </a>
                        <div className={styles.icon}>
                            <FaEnvelope />
                        </div>
                    </div>

                    <div className={styles.entry}>
                        <a href="tel:004915788562613">
                            +49 1578 8562613
                        </a>
                        <div className={styles.icon}>
                            <FaPhone />
                        </div>
                    </div>

                    <div className={styles.entry}>
                        <a href="https://sebastian-antosch.de">
                            https://sebastian-antosch.de
                        </a>
                        <div className={styles.icon}>
                            <FaGlobe />
                        </div>
                    </div>

                    <div className={styles.entry}>
                        Stettenstraße 17<br/>
                        86150 Augsburg
                        <div className={styles.icon}>
                            <FaHome />
                        </div>
                    </div>

                    <div className={styles.entry}>
                        Staatsangehörigkeit: Deutsch
                        <div className={styles.icon}>
                            <FaPassport />
                        </div>
                    </div>

                    <h3 className={styles.sidebarHeadline}>
                        Sprachkenntnisse
                    </h3>

                    {[
                        {label: 'Deutsch: Muttersprache', val: '100%'},
                        {label: 'Englisch: Fließend', val: '80%'},
                        {label: 'Französisch: Grundlagen', val: '30%'},
                    ].map((language) => (
                        <div
                            className={styles.language}
                            key={language.label}
                        >
                            {language.label}
                            <div className={styles.bar}>
                                <div
                                    className={styles.barFill}
                                    style={{width: language.val}}
                                />
                            </div>
                        </div>
                    ))}

                    <div className={styles.pagebreak}></div>



                    Test2
                </div>
                <div className={styles.main} style={{marginTop: -84}}>
                    <Vita
                        headlineProfessional={(
                            <h2 className={styles.headline}>
                                Beruflicher Werdegang
                            </h2>
                        )}
                        headlineSchool={(
                            <h2 className={styles.headline} style={{marginTop: 40}}>
                                Schulische Ausbildung
                            </h2>
                        )}
                    />

                    <div className={styles.pagebreak}></div>
                    <h2 className={styles.headline} style={{marginTop: 40, marginBottom: -20}}>
                        Weiterbildungen
                    </h2>
                    <CoursesAndAchievements />
                </div>
            </div>
        </>
    )
}