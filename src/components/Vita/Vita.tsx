"use client";

import styles from './Vita.module.scss'
import Entry from "@santosch/components/Graph/Entry/Entry";
import Graph from "@santosch/components/Graph/Graph";
import Line from "@santosch/components/Graph/Line/Line";
import {COLORS} from './vitaColors';
import Check24 from "./Stations/Check24/Check24";
import Check24Teamlead from "./Stations/Check24/Check24Teamlead";
import Check24Senior from "./Stations/Check24/Check24Senior";
import Check24Professional from "./Stations/Check24/Check24Professional";
import Crea from "./Stations/Crea/Crea";
import CreaWebdev from "./Stations/Crea/CreaWebdev";
import CreaFreelancer from "./Stations/Crea/CreaFreelancer";
import CreaIntern from "./Stations/Crea/CreaIntern";
import Isan from "./Stations/Isan/Isan";
import IsanDev from "./Stations/Isan/IsanDev";
import IsanFounding from "./Stations/Isan/IsanFounding";
import Hsa from "./Stations/Hsa/Hsa";
import HsaBachelor from "./Stations/Hsa/HsaBachelor";
import HsaThesis from "./Stations/Hsa/HsaThesis";
import SchoolGymnasium from "./Stations/School/SchoolGymnasium";
import SchoolElementary from "./Stations/School/SchoolElementary";
import Birth from "./Stations/Other/Birth";
import School from "@santosch/components/Vita/Stations/School/School";


export default function Vita(
    {
        headlineProfessional = null,
        headlineSchool = null,
    }: {
        headlineProfessional?: JSX.Element | null,
        headlineSchool?: JSX.Element | null,
    }
): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Graph>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s4={<Line color={COLORS.CHECK} />}
                    >
                        {headlineProfessional}
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s4={<Line color={COLORS.CHECK} event="check-teamlead" />}
                    >
                        <Check24 />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} event="isan" />}
                        s4={<Line color={COLORS.CHECK}/>}
                        spaceBefore={true}
                    >
                        <Check24Teamlead />
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
                        <Check24Senior />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s3={<Line color={COLORS.ISAN} />}
                        s4={<Line color={COLORS.CHECK} event="check-professional"/>}
                        spaceBefore={true}
                    >
                        <Check24Professional />
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
                        <Crea />
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
                        <CreaWebdev />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} event="hsa" />}
                        s3={<Line color={COLORS.ISAN}/>}
                        s4={<Line color={COLORS.CREA}/>}
                        spaceBefore={true}
                    >
                        <CreaFreelancer />
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
                        <CreaIntern />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HSA} event="hsa-thesis" />}
                        s3={<Line color={COLORS.ISAN}/>}
                        s4={<Line color={COLORS.CREA}/>}
                        spaceBefore={true}
                    >
                        <Isan />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HSA} />}
                        s3={<Line color={COLORS.ISAN}/>}
                        s4={<Line color={COLORS.CREA} event="crea-freelancer" />}
                        spaceBefore={true}
                    >
                        <IsanDev />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HSA} />}
                        s3={<Line color={COLORS.ISAN}/>}
                        s4={<Line color={COLORS.CREA} event="crea-intern" />}
                        spaceBefore={true}
                    >
                        <IsanFounding />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.CREA} />}
                        s2={<Line color={COLORS.HSA} x={COLORS.CREA} />}
                        s3={<Line color={COLORS.ISAN} x={COLORS.CREA} />}
                        s4={<Line tl={COLORS.CREA} />}
                    />

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.HSA} event="hsa-bachelor" />}
                        s3={<Line color={COLORS.ISAN} />}
                    >
                        {headlineSchool}
                        <Hsa />
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
                        <HsaBachelor />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} tr={COLORS.SCHOOL} />}
                        s2={<Line bl={COLORS.SCHOOL} />}
                        s3={<Line color={COLORS.ISAN} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SCHOOL} event="school-highschool" />}
                        s3={<Line color={COLORS.ISAN} />}
                    >
                        <HsaThesis />
                    </Entry>


                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SCHOOL} />}
                        s3={<Line color={COLORS.ISAN} event="isan" />}
                        spaceBefore={true}
                    >
                        <School />
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
                        <SchoolGymnasium />
                    </Entry>
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} />}
                        s2={<Line color={COLORS.SCHOOL} event="school-elementary" />}
                        spaceBefore={true}
                    >
                        <SchoolElementary />
                    </Entry>

                    <Entry
                        s1={<Line color={COLORS.DEFAULT} br={COLORS.SCHOOL} />}
                        s2={<Line tl={COLORS.SCHOOL} />}
                    />
                    <Entry
                        s1={<Line color={COLORS.DEFAULT} event="birth" />}
                    >
                        <Birth />
                    </Entry>
                </Graph>
            </div>
        </div>
    );
}