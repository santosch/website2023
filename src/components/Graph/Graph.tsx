import type {ReactNode} from "react";
import GraphContext from "./GraphContext";
import {useState} from "react";

export default function Graph(
    {
        children,
    } : {
        children?: ReactNode;
    }
): JSX.Element {

    const [highlightedEvent, setHighlightedEvent] = useState<string|null>(null)

    return (
        <GraphContext.Provider value={
            {
                onHighlight: setHighlightedEvent,
                highlightedEvent
            }
        }>
            {children}
        </GraphContext.Provider>
    );
}