import React from 'react'
import { Icon } from "@iconify/react";
import Card from './UI/card';


const Skills = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col md:flex-row gap-5 mx-10 px-10 items-center justify-evenly'>
      <div className="md:w-[50%]">
        <div className="relative mx-2 mb-4">
            <p className="text-lg font-semibold"> My Skills</p>
            <div className=" absolute -top-2 -left-2 h-12 w-24 border border-primary rounded-[50%]"></div>
        </div>
        <div className="normal-case">
            <h1 className="text-4xl font-bold tracking-wider">Why Hire Me For Your next<span className='text-primary'>Projects</span> ?</h1>
            <p>My ability to bringing Ideas to Life with Problem-Solving skill, Dedication, and Passion in this field</p>
        </div>
        <div>
            <button className="btn bg-primary text-white font-semibold tracking-wider my-4 hover:bg-transparent hover:text-primary hover:border-primary ">Hire me</button>
        </div>
    </div>
        <div className='grid grid-cols-2 items-center gap-4'>
         <div className="grid gap-10">
         <Card
        icon="🚀"
        heading="Web Development"
        description="Crafting seamless web experiences with creativity and precision."
      />
         <Card
        icon="🚀"
        heading="Web Development"
        description="Crafting seamless web experiences with creativity and precision."
      />
        </div>
        <div>
         <Card
        icon="🚀"
        heading="Web Development"
        description="Crafting seamless web experiences with creativity and precision."
      />
            </div>    
        </div>    
    <div>

    </div>
      </div>
    </div>
  )
}

export default Skills
