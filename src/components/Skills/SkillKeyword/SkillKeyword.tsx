import {useCallback} from "react";

export default function SkillKeyword(
    {
        keyword,
        rating,
        onSelect,
        className,
    }: {
        keyword: string,
        rating: number,
        onSelect: (selected: string | null) => void,
        className?: string,
    }
): JSX.Element {

    const onMouseover = useCallback(() => {
        onSelect(keyword);
    }, [keyword, onSelect]);

    const onMouseout = useCallback(() => {
        onSelect(null);
    }, [onSelect]);

    return (
        <span
            style={{fontSize: 6 + (rating / 100) * 30 }}
            onMouseOver={onMouseover}
            onMouseOut={onMouseout}
            className={className}
        >
            {keyword}
        </span>
    )
}