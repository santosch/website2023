import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero(): JSX.Element {
    return (
        <header>
            <div className={styles.image}>
                <div className={styles.glass}>
                    <div className={styles.container}>
                        <div className={styles.photoContainer}>
                            <Image
                                src="/assets/images/sebastian-antosch.jpg"
                                alt=""
                                width="210"
                                height="210"
                                className={styles.photo}
                            />
                        </div>
                        <div className={styles.headlineContainer}>
                            <h1 className={styles.headline}>
                                Sebastian Antosch
                            </h1>
                            <h2 className={styles.subheadline}>
                                Softwareentwickler • Javascript-Junkie • UI-Enthusiast
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}