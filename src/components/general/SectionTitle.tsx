import React from "react";


interface SectionTitleProps {
    Name: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
    return <div className={"font-sans font-bold text-2xl"}>
        {props.Name}
    </div>;
}
export default SectionTitle;