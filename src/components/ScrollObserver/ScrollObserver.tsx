import type {ReactNode} from "react";
import ScrollObserverContext from "./ScrollObserverContext";
import {useCallback, useRef, useState} from "react";
import sortObject from "@santosch/helpers/sortObject";

export default function ScrollObserver(
    {
        children,
    } : {
        children?: ReactNode;
    }
): JSX.Element {

    const values = useRef<Record<string, number>>({});

    const [current, setCurrent] = useState<string|null>(null);

    const updateIntersection = useCallback(
        (key: string, intersecting: number) => {
            values.current[key] = intersecting;
            const sorted = sortObject(values.current);
            setCurrent(Object.keys(sorted)[0] ?? null);
        },
        []
    );

    return (
        <ScrollObserverContext.Provider value={
            {
                updateIntersection,
                current
            }
        }>
            {children}
        </ScrollObserverContext.Provider>
    );
}