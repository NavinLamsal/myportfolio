import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Skills from '@/components/skills'
import Projects from '@/components/projects'



export default function Home() {
  return (
    <main>
     <Header/>
     <Hero/>
     <Skills/>
     <Projects/>
   
      
    </main>
  )
}
