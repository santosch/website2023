"use client";

import styles from "./Skills.module.scss";
import {Fragment, useState} from "react";
import SkillKeyword from "@santosch/components/Skills/SkillKeyword/SkillKeyword";
import dynamic from 'next/dynamic'
import classNames from "classnames";
import sortObjectAsPyramid from "@santosch/helpers/sortPyramid";

const LightCircleChart = dynamic(
    () => import("@santosch/components/CircleChart/CircleChart"),
    {
        ssr: false,
        loading: () => <div className={styles.circleChartDummy} />
    }
);

const DarkCircleChart = dynamic(
    () => import("@santosch/components/CircleChart/CircleChart"),
    {
        ssr: false,
        loading: () => <div className={classNames(styles.circleChartDummy, styles.circleChartDummy__dark)} />
    }
);

const RadarChart = dynamic(
    () => import("@santosch/components/RadarChart/RadarChart"),
    {
        ssr: false,
        loading: () => <div className={styles.radarChartDummy} />
    }
);

export default function Skills(
    {
        title,
        categories,
        dark = false,
    }: {
        title: string,
        categories: Record<string, number>,
        dark?: boolean,
    }
): JSX.Element {

    const values = Object.values(categories);
    const average = Math.round(values.reduce((prev, cur) => prev + cur, 0) / values.length);
    const [selected, setSelected] = useState<string | null>(null);
    const CircleChart = dark ? DarkCircleChart : LightCircleChart;

    return (
        <div className={styles.container}>

            <div className={styles.circleContainer}>
                <CircleChart
                    value={average}
                    height={120}
                    centerBackground={dark ? '#161616' : '#212121'}
                />
                <div className={styles.circleTitle}>
                    {title}
                </div>
            </div>
            <div className={styles.keywords}>
                {Object.keys(sortObjectAsPyramid(categories)).map((key, index) => {
                    return (
                        <Fragment key={key}>
                            {!!index && (index % 3 === 0) &&
                                <br/>
                            }
                            <SkillKeyword
                                key={key}
                                keyword={key}
                                rating={categories[key]}
                                onSelect={setSelected}
                                className={classNames(
                                    styles.keyword,
                                    {
                                        [styles.keyword__selected]: key === selected,
                                    }
                                )}
                            />
                            {' '}
                        </Fragment>
                    );
                })}
            </div>
            <div className={styles.radarContainer}>
                <RadarChart
                    values={categories}
                    height={285}
                    selected={selected}
                    onSelect={setSelected}
                />
            </div>


        </div>
    );
}