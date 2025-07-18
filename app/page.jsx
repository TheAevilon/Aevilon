"use client"
import { projects } from '@/components/arrays/projects';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Image from 'next/image';
import { FaGithub, FaMastodon } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Home() {
  useGSAP(() => {
    const aboutSplit = new SplitText(".aboutHeadding", { type: "chars, words" });
    const projectsSplit = new SplitText(".projectHeadding", { type: "chars, words" });
    const paraSplit = new SplitText(".aboutQuestions", { type: "lines" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutUs",
        scroller: ".scroll-container",
        start: "top center",
        toggleActions: "play none none none",
      }
    });
    tl.from(aboutSplit.chars, {
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.03,
      duration: .5,
    }).from(
      paraSplit.lines,
      {
        yPercent: 50,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.1,
        duration: 1,
      }, "+=0")

    const tlProjectsPage = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        scroller: ".scroll-container",
        start: "top center",
        toggleActions: "play none none none",
      }
    });
    tlProjectsPage.from(projectsSplit.chars, {
      yPercent: 100,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.03,
      duration: .5,
    })
      .from(".projectContainer", {
        yPercent: 50,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.1,
        duration: .5,
      })


  }, []);

  return (
    <>
      <div className="h-screen duration-200 snap-y snap-mandatory scroll-container overflow-y-scroll">


        <div className="snap-start w-full h-screen flex flex-col items-center justify-center">
          <h1 className="title text-8xl lg:text-9xl" id="headding">Aevilon</h1>
        </div>


        <div id="aboutUs" className="text-start  h-screen snap-start flex flex-col p-14">
          <h1 className="md:text-6xl text-5xl font-bold aboutHeadding my-12 w-full text-center">About</h1>
          <div className="flex h-[50vh] md:justify-center flex-col gap-6">
            <div className='aboutQuestions'>
              <h2 className="md:text-4xl text-3xl font-bold">What is Aevilon?</h2>
              <p className="md:text-2xl text-xl">A name we liked, and we think it sounds pretty cool.</p>
            </div>
            <div className='aboutQuestions'>
              <h2 className="md:text-4xl text-3xl font-bold">Why Aevilon?</h2>
              <p className="md:text-2xl text-xl">
                Because we wanted a place to share and showcase our projects.
                <br />
                Aevilon is a place for our projects — for now, and maybe for whatever comes next.
              </p>
            </div>
          </div>
        </div>

        <div id='projects' className="text-start h-screen snap-start flex flex-col p-14">
          <h1 className="md:text-6xl text-5xl font-bold projectHeadding my-12 w-full text-center">Projects</h1>
          <div className='grid overflow-x-scroll w-full grid-rows-[1fr]  grid-flow-col forced-color-adjust-auto' >
            {projects.map((item, index) =>
            (<div className=' projectContainer flex flex-col gap-2 items-center sm:w-auto text-black w-[40vw] p-2 bg-gray-400 rounded-2xl m-3 ' key={index}>
              <Image className='rounded-2xl' src={item.image} height={400} width={200} alt={item.title} />
              <h1 className='font-semibold'>{item.title}</h1>
              <h2>{item.description}</h2>
            </div>))}
          </div>
        </div>

        <div className="text-3xl gap-3 m-2 h-[5vh] flex fixed bottom-0 right-0">
          <a href={'https://github.com/TheAevilon/'} target='_blank' ><FaGithub /></a>
          <a href={'https://mastodon.social/@aevilon'} target='_blank'> <FaMastodon /></a>
        </div>
      </div>
    </>
  );
}

