import styles from './Entry.module.scss';
import {ReactNode} from "react";

export default function Entry(
    {
        s1,
        s2,
        s3,
        s4,
        children
    }: {
        s1?: ReactNode;
        s2?: ReactNode;
        s3?: ReactNode;
        s4?: ReactNode;
        children?: ReactNode;
    }): JSX.Element {
    return (
        <div className={styles.entry}>
            <div className={styles.slot}>
                {s1}
            </div>
            <div className={styles.slot}>
                {s2}
            </div>
            <div className={styles.slot}>
                {s3}
            </div>
            <div className={styles.slot}>
                {s4}
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}