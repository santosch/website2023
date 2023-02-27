"use client";

import {useEffect, useRef} from "react";
import {GitgraphBranchOptions} from "@gitgraph/core";
import {createGitgraph, templateExtend, TemplateName} from "@gitgraph/js";

const vitaTemplate = templateExtend(TemplateName.Metro, {
   commit: {
       message: {
           // display: false,
           displayAuthor: false,
           displayHash: false,
       }
   },
   branch: {
       lineWidth: 4,
       spacing: 28,
       label: {
           display: false,
       },
   }
});

const getBranchOptions = (name: string, color: string): GitgraphBranchOptions<any> => {
    return {
        name: name,
        style: {
            color: color,
        },
        commitDefaultOptions: {
            style: {
                spacing: 2000,
                dot: {
                    strokeColor: color,
                    strokeWidth: 2,
                    color: '#212121',
                }
            }
        }
    };
}


export default function VitaGraph(): JSX.Element {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current!;
        const gitGraph = createGitgraph(node, {
            template: vitaTemplate,
        });

        const live = gitGraph.branch(getBranchOptions('live', '#00bbff'));
        live.commit('born');

        const school = live.branch(getBranchOptions('school', '#c8d28b'));
        school.commit('Grundschule');
        school.commit('Gymnasium');

        live.commit('Gründung I-SAN')
        const isan = live.branch(getBranchOptions('isan', '#0097ab'));
        isan.commit('Gründung I-SAN.de');

        school.commit('Abitur');
        live.merge(school);

        const university = live.branch(getBranchOptions('university', '#ff9800'));
        university.commit('Interaktive Medien')

        live.commit('Start bei creationell');
        const creationell = live.branch(getBranchOptions('creationell', '#ddde3a'))
        creationell.commit('Praktikum')
        creationell.commit('Freelancer')

        university.commit('Bachelorarbeit')
        university.commit('Bachelor')
        live.merge(university);

        creationell.commit('Webentwickler');
        live.merge(creationell);

        const check24 = live.branch(getBranchOptions('check24', '#084085'));
        check24.commit('Professional');
        check24.commit('Senior');

        live.merge(isan);

        check24.commit('Stellv. Teamleiter');

        live.commit('now');

        return () => {
            node.innerHTML = '';
        }
    }, [])

    return (
        <div ref={ref} />
    );
}