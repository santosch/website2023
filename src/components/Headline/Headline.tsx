import styles from "./Headline.module.scss";

export default function Headline(
    {
        children
    }: {
        children: string
    }
): JSX.Element {
    return (
        <h2 className={styles.headline}>
            {children}
        </h2>
    );
}