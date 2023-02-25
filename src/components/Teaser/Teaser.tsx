import styles from "./Teaser.module.scss";
import {FaFacebookF, FaInstagram, FaXing} from "react-icons/fa";

export default function Teaser(): JSX.Element {
    return (
        <div className={styles.teaser}>

            <video poster="/assets/video/typing.jpg"
                   className="headerVideo"
                   autoPlay={true}
                   loop={true}
                   muted={true}
            >
                <source
                    src="/assets/video/typing.mp4"
                    type="video/mp4"
                />
            </video>

            <div className={styles.outerContainer}>
                <div className={styles.container}>

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
        </div>
    );
}