import React from "react";
import {Position} from "./Position";

export interface WorkExperinceItemProps {
    Company: string,
    CompanySite?: string,
    IsRemote?: boolean,
    StartPosition?: string,
    EndPosition?: string,
    StartYear: number,
    EndYear: string,
    Description?: string
    CurrentlyWorkingHere?: boolean

}

const WorkExperinceItem: React.FC<WorkExperinceItemProps> = (props) => {
    return <div className={"flex flex-col "}>
        <div className={"flex flex-row justify-between align-middle"}>
            <div className="flex flex-row gap-2 items-center">
                <a href={props.CompanySite}
                   target={"_blank"}
                   className={"text-lg font-bold inline-flex items-center gap-1 hover:underline decoration-2 decoration-black"}
                   rel="noreferrer">{props.Company} </a>
                {
                    props.IsRemote &&
                    <span className="bg-gray-200 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">
                            Remote
                        </span>
                }
            </div>
            <div className={"font-mono font-bold"}>{props.StartYear} - {props.EndYear}</div>
        </div>
        <Position startPosition={props.StartPosition} endPosition={props.EndPosition} currentlyWorking={props.CurrentlyWorkingHere}/>
        <div className={"mt-1 text-sm font-mono text-zinc-600 text-pretty"}>{props.Description}</div>
    </div>;
}
export default WorkExperinceItem;