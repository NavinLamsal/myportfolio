import Image from "next/image";
import React from "react";
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <div className="relative">
   <div className="flex h-[90vh] flex-col-reverse md:flex-row gap-5 mx-10 px-10 items-center justify-evenly">
    <div className="md:w-[50%]">
        <div className="relative mx-2 mb-4">
            <p className="text-lg font-semibold">Welcome</p>
            <div className=" absolute -top-2 -left-2 h-12 w-24 border border-primary rounded-[50%]"></div>
        </div>
        <div className="normal-case">
            <h1 className="text-4xl font-bold tracking-wider">My Journey is <span className="text-primary">Enriched</span> with Numerous <span className="text-primary">Creative Design</span> and Experience</h1>
            <p>I&apos;m Navin, a Web Developer. I&apos;ve been helping businesses to Solve their problems with my design</p>
        </div>
        <div>
            <button className="btn bg-primary text-white font-semibold tracking-wider my-4 hover:bg-transparent hover:text-primary hover:border-primary ">Let&apos;s Talk</button>
        </div>
        
    </div>
    <div className="relative">
        <Image src="/profilepic.png" width={250} height={250} alt="profile" className=""/>
        <div className="h-[220px] w-[250px] bg-primary absolute top-28 -z-20 "></div>
        <div className="h-[220px] w-[250px] absolute top-36 -left-8  bg-transparent border-2 border-black -z-10"></div>
        <div className="absolute flex gap-3 top-44 -right-36 rotate-90 tracking-widest">
            <p className="tracking-widest"> FOLLOW ON </p>
            <Icon icon="skill-icons:instagram" className="text-2xl -rotate-90"/> 
            <Icon icon="skill-icons:linkedin" className="text-2xl -rotate-90" /> 
            <Icon icon="fa6-brands:square-x-twitter" className="text-2xl -rotate-90" />
        </div>
    </div>
    <div className=" absolute top-[18rem] left-[62rem] h-2 w-2 -z-10 rounded-full bg-red"></div>
    <div className=" absolute top-[5rem] -left-[12rem] h-2 w-2 -z-10 rounded-full bg-red"></div>
    <div className=" absolute top-[28rem] left-[44rem] h-4 w-4 -z-10 rounded-full bg-red"></div>
    <div className=" absolute top-[13rem] left-[87rem] h-2 w-2 -z-10 rounded-full bg-red"></div>
    <div className=" absolute top-[20rem] -left-[3rem] h-2 w-2 -z-10 rounded-full bg-red"></div>
    <div className=" absolute top-[9rem] left-[71rem] h-2 w-2 -z-10 rounded-full bg-orange"></div>
    <div className=" absolute top-[31rem] -left-[18rem] h-2 w-2 -z-10 rounded-full bg-orange"></div>
    <div className=" absolute top-[3rem] left-[23rem] h-4 w-4 -z-10 rounded-full bg-orange"></div>
    <div className=" absolute top-[25rem] left-[56rem] h-2 w-2 -z-10 rounded-full bg-orange"></div>
    <div className=" absolute top-[7rem] left-[38rem] h-2 w-2 -z-10 rounded-full bg-orange"></div>
    <div className=" absolute top-[16rem] left-[9rem] h-2 w-2 -z-10 rounded-full bg-blue-500"></div>
    <div className=" absolute top-[30rem] -left-[8rem] h-2 w-2 -z-10 rounded-full bg-blue-500"></div>
    <div className=" absolute top-[1rem] left-[79rem] h-4 w-4 -z-10 rounded-full bg-blue-500"></div>
    <div className=" absolute top-[24rem] left-[32rem] h-2 w-2 -z-10 rounded-full bg-blue-500"></div>
    <div className=" absolute top-[11rem] left-[66rem] h-2 w-2 -z-10 rounded-full bg-blue-500"></div>
    <div className=" absolute top-[27rem] -left-[15rem] h-2 w-2 -z-10 rounded-full bg-green-400"></div>
    <div className=" absolute top-[8rem] left-[5rem] h-2 w-2 -z-10 rounded-full bg-green-400"></div>
    <div className=" absolute top-[22rem] left-[53rem] h-4 w-4 -z-10 rounded-full bg-green-400"></div>
    <div className=" absolute top-[14rem] left-[81rem] h-2 w-2 -z-10 rounded-full bg-green-400"></div>
    <div className=" absolute top-[2rem] left-[17rem] h-2 w-2 -z-10 rounded-full bg-green-400"></div>
   </div>
   </div>
  );
};

export default Hero;
