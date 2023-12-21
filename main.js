import './style.css'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { Gradient } from "whatamesh";

// gsap.registerPlugin(ScrollTrigger);  

const gradient1 = new Gradient();
gradient1.initGradient("#gradient-canvas-1");

const gradient2 = new Gradient();
gradient2.initGradient("#gradient-canvas-2");

elementInViewport('intro');
elementInViewport('about');
elementInViewport('job');


function elementInViewport(elementId) {

    var el = document.getElementById(elementId);

    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimationState(elementId);
        return;
      }
      // console.log(elementId, 'LEAVE')
    }, {
      root: null,
      threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    })
    
    observer.observe(el);
}

function setAnimationState(elementId) {
  console.log(elementId);
  switch(elementId) {
    case 'intro': 
      document.getElementById('gradient-box-wrapper').style.opacity = 0;
    case 'about': 
      document.getElementById('gradient-box-wrapper').style.opacity = 1;
    case 'job': 
      document.getElementById('gradient-box-wrapper').style.opacity = 1;
  }
}

// gsap.to("#gradient-box-wrapper", 
//     {
//       scrollTrigger: {
//         scroller: "#section-2",
//         trigger: "#about",
//         // start: "+=10",
//         markers: true,
//         scrub: true,
//         toggleActions: "restart pause reverse pause"
//       },
//       opacity: 1, 
//       duration: 2
//     }
// )

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
