'use client';

import { useEffect } from 'react';

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
      <div className="spotlight-overlay"/>
      <div className="header-section">
        <div className="background"/>
        <div className="background-beam"/>
        <div className="background-beam-2"/>
        <div className="particles"/>
        <div className="header-column l">
          <h1>Hey! I'm </h1>
          <h1 className="gradient-text">Adrian Tran</h1>
          <h3>Software Engineer &nbsp;| &nbsp;CS @ UT Dallas</h3>
          <h3><a href="https://www.linkedin.com/in/adrianvtran/">LinkedIn</a></h3>
          <h3><a href="https://www.github.com/avt05">GitHub</a></h3>
        </div>
        <div className="header-column r">
          <img src="images/aquarium.jpg" className="image-circle" alt="Aquarium" />
        </div>
      </div>
      <div className="body-section">
        <div className="body-column">
          <h2>About Me</h2>
          <p>My name is Adrian Tran, and I'm pursuing a B.S. in computer science at the <span className="highlight">University of Texas at Dallas</span>.
          As part of ACM's research and project divisions, I had the opportunity to learn frontend design, computer vision, and machine learning.</p>
          <p>Outside of school, I also enjoy art and volleyball! In my free time, I've been developing <a href="" className="highlight">Cuboids</a>, a pixel art resource pack for Minecraft.</p>
          <div className="marquee-container">
            <div className="marquee-content">
              <div className="skill">Java</div>
              <div className="skill">Python</div>
              <div className="skill">C++</div>
              <div className="skill">JavaScript</div>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">C</div>
              <div className="skill">React</div>
              <div className="skill">NextJS</div>
              <div className="skill">Figma</div>
              <div className="skill">Git</div>
            </div>
          </div>
          
          <h2>Projects</h2>
          <p>Hi hi hi hi hi</p>
        </div>
      </div>
    </>
  );
}
