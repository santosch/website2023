"use client";

import styles from './Vita.module.scss'
import Entry from "@santosch/components/Graph/Entry/Entry";
import Graph from "@santosch/components/Graph/Graph";
import Line from "@santosch/components/Graph/Line/Line";
import {COLORS} from './vitaColors';


export default function Vita(): JSX.Element {

    return (
        <div>
            <Graph>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s4={<Line color={COLORS.CHECK} />}
                >
                    Now
                </Entry>

                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s4={<Line color={COLORS.CHECK} event="check-teamlead" />}
                >
                    Teamlead
                </Entry>

                <Entry
                    s1={<Line color={COLORS.DEFAULT} event="isan" />}
                    s4={<Line color={COLORS.CHECK}/>}
                >
                    ISAN end
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} tr={COLORS.ISAN} />}
                    s2={<Line x={COLORS.ISAN} />}
                    s3={<Line bl={COLORS.ISAN} />}
                    s4={<Line color={COLORS.CHECK}/>}
                />


                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s3={<Line color={COLORS.ISAN} />}
                    s4={<Line color={COLORS.CHECK} event="check-senior"/>}
                >
                    Senior
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s3={<Line color={COLORS.ISAN} />}
                    s4={<Line color={COLORS.CHECK} event="check-professional"/>}
                >
                    Professional
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} br={COLORS.CHECK} />}
                    s2={<Line x={COLORS.CHECK} />}
                    s3={<Line color={COLORS.ISAN} x={COLORS.CHECK} />}
                    s4={<Line tl={COLORS.CHECK}/>}
                />

                <Entry
                    s1={<Line color={COLORS.DEFAULT} event="crea" />}
                    s3={<Line color={COLORS.ISAN}/>}
                >
                    creationell end
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} tr={COLORS.CREA} />}
                    s2={<Line x={COLORS.CREA} />}
                    s3={<Line color={COLORS.ISAN} x={COLORS.CREA} />}
                    s4={<Line bl={COLORS.CREA}/>}
                />
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s3={<Line color={COLORS.ISAN} />}
                    s4={<Line color={COLORS.CREA} event="crea-webdev"/>}
                >
                    creationell webdev
                </Entry>

                <Entry
                    s1={<Line color={COLORS.DEFAULT} event="hsa" />}
                    s3={<Line color={COLORS.ISAN}/>}
                    s4={<Line color={COLORS.CREA}/>}
                >
                    hsa end
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} tr={COLORS.HSA} />}
                    s2={<Line bl={COLORS.HSA} />}
                    s3={<Line color={COLORS.ISAN}/>}
                    s4={<Line color={COLORS.CREA}/>}
                />
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.HSA} event="hsa-bachelor" />}
                    s3={<Line color={COLORS.ISAN}/>}
                    s4={<Line color={COLORS.CREA}/>}
                >
                    hsa bachelor
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.HSA} event="hsa-thesis" />}
                    s3={<Line color={COLORS.ISAN}/>}
                    s4={<Line color={COLORS.CREA}/>}
                >
                    hsa thesis
                </Entry>

                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.HSA} />}
                    s3={<Line color={COLORS.ISAN}/>}
                    s4={<Line color={COLORS.CREA} event="crea-freelancer" />}
                >
                    creationell freelancer
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.HSA} />}
                    s3={<Line color={COLORS.ISAN}/>}
                    s4={<Line color={COLORS.CREA} event="crea-intern" />}
                >
                    creationell intern
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} br={COLORS.CREA} />}
                    s2={<Line color={COLORS.HSA} x={COLORS.CREA} />}
                    s3={<Line color={COLORS.ISAN} x={COLORS.CREA} />}
                    s4={<Line tl={COLORS.CREA} />}
                />

                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.HSA} event="hsa" />}
                    s3={<Line color={COLORS.ISAN} />}
                >
                    HSA start
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} br={COLORS.HSA} />}
                    s2={<Line tl={COLORS.HSA} />}
                    s3={<Line color={COLORS.ISAN} />}
                />

                <Entry
                    s1={<Line color={COLORS.DEFAULT} event="school"/>}
                    s3={<Line color={COLORS.ISAN} />}
                >
                    school end
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} tr={COLORS.SCHOOL} />}
                    s2={<Line bl={COLORS.SCHOOL} />}
                    s3={<Line color={COLORS.ISAN} />}
                />
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.SCHOOL} event="school-abitur" />}
                    s3={<Line color={COLORS.ISAN} />}
                >
                    Abitur
                </Entry>


                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.SCHOOL} />}
                    s3={<Line color={COLORS.ISAN} event="isan" />}
                >
                    ISAN start
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} br={COLORS.ISAN} />}
                    s2={<Line color={COLORS.SCHOOL} x={COLORS.ISAN} />}
                    s3={<Line tl={COLORS.ISAN} />}
                />

                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.SCHOOL} event="school-highschool" />}
                >
                    Gymnasium
                </Entry>
                <Entry
                    s1={<Line color={COLORS.DEFAULT} />}
                    s2={<Line color={COLORS.SCHOOL} event="school-elementary" />}
                >
                    Grundschule
                </Entry>

                <Entry
                    s1={<Line color={COLORS.DEFAULT} br={COLORS.SCHOOL} />}
                    s2={<Line tl={COLORS.SCHOOL} />}
                />
                <Entry
                    s1={<Line color={COLORS.DEFAULT} event="birth" />}
                >
                    Geburt
                </Entry>
            </Graph>
        </div>
    );
}