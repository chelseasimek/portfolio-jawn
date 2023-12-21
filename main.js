import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { Timeline } from 'gsap/gsap-core';
import { Gradient } from "whatamesh";

gsap.registerPlugin(ScrollTrigger);  

const gradient1 = new Gradient();
gradient1.initGradient("#gradient-canvas-1");

const gradient2 = new Gradient();
gradient2.initGradient("#gradient-canvas-2");

const aboutScroll = gsap.timeline({
  scrollTrigger: {
    scroller: "#app",
    trigger: "#about",
    start: "+=50 center",
    end: `+=${window.innerHeight/2 - 50}`,
    // start: "+=10",
    scrub: true,
    // markers: true,
    toggleActions: "restart pause reverse pause", 
  },
  onStart: () => {
    gsap.set("#gradientWrapper", { opacity: 0, filter: "blur(30px)", y: -300, scale: 0.8 });
    gsap.set("#about-text-1", { opacity: 0, filter: "blur(30px)", y: -100, });
    gsap.set("#about-text-2", { opacity: 0, filter: "blur(30px)", y: 100, });
  },
  onComplete: () => {
    const textParams = {
      opacity: 1.2, 
      y: 0, 
      filter: "blur(0px)",
      duration: 0.5
    }
    // gsap.set("#gradientWrapper", { position: 'fixed' });
    gsap.to("#about-text-1", textParams);
    gsap.to("#about-text-2", {...textParams, delay: 0.1});
  }
});

aboutScroll.to("#gradientWrapper", {
  opacity: 1.2, 
  y: '-50%', 
  scale: 1,
  filter: "blur(0px)",
})

const jobScroll = gsap.timeline({
  scrollTrigger: {
    scroller: "#app",
    trigger: "#job",
    start: `-=${window.innerHeight/2 - 150} center`,
    end: `+=${window.innerHeight - 150}`,
    scrub: true,
    markers: true,
    toggleActions: "restart pause reverse pause", 
  },
  onStart: () => {
    // gsap.set("#gradientWrapper", { opacity: 0, filter: "blur(30px)", y: -300, scale: 0.8 });
    gsap.set("#job-text-1", { opacity: 0, filter: "blur(30px)", y: -100, });
    gsap.set("#job-text-2", { opacity: 0, filter: "blur(30px)", y: 100, });
  },

  onComplete: () => {
    const textParams = {
      opacity: 1.2, 
      y: 0, 
      filter: "blur(0px)",
      duration: 0.5
    }
    gsap.to("#job-text-1", textParams);
    gsap.to("#job-text-2", {...textParams, delay: 0.1});
  }
}) 

jobScroll.to('#gradientWrapper', {
  y: (window.innerHeight/2), 
})

// .to("#about-text-1", {
//   opacity: 1.2, 
//   y: 0, 
//   scale: 1
// }, 0)
// .to("#about-text-2", {
//   opacity: 1.2, 
//   y: 0, 
//   scale: 1
// }, 0)


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
