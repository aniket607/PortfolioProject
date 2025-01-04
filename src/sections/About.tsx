'use client'

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import ReactIcon from "@/assets/icons/react.svg";
import SqlIcon from "@/assets/icons/sql.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import ExpressIcon from "@/assets/icons/expressjs.svg";
import PrismaIcon from "@/assets/icons/prisma.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import CppIcon from "@/assets/icons/cpp.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from '@/assets/images/map.png';
import Image from "next/image";
import smileMemoji from '@/assets/images/memoji-smile.png'
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "SQL",
    iconType: SqlIcon,
  },
  {
    title: "NextJS",
    iconType: NextIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoIcon,
  },
  {
    title: "ExpressJS",
    iconType: ExpressIcon,
  },
  {
    title: "Prisma",
    iconType: PrismaIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
];

const hobbies = [
  {
    title: "Doodling",
    emoji: "✏️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gym",
    emoji: "💪🏻",
    left: "60%",
    top: "5%",
  },
  
  {
    title: "Socializing",
    emoji: "👥",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "10%",
    top: "35%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left: "65%",
    top: "45%",
  },
  {
    title: "Sleeping",
    emoji: "😴",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🕹️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintsRef = useRef(null);
  return (
  <div className="py-20 lg:py-28">
    <div className="container">
      <SectionHeader
      eyebrow="About Me"
      title="A Glimpse Into My World"
      description="Learn more about who I am, what I do, and what inspires me."
      />
      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px] p-0">
          <CardHeader 
          title="My ToolBox" 
          description="Discover the tools and technologies I leverage to create Amazing Projects!"
          className=""
          />
          <ToolboxItems items={toolBoxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
          <ToolboxItems items={toolBoxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
        </Card>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] flex flex-col  md:col-span-3 lg:col-span-2">
                  <CardHeader
                    title="Beyond the Code"
                    description="Explore my interest and hobbies beyond the digital realm."
                    className="px-6 py-6"
                  />
                  <div className="relative flex-1" ref={constraintsRef}>
                    {hobbies.map((hobby) => (
                      <motion.div key={hobby.title} 
                      className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 
                      rounded-full py-1.5 absolute"
                      style={{left: hobby.left, top: hobby.top}} 
                      drag dragConstraints={constraintsRef}
                      >
                        <span className="font-medium text-gray-950">{hobby.title} </span>
                        <span>{hobby.emoji}</span>
                      </motion.div>
                    ))}
                  </div>
          
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="Map" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20  ">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"/>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"/>
              <Image src={smileMemoji} alt='Memoji' className="size-20"/>
            </div>
          </Card>
        </div>
      </div>
     </div>
  </div>

)};
