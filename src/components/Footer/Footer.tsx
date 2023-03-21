"use client";

import styles from "./Footer.module.scss";
import ActiveLink from "@santosch/components/ActiveLink/ActiveLink";

export default function Footer(): JSX.Element {
    return(
        <footer className={styles.container}>
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
                    &copy; 2012-{(new Date()).getFullYear()} Sebastian Antosch
                </div>
            </div>
        </footer>
    );
}