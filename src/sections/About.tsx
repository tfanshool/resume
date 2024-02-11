import React from "react";
import SectionTitle from "../components/general/SectionTitle";

export function About() {
    return <section>
        <SectionTitle Name="About"/>
        <div className={"font-mono text-sm text-justify text-pretty text-zinc-800 mt-2"}>
            As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively,
            ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript,
            React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around
            the world.
        </div>
    </section>;
}