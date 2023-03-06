import {useCallback, useContext} from "react";
import GraphContext from "./GraphContext";

export default function useHighlight(eventKey: string, partialMatch = false): [
    isHighlighted: boolean,
    highlight: () => void,
    unHighlight: () => void,
] {

    const {onHighlight, highlightedEvent} = useContext(GraphContext);

    const highlight = useCallback(() => {
        onHighlight?.(eventKey);
    }, [onHighlight, eventKey]);

    const unHighlight = useCallback(() => {
        onHighlight?.(null);
    }, [onHighlight]);

    const isHighlighted = !!highlightedEvent && (partialMatch ? (
        eventKey.startsWith(highlightedEvent) || highlightedEvent.startsWith(eventKey)
    ) : (
        eventKey.startsWith(highlightedEvent)
    ));

    return [isHighlighted, highlight, unHighlight]
}