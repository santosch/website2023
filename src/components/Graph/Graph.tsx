import {createContext, ReactNode} from "react";

export const GraphContext = createContext({
    onHighlight: (event: string | null): void => {
        console.info(`${event ?? 'nothing'} highlighted`);
    }
})

export default function Graph(
    {
        children,
        onHighlight
    } : {
        children?: ReactNode;
        onHighlight: (event: string | null) => void;
    }): JSX.Element {
    return (
        <GraphContext.Provider value={{onHighlight}}>
            {children}
        </GraphContext.Provider>
    );
}