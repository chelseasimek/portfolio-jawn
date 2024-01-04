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
    end: `+=${window.innerHeight/2}`,
    scrub: true,
    // markers: true,
    toggleActions: "restart pause reverse pause", 
  }
});

introScroll.to("#intro-text", {
  y: -200,
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
    start: "top center",
    end: `+=${window.innerHeight/2}`,
    scrub: true,
    // markers: true,
    toggleActions: "restart pause reverse pause", 
  },
  onStart: () => {
    gsap.set("#gradientWrapper", { opacity: 0, filter: "blur(30px)", yPercent: -20, scale: 0.9 });
    gsap.set("#about-text-1", { opacity: 0, filter: "blur(30px)", y: -200});
    gsap.set("#about-text-2", { opacity: 0, filter: "blur(30px)", y: -200 });
  },
});

aboutScroll.to("#gradientWrapper", {
  opacity: 1, 
  yPercent: -50, 
  y: 0,
  scale: 1,
  filter: "blur(0px)",
}, 0)
.to("#about-text-1", { filter: "blur(0px)", opacity: 1, y: 0}, 0)
.to("#about-text-2", { filter: "blur(0px)", opacity: 1, y: 0}, 0)

const jobScroll = gsap.timeline({
  scrollTrigger: {
    scroller: "#app",
    trigger: "#job",
    start: `-=${window.innerHeight/2} center`,
    end: `+=${window.innerHeight}`,
    scrub: true,
    toggleActions: "restart pause reverse pause", 
  },
  onStart: () => {
    gsap.set("#job-text-1", { opacity: 0, filter: "blur(30px)", y: -200, });
    gsap.set("#job-text-2", { opacity: 0, filter: "blur(30px)", y: -200, });
  },
}) 


jobScroll.to("#about-text-1", {
  opacity: 0, filter: "blur(30px)",
}, 0)
.to("#about-text-2", {
  opacity: 0, filter: "blur(30px)"
}, 0)
.to("#job-text-1", { filter: "blur(0px)", opacity: 1, y: 0}, 1)
.to("#job-text-2", { filter: "blur(0px)", opacity: 1, y: 0}, 1)