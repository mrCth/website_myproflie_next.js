"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import CursorAnimation from './CursorAnimation'; // Adjust the path if necessary

export default function Home() {
  useEffect(() => {
    // Disable right-click context menu
    const disableContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', disableContextMenu);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);

  return (
    <div className="relative">
      <CursorAnimation />
      <div className="container mt-2 left-2 pt-5 text-6xl">
        <h1 className="ml-40 mt-14 text-[#F7E7DC] font-mono btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded">
          WELCOME TO MY PROFILE!
        </h1>
        <div className="absolute right-36 top-10 m-5">
          <a href="https://dodeep.co" target="_blank" rel="noopener noreferrer">
            <Image src="/image/images.jpg" className="rounded-full" width={100} height={100} alt="Profile Image" />
          </a>
        </div>
        <div className="navbarw">
          <ul className="menu pt-12 text-lg ml-40 text-[#F7E7DC] space-y-5">
            <li className="mt-5 text-xl hover-underline-animation font-mono w-14">
              <a href="#">Home</a>
            </li>
            <li className="mt-5 text-xl hover-underline-animation font-mono w-20">
              <a href="/about">About</a> {/* Use Link for internal navigation */}
            </li>
            <li className="mt-5 text-xl hover-underline-animation font-mono w-20 ">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="info mr-4 space-x-1 top-10">
        <div className="flex justify-end mt-80 mr-48 space-x-5 text-[#F7E7DC]">
          <h2 className="1name mr-5 text-2xl font-mono">My Name: Nobphawit Audomri</h2>
          <p className="2name text-2xl top-0 font-mono">I'm a full stack developer from RSU.</p>
        </div>
      </div>

      <div className="container Left-5 max-w-full content-center -20 text-center text-[#F7E7DC] ">
        <div className="show project p-8 flex flex-col items-center justify-normal font-mono">
          <h1 className="text-xl text-center mb-4 mt-6 font-mono ">Project</h1>
          <div className="project-card flex flex-col items-center">
            <div className="Template grid grid-cols-4 gap-8 mt-6">
              <div className="project-card flex flex-col items-center  hover-underline-animation">
                <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
                  <Image src="/image/sponge-bob-to-do.gif" className="rounded-xl" width={300} height={200} alt="Project Image" />
                  <h3 className="project-title mt-4 ">Project Title 1</h3>
                  <p className="project-description mt-2">Project Description 1</p>
                </a>
              </div>

              <div className="project-card flex flex-col items-center  hover-underline-animation">
                <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
                  <Image src="/image/sponge-bob-to-do.gif" className="rounded-xl" width={300} height={200} alt="Project Image" />
                  <h3 className="project-title mt-4 ">Project Title 2</h3>
                  <p className="project-description mt-2">Project Description 2</p>
                </a>
              </div>

              <div className="project-card flex flex-col items-center  hover-underline-animation">
                <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">
                  <Image src="/image/sponge-bob-to-do.gif" className="rounded-xl" width={300} height={200} alt="Project Image" />
                  <h3 className="project-title mt-4">Project Title 3</h3>
                  <p className="project-description mt-2">Project Description 3</p>
                </a>
              </div>

              <div className="project-card flex flex-col items-center hover-underline-animation">
                <a href="https://example.com/project4" target="_blank" rel="noopener noreferrer">
                  <Image src="/image/sponge-bob-to-do.gif" className="rounded-xl" width={300} height={200} alt="Project Image" />
                  <h3 className="project-title mt-4 ">Project Title 4</h3>
                  <p className="project-description mt-2">Project Description 4</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-[#F7E7DC] mt-10">
        <p>�� 2023 My Profile. All rights reserved.</p>
        <div className="social-media  flex flex-row ml-8 p-8">
          
          
          <a href="https://github.com/mrCth" target="_blank" rel="noopener noreferrer">
            <Image src="/image/github-mark-white.png" className="h-10 w-10" alt="GitHub" width={100} height={100}/>
          </a>
          <a href="https://www.linkedin.com/in/naphawit-audomsri-535097262/" target="_blank" rel="noopener noreferrer ">
            <Image src="/image/linkedin_icon.png" className="h-10 w-10 ml-5" alt="LinkedIn" width={100} height={100} />
          </a>
        </div>
      </footer>
    </div>
  );
}
