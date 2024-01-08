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


document.getElementById("scrollButton").addEventListener("click", scrollButton);

function scrollButton() {
  if (isElementVisible(document.getElementById('intro'))) {
    document.getElementById('about').scrollIntoView({ behavior: "smooth"});
  }
  if (isElementVisible(document.getElementById('about'))) {
    document.getElementById('job').scrollIntoView({ behavior: "smooth"});
  }
  if (isElementVisible(document.getElementById('job'))) {
    const recipient = "chelsea.z.simek@gmail.com";
    const subject = "Let's Connect!";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
  }
}

function isElementVisible(el) {
  var rect     = el.getBoundingClientRect(),
      vWidth   = window.innerWidth || document.documentElement.clientWidth,
      vHeight  = window.innerHeight || document.documentElement.clientHeight,
      efp      = function (x, y) { return document.elementFromPoint(x, y) };     

  // Return false if it's not in the viewport
  if (rect.right < 0 || rect.bottom < 0 
          || rect.left > vWidth || rect.top > vHeight)
      return false;

  // Return true if any of its four corners are visible
  return (
        el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
  );
}



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