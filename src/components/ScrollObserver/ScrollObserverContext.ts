import {createContext} from "react";

const ScrollObserverContext = createContext<{
    current?: string | null;
    updateIntersection?: (key: string, intersecting: number) => void;
}>({});

export default ScrollObserverContext;