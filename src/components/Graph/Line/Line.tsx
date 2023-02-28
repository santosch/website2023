import styles from './Line.module.scss'
import classNames from "classnames";
import {useCallback, useContext} from "react";
import {GraphContext} from "@santosch/components/Graph/Graph";

export default function Line(
    {
        color,
        event,
        br,
        bl,
        tr,
        tl,
        x,
    }: {
        event?: string;
        color?: string;
        br?: string;
        bl?: string;
        tr?: string;
        tl?: string;
        x?: string;
    }): JSX.Element {

    const {onHighlight} = useContext(GraphContext);

    const onMouseOver = useCallback(() => {
        onHighlight?.(event!);
    }, [onHighlight, event]);

    const onMouseOut = useCallback(() => {
        onHighlight?.(null);
    }, [onHighlight]);

    return (

        <div className={styles.lineContainer}>
            {color &&
                <div
                    className={styles.line}
                    style={{backgroundColor: color}}
                />
            }

            {x &&
                <div
                    className={styles.crossLine}
                    style={{backgroundColor: x}}
                />
            }

            {(br || bl || tr || tl) &&
                <div
                    className={classNames(
                        styles.curve,
                        {
                            [styles.curve__br]: br,
                            [styles.curve__bl]: bl,
                            [styles.curve__tr]: tr,
                            [styles.curve__tl]: tl,
                        }
                    )}
                    style={{borderLeftColor: br || bl || tr || tl}}
                />
            }

            {event &&
                <div
                    className={styles.event}
                    style={{borderColor: color}}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                />
            }
        </div>
    );
}
