import React from 'react';
import {WorkExperince} from "./sections/WorkExperince";
import {About} from "./sections/About";
import {Education} from "./sections/Education";
import {Skills} from "./sections/Skills";

function App() {
    return (
        <main className={"bg-zinc-50 min-h-screen "}>
            <div className={"mx-5  md:mx-32 lg:mx-60 xl:mx-96    p-4 pt-14 flex flex-col gap-8"}>
                <About/>
                <WorkExperince/>
                <Education/>
                <Skills/>
            </div>
        </main>
    );
}


export default App;