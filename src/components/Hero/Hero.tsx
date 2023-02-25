import styles from "./Hero.module.scss";
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaXing} from "react-icons/fa";

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
            <div className={styles.social}>
                <a
                    className={styles.socialIcon}
                    href="https://www.xing.com/profile/Sebastian_Antosch/"
                    title="Sebastian Antosch auf XING"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaXing/>
                </a>
                <a
                    className={styles.socialIcon}
                    href="https://www.facebook.com/sebi.antosch/"
                    title="Sebastian Antosch auf Facebook (Login erforderlich)"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebookF/>
                </a>
                <a
                    className={styles.socialIcon}
                    href="https://www.instagram.com/an.sebi/"
                    title="Sebastian Antosch auf Instagram"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram/>
                </a>
            </div>
        </header>
    );
}