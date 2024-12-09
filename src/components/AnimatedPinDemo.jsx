

"use client";

import React from "react";
import { PinContainer } from "./ui/3d-pin";
import projectData from "./data/ProjectData";


export function AnimatedPinDemo() {
  return (
    <div className="mt-10 mb-40 w-full flex lg:items-center lg:justify-center flex-col lg:flex-row gap-10">
      {projectData.map((project, index) => (
        <PinContainer key={index} title={project.title} href={project.link}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {project.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 line-clamp-2">{project.description}</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
             <img src={project.image} alt="" className="w-full h-full"/>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}

