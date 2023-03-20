
import styles from './Contact.module.scss';
import {FaEnvelope} from "react-icons/fa";

export default function Contact(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.curve} />
                <div className={styles.line} />
                <div className={styles.card}>
                    <div className={styles.node}>
                        <FaEnvelope />
                    </div>
                    <h4>
                        Sebastian Antosch
                    </h4>
                    <p>
                        BA Interactive Media<br/>
                        Softwareentwickler (Web, Frontend/Full-Stack)
                    </p>
                    <p>
                        <a href="mailto:write@sebastian-antosch.de">
                            write@sebastian-antosch.de
                        </a>
                    </p>
                </div>
                <div className={styles.placeholder} />
            </div>
        </div>
    )
}