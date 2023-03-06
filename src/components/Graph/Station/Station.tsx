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
    const [isHighlighted, highlight, unHighlight] = useHighlight(eventKey)

    return (
        <div
            className={styles.container}
            style={cssVars}
            onMouseOver={highlight}
            onMouseOut={unHighlight}
        >
            <div className={styles.left}>
                {image &&
                    <Image
                        src={image}
                        alt=""
                        className={styles.image}
                        width={100}
                        height={100}
                    />
                }
            </div>
            <div className={styles.right}>
                {children}

                <div className={classNames(
                        styles.line,
                        {
                            [styles.line__highlighted]: isHighlighted,
                        }
                    )}
                />
            </div>
        </div>
    );
}