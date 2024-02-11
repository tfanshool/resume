import SectionTitle from "../components/general/SectionTitle";
import React from "react";
import {EducationItem} from "../components/Education/EducationItem";
import {EducationData} from "../data/EducationData";


export interface EducationItemProps {
    School: string,
    SchoolWebsite: string,
    Degree: string,
    LogoSrc: string,
    Grade: string,
    Description: string,
    From: number,
    To: number,

}


export function Education() {
    return <section>
        <SectionTitle Name="Education"/>
        <div className={"flex flex-col gap-4 mt-2"}>
            {
                EducationData.map((education, index) => (
                    <EducationItem {...education}/>
                ))
            }
        </div>
    </section>;
}