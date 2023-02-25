import styles from "./Teaser.module.scss";
import {FaEnvelope, FaGithub, FaXing} from "react-icons/fa";

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
                            href="https://github.com/santosch"
                            title="Sebastian Antosch auf GitHub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub/>
                        </a>
                        <a
                            className={styles.socialIcon}
                            href="mailto:write@sebastian-antosch.de"
                            title="Mail an Sebastian Antosch"
                        >
                            <FaEnvelope/>
                        </a>
                    </div>

                    <div className={styles.quote}>
                        <h3 className={styles.quoteText}>
                            Real quality means making sure that people are proud of the code they write,
                            that they&apos;re involved and taking it personally.
                        </h3>
                        <div className={styles.quoteAuthor}>
                            ~ Linus Torvalds, 2008
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}