import type {CSSProperties, ReactNode} from "react";
import styles from "./Step.module.scss"
import classNames from "classnames";
import useHighlight from "../useHighlight";

export default function Step(
    {
        children,
        date,
        title,
        tags,
        color,
        eventKey,
    }: {
        children?: ReactNode,
        date?: ReactNode,
        title?: ReactNode,
        tags?: Array<string>,
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
            onTouchStart={highlight}
            onMouseOut={unHighlight}
            // prevent "tap to search" in chrome mobile
            onClick={(e) => e.preventDefault()}
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
                {tags && tags.length &&
                    <ul className={classNames(
                        styles.tags,
                        {
                            [styles.tags__highlighted]: isHighlighted
                        }
                    )}>
                        {tags.map((tag) =>
                            <li
                                className={styles.tag}
                                key={tag}
                            >
                                {tag}
                            </li>
                        )}
                    </ul>
                }
            </div>
        </div>
    );
}