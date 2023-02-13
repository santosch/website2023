import styles from "./Hero.module.scss";
import Image from "next/image";
import {FaCodeBranch, FaFacebookF, FaInstagram, FaXing} from "react-icons/fa";

export default function Hero(): JSX.Element {
    return (
        <header>
            <div className={styles.image}>
                <div className={styles.glass}>
                    <div className={styles.photo}>
                        <Image
                            src="/assets/images/sebastian-antosch.jpg"
                            alt=""
                            width="210"
                            height="210"
                        />
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
                </div>
                <div className={styles.bottomGlass}>
                    <h1>
                        Sebastian Antosch
                    </h1>
                    <FaCodeBranch className={styles.branch1} />
                    <FaCodeBranch className={styles.branch2} />
                    <FaCodeBranch className={styles.branch3} />
                    <FaCodeBranch className={styles.branch4} />
                    <FaCodeBranch className={styles.branch5} />
                </div>
            </div>
        </header>
    );
}