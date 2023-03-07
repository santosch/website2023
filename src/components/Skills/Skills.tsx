
import CircleChart from "@santosch/components/CircleChart/CircleChart";
import styles from "./Skills.module.scss";
import RadarChart from "@santosch/components/RadarChart/RadarChart";

export default function Skills(): JSX.Element {


    return (
        <div className={styles.container}>
            Skills

            <div className={styles.row}>
                <div className={styles.chartContainer}>
                    <CircleChart
                        value={90}
                        label="Frontend"
                        height={120}
                    />
                </div>
                <div className={styles.radarContainer}>
                    <RadarChart
                        values={{
                            CSS: 90,
                            JS: 90,
                            React: 88,
                            Redux: 79,
                            NextJS: 29,
                            jQuery: 91,
                            KnockoutJS: 89,
                        }}
                        selected="NextJS"
                        height={300}
                    />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.chartContainer}>
                    <CircleChart
                        value={70}
                        label="Backend"
                        height={120}
                    />

                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.chartContainer}>
                    <CircleChart
                        value={40}
                        label="Design"
                        height={120}
                    />

                </div>
            </div>


        </div>
    );
}