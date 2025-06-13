'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import NavBar from './components/navbar';

export default function Home() {
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const spotlight = document.querySelector('.spotlight-overlay') as HTMLElement;
            if (spotlight) {
                spotlight.style.setProperty('--x', `${e.clientX}px`);
                spotlight.style.setProperty('--y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <NavBar/>
            <div className="spotlight-overlay"/>
            <div className="header-section">
                <div className="particles"/>
                <div className="background"/>
                <div className="background-beam"/>
                <div className="background-beam-2"/>
                <div className="header-column l">
                    <h1 className="slide-from-left-a">Hi, I'm <br/><span className="gradient-text">Adrian Tran</span></h1>
                    <h3 className="slide-from-left-b">Software Engineer &nbsp;| &nbsp;CS @ UT Dallas</h3>
                    <div className="icon-row">
                        <a href="https://www.github.com/avt05/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="icon" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
                        <a href="https://www.linkedin.com/in/adrianvtran/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a>
                        <a href="mailto:adrianvtran@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path></svg></a>
                        </div>
                </div>
                <div className="header-column r">
                    <img src="images/aquarium.jpg" className="image-circle" alt="Aquarium"/>
                </div>
            </div>
            <div className="gradient-separator"/>
            <div className="body-section">
                <div className="body-column">
                    <h2 className="gradient-text" id="about">About Me</h2>
                    <p>My name is Adrian Tran, and I'm pursuing a B.S. in computer science at the <span className="highlight">University of Texas at Dallas</span>.
                    As part of ACM's research and  divisions, I had the opportunity to learn frontend design, computer vision, and machine learning.</p>
                    <p>Outside of school, I also enjoy art and volleyball! In my free time, I've been developing <Link href="/artwork#cuboids" className="link highlight">Cuboids</Link>, a pixel art resource pack for Minecraft.</p>
                    <div className="spacer"/>
                    <h2 className="gradient-text" id="projects">Featured Projects</h2>
                    <div className="body-grid">
                        <a href="https://github.com/acm-projects/TalentTrade" target="_blank" className="card">
                            <img src="images/talenttrade.svg" className="card-image" draggable="false" alt="TalentTrade"/>
                            <div className="card-header">TalentTrade<span className="card-date">AUG 2024 – NOV 2024</span></div>
                            <div className="card-body">Online learning web app to connect with university students. Features profile customization, Zoom-integrated video lessons, and a robust AI-powered search engine to find other users.</div>
                            <div className="card-row">
                                <div className="card-tech">MongoDB</div>
                                <div className="card-tech">Express</div>
                                <div className="card-tech">React</div>
                                <div className="card-tech">Node.js</div>
                                <div className="card-tech">Firebase</div>
                                <div className="card-tech">OpenAI</div>
                                <div className="card-tech">Zoom APIs</div>
                            </div>
                        </a>
                        <a href="https://github.com/danielnguywn/HackUTD" target="_blank" className="card">
                            <img src="images/earnnest.png" className="card-image" draggable="false" alt="EarnNest"/>
                            <div className="card-header">EarnNest <span className="card-date">NOV 2024</span></div>
                            <div className="card-body">Banking web app that allows underbanked users to access traditional banking services. The app includes a real-time finance tracker that can scan receipts, as well as an AI chat bot for user-catered financial advising.</div>
                            <div className="card-row">
                                <div className="card-tech">SambaNova API</div>
                                <div className="card-tech">Google Cloud OCR</div>
                            </div>
                        </a>
                        <a href="https://github.com/elijahtwalker/AeroVista" target="_blank" className="card">
                            <img src="images/aerovista.png" className="card-image" draggable="false" alt="AeroVista"/>
                            <div className="card-header">AeroVista <span className="card-date">MAR 2024 - MAY 2024</span></div>
                            <div className="card-body">Research on Tello drones and applications in search-and-rescue operations. Compared strengths and weaknesses of Mask R-CNNN and RTMDet object detection models.</div>
                            <div className="card-row">
                                <div className="card-tech">Mask R-CNN</div>
                                <div className="card-tech">RTMDet</div>
                                <div className="card-tech">DJITelloPy</div>
                                <div className="card-tech">OpenCV</div>
                                <div className="card-tech">Voxel51</div>
                            </div>
                        </a>
                    </div>
                    <div className="body-column">
                        <div className="marquee-container">
                            <div className="marquee-content">
                                <div className="marquee-group">
                                    <div className="skill"><img src="images/icons/java.svg" className="skill-icon" draggable="false" alt="Java"/>Java</div>
                                    <div className="skill"><img src="images/icons/python.svg" className="skill-icon" draggable="false" alt="Python"/>Python</div>
                                    <div className="skill"><img src="images/icons/cpp.svg" className="skill-icon" draggable="false" alt="C++"/>C++</div>
                                    <div className="skill"><img src="images/icons/javascript.svg" className="skill-icon" draggable="false" alt="JavaScript"/>JavaScript</div>
                                    <div className="skill"><img src="images/icons/typescript.svg" className="skill-icon" draggable="false" alt="TypeScript"/>TypeScript</div>
                                    <div className="skill"><img src="images/icons/html.svg" className="skill-icon" draggable="false" alt="HTML"/>HTML</div>
                                    <div className="skill"><img src="images/icons/css.svg" className="skill-icon" draggable="false" alt="CSS"/>CSS</div>
                                    <div className="skill"><img src="images/icons/react.svg" className="skill-icon" draggable="false" alt="React"/>React</div>
                                    <div className="skill"><img src="images/icons/nextjs.svg" className="skill-icon" draggable="false" alt="NextJS"/>NextJS</div>
                                    <div className="skill"><img src="images/icons/figma.svg" className="skill-icon" draggable="false" alt="Figma"/>Figma</div>
                                    <div className="skill"><img src="images/icons/git.svg" className="skill-icon" draggable="false" alt="Git"/>Git</div>
                                </div>
                                <div className="marquee-group">
                                    <div className="skill"><img src="images/icons/java.svg" className="skill-icon"draggable="false" alt="Java"/>Java</div>
                                    <div className="skill"><img src="images/icons/python.svg" className="skill-icon" draggable="false" alt="Python"/>Python</div>
                                    <div className="skill"><img src="images/icons/cpp.svg" className="skill-icon" draggable="false" alt="C++"/>C++</div>
                                    <div className="skill"><img src="images/icons/javascript.svg" className="skill-icon" draggable="false" alt="JavaScript"/>JavaScript</div>
                                    <div className="skill"><img src="images/icons/typescript.svg" className="skill-icon" draggable="false" alt="TypeScript"/>TypeScript</div>
                                    <div className="skill"><img src="images/icons/html.svg" className="skill-icon" draggable="false" alt="HTML"/>HTML</div>
                                    <div className="skill"><img src="images/icons/css.svg" className="skill-icon" draggable="false" alt="CSS"/>CSS</div>
                                    <div className="skill"><img src="images/icons/react.svg" className="skill-icon" draggable="false" alt="React"/>React</div>
                                    <div className="skill"><img src="images/icons/nextjs.svg" className="skill-icon" draggable="false" alt="NextJS"/>NextJS</div>
                                    <div className="skill"><img src="images/icons/figma.svg" className="skill-icon" draggable="false" alt="Figma"/>Figma</div>
                                    <div className="skill"><img src="images/icons/git.svg" className="skill-icon" draggable="false" alt="Git"/>Git</div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer"/>
                        <p className="center">Want to find out more? Check out my <a href="/files/resume.pdf" target="_blank" className="link highlight">resume</a>!</p>
                        <div className="spacer"/>
                    </div>
                </div>
            </div>
        </>
    );
}