"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import classNames from "classnames";
import {useState} from "react";

export default function Hero(
    {
        children
    }: {
        children?: (
            open: boolean,
            setOpen: (open: boolean) => void
        ) => JSX.Element
    }
): JSX.Element {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen((open) => !open);
    }

    return (
        <>
            <header className={styles.hero}>
                <div className={styles.image}>
                    <div className={classNames(styles.bar, styles.glass)}>
                        <section>
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
                        </section>
                    </div>
                </div>
            </header>
            <header
                className={classNames(styles.sticky, styles.glass)}
                aria-hidden={true}
            >
                <section className={styles.stickyInner}>
                    <div className={styles.stickyPhotoContainer}>
                        <Image
                            src="/assets/images/sebastian-antosch.jpg"
                            alt=""
                            width="64"
                            height="64"
                            className={classNames(styles.photo, styles.stickyPhoto)}
                        />
                    </div>
                    <h5 className={styles.stickyHeadline}>
                        Sebastian Antosch
                    </h5>
                    <div
                        className={styles.stickyToggle}
                        onClick={toggle}
                    >
                        <div
                            className={classNames(
                                styles.toggle,
                                {
                                    [styles.toggle__open]: open,
                                }
                        )}/>
                    </div>
                </section>
            </header>
            { children && children(open, setOpen) }
        </>
    );
}