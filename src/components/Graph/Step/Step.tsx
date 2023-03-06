import type {CSSProperties, ReactNode} from "react";
import styles from "./Step.module.scss"
import classNames from "classnames";
import useHighlight from "../useHighlight";

export default function Step(
    {
        children,
        date,
        title,
        color,
        eventKey
    }: {
        children?: ReactNode,
        date?: ReactNode,
        title?: ReactNode,
        color?: string,
        eventKey: string

    }
): JSX.Element {
    const cssVars = {'--step-color': color} as CSSProperties;
    const [isHighlighted, highlight, unHighlight] = useHighlight(eventKey)

    return (
        <div
            className={styles.container}
            style={cssVars}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
        >
            <div className={classNames(
                styles.date,
                {[styles.date__highlighted]: isHighlighted}
            )}>
                {date}
            </div>
            <div className={styles.content}>
                {title &&
                    <h5 className={styles.title}>
                        {title}
                    </h5>
                }
                {children &&
                    <div className={styles.description}>
                        {children}
                    </div>
                }
            </div>
        </div>
    );
}