import portfolioPage from "@/assets/images/portfolioPage.png";
import nightlifePage from "@/assets/images/nightlife_mock.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import GithubIcon from "@/assets/icons/github.svg";
import Image from "next/image";
import { Card } from "@/components/Card";


const portfolioProjects = [
  
  {
    year: "CURRENTLY WORKING ON",
    title: "NightLife",
    githubLink: "https://github.com/aniket607/nightlife-app",
    liveLink: "",
    results: [
      { title: "Building a project which can solve real world problem" },
      { title: "Stay tuned for more updates and check git repo" },
    ],
    image: nightlifePage,
    isOngoing: true,

  },
  {
    year: "January 2025",
    title: "Portfolio Website",
    githubLink: "https://github.com/aniket607/PortfolioProject",
    liveLink: "https://www.aniketgoyal.tech/",
    results: [
      { title: "Developed fully SEO Optimised Site" },
      { title: "Achieved Lighthouse Score of 100" },
      { title: "Implemented Attractive Animations" },
    ],
    image: portfolioPage,
    isOngoing: false,
  },
];

export const ProjectsSection = () => {
  return (
  <section id="projects" className="pb-16 pt-20 lg:py-24">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Real-world Results
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        Featured Projects
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        See how I transformed concepts into engaging digital experience
      </p>
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        {portfolioProjects.map((project,projectIndex) => (
         <Card
         key={project.title}
         className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
         style={{
           top: `calc(64px + ${projectIndex * 37}px)`,
         }}
          >
            <div className="absolute inset-0 -z-10 opacity-5" 
            style={{
              backgroundImage:`url(${grainImage.src})`
            }}></div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16 ">
              <div className="lg:pb-16">
                <div className="flex items-center gap-2">
                      {project.isOngoing && (
                        <div className="bg-green-400 size-2.5 rounded-full relative">
                          <div className="bg-green-400 absolute inset-0 rounded-full animate-ping-large"></div>
                        </div>
                      )}
                      <span className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        {project.year}
                      </span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" /> 
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li className="flex gap-2 text-sm md:text-base text-white/50" key={result.title}>
                      <CheckCircleIcon className="size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.liveLink}>
                  <button className={`h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 
                    ${project.isOngoing?"bg-gray-400 text-gray-600 cursor-not-allowed":"bg-white text-gray-950"}`}>
                    <span>Live Site</span>
                    <ArrowUpRight className="size-4" />
                  </button>
                </a>
                <a href={project.githubLink} target="_blank">
                    <button className="bg-gray-900 text-white h-12 w-full md:w-auto px-6 lg:px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-2 md:ml-3">
                      <span>Source Code</span>
                      <GithubIcon className="size-6" />
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
              </div>
              <div>
                <Image src={project.image} 
                alt={project.title} 
                className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              </div>
          </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
)};
