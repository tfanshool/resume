import React from "react";
import SectionTitle from "../components/general/SectionTitle";
import WorkExperinceItem from "../components/work/WorkExperinceItem";
import {workExperienceData} from "../data/WorkExperienceData";


export function WorkExperince() {
    return <section>
        <SectionTitle Name="Work Experience"/>
        <div className={"flex flex-col gap-4 mt-2"}>
            {workExperienceData.map((experience, index) => (
                <WorkExperinceItem key={index} {...experience} />
            ))}
        </div>
    </section>;

}