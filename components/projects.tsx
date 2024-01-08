import React from 'react'
import { Icon } from '@iconify/react';
import ProjectShowcase from './projectshowcase';

const Projects = () => {
  return (
    <div className="relative">
    <div className="flex flex-col md:flex-row gap-5 mx-10 px-10 items-center justify-evenly">
      <div className="md:w-[50%]">
        <div className="relative mx-2 mb-4">
          <p className="text-lg font-semibold">Portfolio</p>
          <div className=" absolute -top-2 -left-2 h-12 w-24 border border-primary rounded-[50%]"></div>
        </div>
        <div className="normal-case">
          <h1 className="text-4xl font-bold tracking-wider">
            My creative Works and Latest<span className="text-primary">Projects</span> 
          </h1>
          <p>
           I have Highligthed some of my Latest projects to share with you
          </p>
        </div>
        <div>
          <button className="btn bg-primary text-white font-semibold tracking-wider my-4 hover:bg-transparent hover:text-primary hover:border-primary normal-case ">
            View More on <Icon icon="devicon:github" />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 items-center'>
        <ProjectShowcase/>
        <ProjectShowcase/>
        <ProjectShowcase/>
      </div>
      </div>
    </div>
  )
}

export default Projects
