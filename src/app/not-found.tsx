import Hero from "@santosch/components/Hero/Hero";
import styles from "./not-found.module.scss";
import Image from "next/image";

export default function NotFound() {
    return (
        <>
            <Hero />
            <section className={styles.section}>
                <div className={styles.text}>
                    <h2 className={styles.headline}>404</h2>
                    <p>Page not found - take a flower instead!</p>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/assets/images/404image.png"
                        alt="Flower"
                        width={800}
                        height={800}
                        className={styles.img}
                    />
                </div>
            </section>
        </>
    );
}