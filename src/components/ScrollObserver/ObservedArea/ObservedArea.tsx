import {ReactNode, useCallback, useContext} from "react";
import ScrollObserverContext from "../ScrollObserverContext";
import {InView} from "react-intersection-observer";

export default function ObservedArea(
    {
        children,
        id
    } : {
        children?: ReactNode;
        id: string;
    }
): JSX.Element {

    const {updateIntersection} = useContext(ScrollObserverContext);

    const onIntersectionChange = useCallback((inView: boolean, entry: IntersectionObserverEntry) => {
        updateIntersection?.(id, entry.intersectionRatio);
    }, [id, updateIntersection])

    return (
        <InView
            as="div"
            id={id}
            onChange={onIntersectionChange}
            threshold={[0, 0.2, 0.4, 0.6, 0.8, 1]}
        >
            {children}
        </InView>
    );
}