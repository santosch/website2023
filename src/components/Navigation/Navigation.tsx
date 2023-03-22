import styles from './Navigation.module.scss';
import {useContext} from "react";
import ScrollObserverContext from "@santosch/components/ScrollObserver/ScrollObserverContext";
import classNames from "classnames";

export default function Navigation(
    {
        entries,
    }: {
        entries: Array<{id: string, label: string}>
    }
): JSX.Element {

    const {current} = useContext(ScrollObserverContext);

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                {entries.map(({id, label}) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={classNames(
                            styles.entry,
                            {
                                [styles.entry__active]: current === id,
                                [styles.entry__long]: label.length > 8,
                            }
                        )}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </div>
    )
}