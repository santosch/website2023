"use client";

import CircleChart from "@santosch/components/CircleChart/CircleChart";
import styles from "./Skills.module.scss";
import RadarChart from "@santosch/components/RadarChart/RadarChart";
import {useState} from "react";
import SkillKeyword from "@santosch/components/Skills/SkillKeyword/SkillKeyword";

export default function Skills(
    {
        title,
        categories,
    }: {
        title: string,
        categories: Record<string, number>
    }
): JSX.Element {

    const values = Object.values(categories);
    const average = Math.round(values.reduce((prev, cur) => prev + cur, 0) / values.length);
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className={styles.container}>

            <div className={styles.chartContainer}>
                <CircleChart
                    value={average}
                    label={title}
                    height={120}
                />
            </div>
            <div className={styles.radarContainer}>
                <RadarChart
                    values={categories}
                    height={300}
                    selected={selected}
                    onSelect={setSelected}
                />
            </div>
            <div className={styles.keywords}>
                {Object.keys(categories).map((key) => {
                    return (
                        <SkillKeyword
                            key={key}
                            keyword={key}
                            rating={categories[key]}
                            onSelect={setSelected}
                        />
                    );
                })}
            </div>


        </div>
    );
}