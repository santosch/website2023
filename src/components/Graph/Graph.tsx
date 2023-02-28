import {createContext, ReactNode} from "react";

export const GraphContext = createContext<{
   highlightedEvent?: string;
   onHighlight?: (event: string | null) => void;
}>({});

export default function Graph(
    {
        children,
        onHighlight,
        highlightedEvent,
    } : {
        children?: ReactNode;
        onHighlight?: (event: string | null) => void;
        highlightedEvent?: string;
    }): JSX.Element {
    return (
        <GraphContext.Provider value={{onHighlight, highlightedEvent}}>
            {children}
        </GraphContext.Provider>
    );
}