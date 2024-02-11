import React from "react";
import {EducationItemProps} from "../../sections/Education";

export const EducationItem: React.FC<EducationItemProps> = (props) => {
    return (
        <div className={"flex flex-col md:flex-row items-start md:items-center justify-start gap-4"}>
            <img className={"w-12 h-12 rounded-full hidden md:block"}
                 src={props.LogoSrc}
                 alt={`${props.School} Logo`}/>
            <div className={"flex flex-col justify-between grow"}>
                <div className={"flex flex-col md:flex-row justify-between"}>
                    <a className={"text-xl font-medium hover:underline decoration-2 "}
                       href={props.SchoolWebsite}
                       target="_blank"
                       rel="noreferrer">
                        {props.School}
                    </a>
                    <div className="font-mono font-bold">
                        {props.From} - {props.To}
                    </div>
                </div>
                <div className={"flex flex-col md:flex-row justify-between"}>
                    <div className="font-mono text-zinc-800 text-wrap text-sm">{props.Degree}</div>
                    <div className="font-mono text-zinc-800 text-sm text-nowrap">[Grade: {props.Grade}]</div>
                </div>
            </div>
        </div>
    );
}