"use client";

import styles from './Vita.module.scss'
import Entry from "@santosch/components/Graph/Entry/Entry";
import Graph from "@santosch/components/Graph/Graph";
import {useCallback} from "react";
import Line from "@santosch/components/Graph/Line/Line";

export default function Vita(): JSX.Element {

    const onHighlight = useCallback((event: string | null): void => {
        console.log('lol', event);
    }, [])

    return (
        <div>
            <Graph onHighlight={onHighlight}>
                <Entry s1={<Line />} s2={<Line />} s3={<Line />} s4={<Line />}>
                    Test
                </Entry>
            </Graph>
        </div>
    );
}