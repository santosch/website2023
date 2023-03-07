
import CircleChart from "@santosch/components/CircleChart/CircleChart";
import styles from "./Skills.module.scss";

export default function Skills(): JSX.Element {


    return (
        <div>
            Skills

            <div className={styles.row}>
                <div className={styles.column}>
                    <CircleChart
                        value={90}
                        label="Frontend"
                        height={200}
                    />

                </div>
                <div className={styles.column}>
                    <CircleChart
                        value={70}
                        label="Backend"
                        height={200}
                    />

                </div>
                <div className={styles.column}>
                    <CircleChart
                        value={40}
                        label="Design"
                        height={200}
                    />

                </div>
            </div>


        </div>
    );
}