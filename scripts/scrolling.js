import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

const ScrollTimeline = {
    init: () => {
        gsap.registerPlugin(ScrollTrigger);  

        const introScroll = gsap.timeline({
            scrollTrigger: {
              scroller: "#app",
              trigger: "#intro",
              start: "center center",
              end: `+=${window.innerHeight/2}`,
              scrub: true,
              // markers: true,
              toggleActions: "restart pause reverse pause", 
            },
            onStart: () => {
              gsap.set("#intro-header", { scale: 1 });
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
            scale: 0.9
          }, 0)
          
          const aboutScroll = gsap.timeline({
            scrollTrigger: {
              scroller: "#app",
              trigger: "#about",
              start: "top center",
              end: `+=${window.innerHeight/2}`,
              scrub: true,
              toggleActions: "restart pause reverse pause", 
            },
            onStart: () => {
              gsap.set("#gradientWrapper", { opacity: 0, filter: "blur(30px)", scale: 0.85 });
              gsap.set("#about-text-1", { opacity: 0, filter: "blur(30px)", y: -200});
              gsap.set("#about-text-2", { opacity: 0, filter: "blur(30px)", y: -200 });
            },
          });
          
          aboutScroll.to("#gradientWrapper", {
            opacity: 1, 
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
          .to ('.btnIcon', {
            opacity: 0
          })
          .to ('#scrollButton', {
            width: 300,
            ease: 'power1.out',
            duration: 0.8
          })
          .to ('.btnText', {
            opacity: 1,
            delay: 0.5
          })
    }
}

export { ScrollTimeline };
