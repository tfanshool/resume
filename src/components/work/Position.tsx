import React from "react";
import {ChevronRightIcon} from "@heroicons/react/20/solid";

export function Position(props: { startPosition: string | undefined, endPosition: string | undefined, currentlyWorking: boolean| undefined }) {

    const hasEndPosition = props.endPosition


    return <div className={"font-mono flex flex-row gap-2 items-center"}>
        {props.startPosition}
        {
            hasEndPosition &&
            <ChevronRightIcon className={"w-3 h-3"}/>
        }
        {
            hasEndPosition &&
            props.endPosition
        }
        {
            props.currentlyWorking && <span className="flex w-2 h-2 me-3 bg-indigo-400 rounded-full "></span>
        }
    </div>;
}