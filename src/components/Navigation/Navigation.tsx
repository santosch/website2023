import styles from './Navigation.module.scss';
import {useContext} from "react";
import ScrollObserverContext from "@santosch/components/ScrollObserver/ScrollObserverContext";
import classNames from "classnames";

export default function Navigation(
    {
        entries,
        open,
        setOpen,
    }: {
        entries: Array<{id: string, label: string}>
        open?: boolean,
        setOpen?: (open: boolean) => void
    }
): JSX.Element {

    const {current} = useContext(ScrollObserverContext);

    return (
        <div className={classNames(
            styles.container,
            {
                [styles.container__open]: open,
            }
        )}>
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
                        onClick={() => {
                            setOpen?.(false);
                        }}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </div>
    )
}