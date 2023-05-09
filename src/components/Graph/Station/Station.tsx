import type {CSSProperties, ReactNode} from "react";
import styles from "./Station.module.scss"
import Image from "next/image";
import classNames from "classnames";
import useHighlight from "../useHighlight";

export default function Station(
    {
        children,
        image,
        color,
        eventKey
    }: {
        children?: ReactNode,
        image?: string,
        color?: string,
        eventKey: string

    }
): JSX.Element {
    const cssVars = {'--station-color': color} as CSSProperties;
    const [isHighlighted, highlight, unHighlight] = useHighlight(eventKey, true)

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
            <div className={styles.content}>
                <h4 className={styles.text}>
                    {children}
                </h4>

                <div className={classNames(
                        styles.line,
                        {
                            [styles.line__highlighted]: isHighlighted,
                        }
                    )}
                />
            </div>
            {image &&
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        alt=""
                        className={styles.image}
                        width={50}
                        height={50}
                    />
                </div>
            }
        </div>
    );
}