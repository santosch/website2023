import styles from "./page.module.scss";
import Vita from "@santosch/components/Vita/Vita";
import CoursesAndAchievements from "@santosch/components/CoursesAndAchievements/CoursesAndAchievements";
import Image from "next/image";
import classNames from "classnames";

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
                    Test1
                    <div className={styles.pagebreak}></div>
                    Test2
                </div>
                <div className={styles.main}>
                    <Vita
                    />
                    <CoursesAndAchievements />
                </div>
            </div>
        </>
    )
}