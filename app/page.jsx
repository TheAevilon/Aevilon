"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { FaGithub, FaMastodon } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger, SplitText)
export default function Home() {
  useGSAP(() => {
    const aboutSplit = new SplitText(".aboutHeadding", { type: "chars, words" });
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
  }, []);

  return (
    <>
      <div className="h-screen duration-200 snap-y snap-mandatory scroll-container overflow-y-scroll">
        <div className="snap-start w-full h-screen flex flex-col items-center justify-center">
          <h1 className="title text-9xl" id="headding">Aevilon</h1>
        </div>

        <div id="aboutUs" className="text-start  h-screen snap-start flex flex-col p-14">
          <h1 className="text-6xl font-bold aboutHeadding my-32  w-full text-center">About</h1>
          <div className="flex  flex-col gap-6">
            <div className='aboutQuestions'>
              <h2 className="text-4xl font-bold">What is Aevilon?</h2>
              <p className="text-2xl">A name we liked, and we think it sounds pretty cool.</p>
            </div>
            <div className='aboutQuestions'>
              <h2 className="text-4xl font-bold">Why Aevilon?</h2>
              <p className="text-2xl">
                Because we wanted a place to share and showcase our projects.
                <br />
                Aevilon is a place for our projects — for now, and maybe for whatever comes next.
              </p>
            </div>
          </div>
        </div>

        <div className="text-3xl gap-3 m-2 h-[5vh] flex fixed bottom-0 right-0">
          <FaGithub />
          <FaMastodon />
        </div>
      </div>
    </>
  );
}

