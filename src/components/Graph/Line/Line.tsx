import styles from './Line.module.scss'
import classNames from "classnames";
import useHighlight from "@santosch/components/Graph/useHighlight";

export default function Line(
    {
        color,
        event = '',
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
    }
): JSX.Element {

    const [isHighlighted, highlight, unHighlight] = useHighlight(event, true);

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
                    className={classNames(
                        styles.event,
                        {
                            [styles.event__highlighted]: isHighlighted
                        }
                    )}
                    style={{borderColor: color}}
                    onMouseOver={highlight}
                    onMouseOut={unHighlight}
                />
            }
        </div>
    );
}
