import styles from './Card.module.scss';
import type {ReactNode} from "react";

export default function Card({title, children}: { title: string; children: ReactNode }): JSX.Element {
    return (
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>
                {title}
            </h2>
            <div>
                {children}
            </div>
        </div>
    );

}