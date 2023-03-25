import styles from "./Teaser.module.scss";
import {FaEnvelope, FaGithub, FaXing} from "react-icons/fa";
import type {ReactElement} from "react";

export default function Teaser(
    {
        videoKey,
        quote,
        author,
    }: {
        videoKey: string,
        quote: ReactElement,
        author: string,
    }
): JSX.Element {
    return (
        <div className={styles.teaser}>

            <video
                poster={`/assets/video/${videoKey}.jpg`}
                autoPlay={true}
                loop={true}
                muted={true}
            >
                <source
                    src={`/assets/video/${videoKey}.mp4`}
                    type="video/mp4"
                />
            </video>

            <div className={styles.outerContainer}>
                <main className={styles.main}>
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
                                {quote}
                            </h3>
                            <div className={styles.quoteAuthor}>
                                ~ {author}
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}