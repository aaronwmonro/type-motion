import {TextPlugin} from "gsap/TextPlugin";
import {gsap} from "gsap";
gsap.registerPlugin(TextPlugin);

// const binaryTL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
//     duration: 1,
//     ease: "none"
//   }});
// binaryTL.fromTo("#code-1", {duration: 5, yPercent:-100, ease: "none"}, {duration: 5, yPercent:0, ease: "none"}, "sameTime")
// .fromTo("#code-2", {duration: 5, yPercent:105, ease: "none"}, {duration: 4, yPercent:-10, ease: "none"}, "+=1")
// .fromTo("#code-3", {duration: 5, yPercent:-110, ease: "none"}, {duration: 4, yPercent:10, ease: "none"}, "-=2")
// .fromTo("#code-4", {duration: 5, yPercent:-120, ease: "none"}, {duration: 6, yPercent:10, ease: "none"}, "-=3")




//         ;

//         export function binaryAnimation(){
//             return binaryTL;
           
//         }

const binaryTL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
    ease: "none"
  }});
binaryTL.fromTo(".code-1", {duration: 11, yPercent:100, ease: "none",yoyo: "true"}, {duration: 11, yPercent: -100, ease: "none", yoyo: "true"})






        ;

        export function binaryAnimation(){
            return binaryTL;
           
        }
     const binary2TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary2TL.fromTo(".code-2", {duration: 9, yPercent:100, ease: "none",yoyo: "true"}, {duration: 9, yPercent: -100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary2Animation(){
                    return binary2TL;
                   
                }
 const binary3TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary3TL.fromTo(".code-3", {duration: 7, yPercent:-100, ease: "none",yoyo: "true"}, {duration: 7, yPercent: 100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary3Animation(){
                    return binary3TL;
                   
                }
 const binary4TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary4TL.fromTo(".code-4", {duration: 12, yPercent:-100, ease: "none",yoyo: "true"}, {duration: 12, yPercent: 100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary4Animation(){
                    return binary4TL;
                   
                }
 const binary5TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary5TL.fromTo(".code-5", {duration: 11, yPercent:100, ease: "none",yoyo: "true"}, {duration: 11, yPercent: -100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary5Animation(){
                    return binary5TL;
                   
                }
 const binary6TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary6TL.fromTo(".code-6", {duration: 7, yPercent:100, ease: "none",yoyo: "true"}, {duration: 7, yPercent: -100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary6Animation(){
                    return binary6TL;
                   
                }
const binary7TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary7TL.fromTo(".code-7", {duration: 10, yPercent:-100, ease: "none",yoyo: "true"}, {duration: 10, yPercent: 100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary7Animation(){
                    return binary7TL;
                   
                }   
const binary8TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary8TL.fromTo(".code-8",  {duration: 12, yPercent:-100, ease: "none",yoyo: "true"}, {duration: 12, yPercent: 100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary8Animation(){
                    return binary8TL;
                   
                } 
const binary9TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary9TL.fromTo(".code-9", {duration: 9, yPercent:100, ease: "none",yoyo: "true"}, {duration: 9, yPercent: -100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary9Animation(){
                    return binary9TL;
                   
                }
const binary10TL = gsap.timeline({repeat: -1, yoyo: true, defaults: { 
            ease: "none"
          }});
        binary10TL.fromTo(".code-10", {duration: 15, yPercent:100, ease: "none",yoyo: "true"}, {duration: 15, yPercent: -100, ease: "none", yoyo: "true"})
        
        
        
        
        
        
                ;
        
                export function binary10Animation(){
                    return binary10TL;
                   
                }

const binaryColorTL = gsap.timeline();
        binaryColorTL.from("#code", {duration: 3, fill: "#fff", alpha: 1, ease: "none"})
        .to("#animation-container", {duration: 2,  filter:"blur(.75px)"})
        .to(".code", {duration: 2, scale: .8})
        
        
        
        
        
        
        
                ;
        
                export function binaryColorAnimation(){
                    return binaryColorTL;
                   
                }