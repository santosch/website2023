import {ReactNode, useCallback, useContext} from "react";
import ScrollObserverContext from "../ScrollObserverContext";
import {InView} from "react-intersection-observer";

export default function ObservedArea(
    {
        children,
        key
    } : {
        children?: ReactNode;
        key: string;
    }
): JSX.Element {

    const {updateIntersection} = useContext(ScrollObserverContext);

    const onIntersectionChange = useCallback((inView: boolean, entry: IntersectionObserverEntry) => {
        updateIntersection?.(key, entry.intersectionRatio);
    }, [key, updateIntersection])

    return (
        <InView as="div" onChange={onIntersectionChange}>
            {children}
        </InView>
    );
}