"use client";

import styles from "./Footer.module.scss";
import ActiveLink from "@santosch/components/ActiveLink/ActiveLink";
import {useEffect} from "react";
import consoleGreeting from "@santosch/helpers/consoleGreeting";
import {FaInfoCircle} from "react-icons/fa";

export default function Footer(): JSX.Element {

    useEffect(
        () => {
            consoleGreeting();
        },
        []
    );

    return(
        <footer className={styles.container}>
            <section>
                <div className={styles.inner}>
                    <nav className={styles.nav}>
                        <ActiveLink
                            href="/"
                            className={styles.link}
                            activeClassName={styles.link__active}
                        >
                            Home
                        </ActiveLink>
                        <ActiveLink
                            href="/impressum"
                            className={styles.link}
                            activeClassName={styles.link__active}
                        >
                            Impressum
                        </ActiveLink>
                        <ActiveLink
                            href="/datenschutz"
                            className={styles.link}
                            activeClassName={styles.link__active}
                        >
                            Datenschutz
                        </ActiveLink>
                    </nav>
                    <div className={styles.content}>
                        <div className={styles.f12} />
                        <p className={styles.printNotice}>
                            <FaInfoCircle/> Die vollständige
                            Version dieses Dokuments ist
                            unter <a href="https://sebastian-antosch.de">
                                https://sebastian-antosch.de
                            </a> zu finden.
                        </p>
                        <p>
                            &copy; 2012-{(new Date()).getFullYear()} Sebastian Antosch
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
}