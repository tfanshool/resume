import SectionTitle from "../components/general/SectionTitle";
import React from "react";
import {SkillsData} from "../data/SkillsData";



export function Skills() {
    return <section>
        <SectionTitle Name="Skills"/>
        <div className={"flex flex-row flex-wrap mt-2 gap-1"}>
            {
                SkillsData.map((skill, index) => (
                    <span className="bg-zinc-600 text-zinc-100 text-sm font-mono font-medium px-2.5 py-0.5 rounded cursor-pointer select-all">{skill}</span>
                ))
            }
        </div>
    </section>;
}