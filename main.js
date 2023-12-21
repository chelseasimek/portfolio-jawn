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


const introScroll = gsap.timeline({
  scrollTrigger: {
    scroller: "#app",
    trigger: "#intro",
    start: "center center",
    end: `+=${window.innerHeight/2 - 50}`,
    scrub: true,
    markers: true,
    toggleActions: "restart pause reverse pause", 
  },
  onStart: () => {
  },
  onComplete: () => {
  }
});

introScroll.to("#intro-text", {
  y: -500,
  opacity: 0, 
  filter: "blur(30px)",
})
.to("#intro-header", {
  opacity: 0, 
  filter: "blur(30px)",
}, 0)

const aboutScroll = gsap.timeline({
  scrollTrigger: {
    scroller: "#app",
    trigger: "#about",
    start: "+=50 center",
    end: `+=${window.innerHeight/2 - 50}`,
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
    start: `-=${window.innerHeight/2} center`,
    end: `+=${window.innerHeight}`,
    scrub: true,
    // markers: true,
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

jobScroll.to("#about-text-1", {
  opacity: 0, filter: "blur(30px)", y: -100,
})
.to("#about-text-2", {
  opacity: 0, filter: "blur(30px)", y: -100,
}, 0)
.to('#gradientWrapper', {
  y: (window.innerHeight/2), 
}, 0)