import {createContext} from "react";

const GraphContext = createContext<{
    highlightedEvent?: string | null;
    onHighlight?: (event: string | null) => void;
}>({});

export default GraphContext;