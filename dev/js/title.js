import {gsap} from "gsap";

// const titleTL = gsap.timeline();
// titleTL.from("#robot-b", {duration: 1.35, y: -500, ease: "sine"}, "titleTime")
// .from("#robot-r", {duration: 2, y: -500}, "titleTime")
// .from("#robot-o", {duration: 2, y: -300}, "titleTime")
// .from("#robot-o-2", {duration: 1.5, y: -400}, "titleTime")
// .from("#robot-t", {duration: 2, y: -600}, "titleTime")

// .from("#exc-e", {duration: 1.35, x: -500}, "titleTime2")
// .from("#exc-x", {duration: 2, y: -500, x:500}, "titleTime2")
// .from("#exc-c", {duration: 2, y: 700}, "titleTime2")
// .from("#exc-l", {duration: 1.5, y: 400}, "titleTime2")
// .from("#exc-u", {duration: 2, x: 700}, "titleTime2")
// .from("#exc-s", {duration: 2, y: 500, x:500}, "titleTime2")
// .from("#exc-i", {duration: 2, y: 600}, "titleTime2")
// .from("#exc-o", {duration: 1.5, y: 400}, "titleTime2")
// .from("#exc-n", {duration: 2, x: 400}, "titleTime2")

// .from("#pro-p", {duration: 2, y: 500, x:-500}, "titleTime")
// .from("#pro-r", {duration: 2, y: 300}, "titleTime")
// .from("#pro-o", {duration: 1.5, y: 400}, "titleTime")
// .from("#pro-t", {duration: 2, x: 400}, "titleTime")
// .from("#pro-o-2", {duration: 2, y: 500, x:500}, "titleTime")
// .from("#pro-c", {duration: 2, y: 300}, "titleTime")
// .from("#pro-o-3", {duration: 1.5, y: 400}, "titleTime")
// .from("#pro-l", {duration: 2, x: -400}, "titleTime")

// .to("h1", {duration:1.5,  textShadow: "0px 0px 10px #fff"}, "titleTime")
// .to("h1", {duration:.5,  padding: -10, ease: "bounce"})
// // .to("h1", {duration:.5,  padding: 10, ease: "none"})









//         ;

//         export function titleAnimation(){
//             return titleTL;
           
//         }



const titleTL = gsap.timeline();
titleTL.from("#robot-r", {duration: 2, y: -300}, "titleTime")
.fromTo("#robot-b", {duration: 2, y: -300, xPercent:-220}, {duration: 2, y:0}, "titleTime")
.fromTo("#robot-o", {duration: 2, y: -300, xPercent:-120}, {duration: 2, y:0}, "titleTime")
.fromTo("#robot-o-2", {duration: 2, y: -300, xPercent:-350}, {duration: 2, y:0}, "titleTime")
.fromTo("#robot-t", {duration: 2, y: -300, xPercent:-440}, {duration: 2, y:0}, "titleTime")

.from("#exc-n", {duration: 2, x: 300}, "titleTime")
.fromTo("#exc-o", {duration: 2, x:360}, {duration: 2, x:60}, "titleTime")
.fromTo("#exc-i", {duration: 2, x:400}, {duration: 2, x:100}, "titleTime")
.fromTo("#exc-s", {duration: 2, x:450}, {duration: 2, x:150}, "titleTime")
.fromTo("#exc-u", {duration: 2, x:500}, {duration: 2, x:200}, "titleTime")
.fromTo("#exc-l", {duration: 2, x:550}, {duration: 2, x:250}, "titleTime")
.fromTo("#exc-c", {duration: 2, x:600}, {duration: 2, x:300}, "titleTime")
.fromTo("#exc-x", {duration: 2, x:650}, {duration: 2, x:350}, "titleTime")
.fromTo("#exc-e", {duration: 2, x:700}, {duration: 2, x:400}, "titleTime")

.from("#pro-p", {duration: 2, y: 300}, "titleTime")
.fromTo("#pro-r", {duration: 2, y: 300, xPercent:-120}, {duration: 2, y:0}, "titleTime")
.fromTo("#pro-o", {duration: 2, y: 300, xPercent:-220}, {duration: 2, y:0}, "titleTime")
.fromTo("#pro-t", {duration: 2, y: 300, xPercent:-350}, {duration: 2, y:0}, "titleTime")
.fromTo("#pro-o2", {duration: 2, y: 300, xPercent:-440}, {duration: 2, y:0}, "titleTime")
.fromTo("#pro-c", {duration: 2, y: 300, xPercent:-550}, {duration: 2, y:0}, "titleTime")
.fromTo("#pro-o3", {duration: 2, y: 300, xPercent:-650}, {duration: 2, y:0}, "titleTime")
.fromTo("#pro-l", {duration: 2, y: 300, xPercent:-750}, {duration: 2, y:0}, "titleTime")


.to("#robot-b", {duration: 2, xPercent:0},  "titleTimetwo")
.to("#robot-o", {duration: 2, xPercent:0},  "titleTimetwo")
.to("#robot-o-2", {duration: 2, xPercent:0},  "titleTimetwo")
.to("#robot-t", {duration: 2,xPercent:0},  "titleTimetwo")

.to("#exc-o", {duration: 2, x:0}, "titleTimetwo")
.to("#exc-i", {duration: 2, x:0}, "titleTimetwo")
.to("#exc-s", {duration: 2, x:0}, "titleTimetwo")
.to("#exc-u", {duration: 2, x:0}, "titleTimetwo")
.to("#exc-l", {duration: 2, x:0}, "titleTimetwo")
.to("#exc-c", {duration: 2, x:0}, "titleTimetwo")
.to("#exc-x", {duration: 2, x:0}, "titleTimetwo")
.to("#exc-e", {duration: 2, x:0}, "titleTimetwo")

.to("#pro-r", {duration: 2, xPercent:0}, "titleTimetwo")
.to("#pro-o", {duration: 2, xPercent:0}, "titleTimetwo")
.to("#pro-t", {duration: 2, xPercent:0}, "titleTimetwo")
.to("#pro-o2", {duration: 2, xPercent:0}, "titleTimetwo")
.to("#pro-c", {duration: 2, xPercent:0}, "titleTimetwo")
.to("#pro-o3", {duration: 2, xPercent:0}, "titleTimetwo")
.to("#pro-l", {duration: 2, xPercent:0}, "titleTimetwo")


// .to(".blur", {duration: 3, filter: "blur(0px)"},  "titleTimetwo")












        ;

        export function titleAnimation(){
            return titleTL;
           
        }
        gsap.set(".twitch",{transformOrigin: "center"});
        gsap.set(".twitch2",{transformOrigin: "center"});

const twitchTL = gsap.timeline({repeat: 1, yoyo: true, defaults: { 
    ease: "none"
  }});
twitchTL.to(".twitch", {duration: .06, xPercent: -500, scale:1.3, alpha:1, ease: "none", yoyo: "true"}, "twitch")
.to(".twitch2", {duration: .06, xPercent: 500, scale:1.2, alpha:1, ease: "none", yoyo: "true"}, "twitch")
.to(".twitch3", {duration: .06, xPercent: 0, scale:1.2, alpha:1, ease: "none", yoyo: "true"}, "twitch")
.to(".blur", {duration: .2, filter: "blur(0px)", yoyo: "true"},  "twitch")
.to(".twitch", {duration: .06, xPercent: 700, scale:1.4, alpha:1, ease: "none", yoyo: "true", filter: "blur(2px)"}, "+=.25")
.to(".twitch2", {duration: .06, xPercent: -700, scale:1.4, alpha:1, ease: "none", yoyo: "true", filter: "blur(2px)"})
.to(".st0", {duration: .06, xPercent: -100, scale:1.4, alpha:1, ease: "none", yoyo: "true", filter: "blur(2px)"})

        export function twitchAnimation(){
            return twitchTL;
           
        }

const noBlurTL = gsap.timeline();
noBlurTL.to(".blur", {duration: 2, filter: "blur(0px)"})
.to("#robot", {duration: 4, xPercent: -20}, "-=1.5 slideAway")
.to("#exclusion", {duration: 4, xPercent: 23}, "-=1.5 slideAway")
.to("#protocol", {duration: 4, xPercent: -20}, " -=1.5 slideAway")

.to("#protocol", {duration: .25, xPercent: 0, ease: "none"}, "backToNormal")
.to("#exclusion", {duration: .25, xPercent: 0, ease: "none"}, "backToNormal")
.to("#robot", {duration: .25, xPercent: 0, ease: "none"}, "backToNormal")
        export function noBlurAnimation(){
            return noBlurTL;
           
        }

        var comeInSpeed = .15 ;
        var explodeSize = 1.65 ;
const explodeTL = gsap.timeline();
explodeTL.to(".blur", {duration: comeInSpeed, filter: "blur(3px)"}, "comeIn")
.to("#robot-r", {duration:comeInSpeed, xPercent: 200, yPercent: 130}, "comeIn")
.to("#robot-o", {duration: comeInSpeed, xPercent: 100, yPercent: 130 }, "comeIn")
.to("#robot-b", {duration: comeInSpeed,  yPercent: 130 }, "comeIn")
.to("#robot-o-2", {duration: comeInSpeed, xPercent: -100, yPercent: 130 }, "comeIn")
.to("#robot-t", {duration: comeInSpeed, xPercent: -230, yPercent: 130}, "comeIn")
// .to("#robot", {duration: .25, scale:.5, yPercent: 60}, "comeIn" )

.to("#exc-e", {duration: comeInSpeed, xPercent: 400}, "comeIn")
.to("#exc-x", {duration: comeInSpeed, xPercent: 300}, "comeIn")
.to("#exc-c", {duration:comeInSpeed, xPercent: 200}, "comeIn")
.to("#exc-l", {duration: comeInSpeed, xPercent: 100}, "comeIn")
.to("#exc-u", {duration: comeInSpeed}, "comeIn")
.to("#exc-s", {duration: comeInSpeed, xPercent: -100}, "comeIn")
.to("#exc-i", {duration: comeInSpeed, xPercent: -400}, "comeIn")
.to("#exc-o", {duration: comeInSpeed, xPercent: -300}, "comeIn")
.to("#exc-n", {duration: comeInSpeed, xPercent: -400}, "comeIn")
// .to("#exclusion", {duration: .25, scale:.5}, "comeIn" )

.to("#pro-p", {duration: comeInSpeed, xPercent: 400, yPercent: -160}, "comeIn")
.to("#pro-r", {duration: comeInSpeed, xPercent: 300, yPercent: -160}, "comeIn")
.to("#pro-o", {duration: comeInSpeed, xPercent: 200, yPercent: -160}, "comeIn")
.to("#pro-t", {duration: comeInSpeed, xPercent: 50, yPercent: -160}, "comeIn")
.to("#pro-o2", {duration: comeInSpeed, xPercent: -50, yPercent: -160}, "comeIn")
.to("#pro-c", {duration: comeInSpeed, xPercent: -200, yPercent: -160}, "comeIn")
.to("#pro-o3", {duration: comeInSpeed, xPercent: -300, yPercent: -160}, "comeIn")
.to("#pro-l", {duration: comeInSpeed, xPercent: -400, yPercent: -160}, "comeIn")



        export function explodeAnimation(){
            return explodeTL;
           
        }

        gsap.set(".blur",{transformOrigin: "center"});

        var explodeSpeed = .2 ;

const explodePartTwoTL = gsap.timeline({repeat: 1, yoyo: true, defaults: { 
    ease: "none"
  }});
explodePartTwoTL.to("#robot-r-4", {duration: explodeSpeed, x: -190, y: -216, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-r-3", {duration: explodeSpeed, x: -400, y: -200, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-r-2", {duration: explodeSpeed, x: -470, y: -250, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-r-1", {duration: explodeSpeed, x: -180, y: -100, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#robot-o-4", {duration: explodeSpeed, x: -190, y: -66, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-o-3", {duration: explodeSpeed, x: -300, y: -40, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-o-2-2", {duration: explodeSpeed, x: -370, y: -30, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-o-1", {duration: explodeSpeed, x: -180, y: -50, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#robot-b-4", {duration: explodeSpeed, x: -40, y: -126, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-b-3", {duration: explodeSpeed, x: 30, y: -140, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-b-2", {duration: explodeSpeed, x: -50, y: -130, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-b-1", {duration: explodeSpeed, x: -220, y: 300, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#robot-o-2-4", {duration: explodeSpeed, x: 340, y: -226, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-o-2-3", {duration: explodeSpeed, x: 230, y: -350, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-o-2-2-2", {duration: explodeSpeed, x: 150, y: -230, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-o-2-1", {duration: explodeSpeed, x: 420, y: -100, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#robot-t-4", {duration: explodeSpeed, x: 100, y: -226, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-t-3", {duration: explodeSpeed, x: 200, y: -50, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-t-2", {duration: explodeSpeed, x: 300, y: -230, scale: explodeSize, ease: "none"}, "explode")
        .to("#robot-t-1", {duration: explodeSpeed, x: 400, y: -100, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-e-4", {duration: explodeSpeed, x: -10, y: -116, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-e-3", {duration: explodeSpeed, x: -20, y: -300, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-e-2", {duration: explodeSpeed, x: 10, y: 250, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-e-1", {duration: explodeSpeed, x: 30, y: 100, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-x-4", {duration: explodeSpeed, x: -25, y: -20, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-x-3", {duration: explodeSpeed, x: -40, y: -103, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-x-2", {duration: explodeSpeed, x: -113, y: 205, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-x-1", {duration: explodeSpeed, x: -10, y: 130, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-c-4", {duration: explodeSpeed, x: -100, y: 516, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-c-3", {duration: explodeSpeed, x: -40, y: 500, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-c-2", {duration: explodeSpeed, x: -40, y: -250, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-c-1", {duration: explodeSpeed, x: -10, y: -200, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-l-4", {duration: explodeSpeed, x: 190, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-l-3", {duration: explodeSpeed, x: 30, y: 3260, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-l-2", {duration: explodeSpeed, x: -270, y: -243, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-l-1", {duration: explodeSpeed, x: -230, y: -280, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-u-4", {duration: explodeSpeed, x: 0, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-u-3", {duration: explodeSpeed, x: 40, y: 200, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-u-2", {duration: explodeSpeed, x: 70, y: 250, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-u-1", {duration: explodeSpeed, x: 80, y: 100, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-s-4", {duration: explodeSpeed, x: -124, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-s-3", {duration: explodeSpeed, x: 34, y: -200, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-s-2", {duration: explodeSpeed, x: 170, y: 325, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-s-1", {duration: explodeSpeed, x: 432, y: 474, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-i-4", {duration: explodeSpeed, x: 320, y: -216, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-i-3", {duration: explodeSpeed, x: 43, y: 234, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-i-2", {duration: explodeSpeed, x: 120, y: 340, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-i-1", {duration: explodeSpeed, x: 214, y: 200, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-o-4", {duration: explodeSpeed, x: 421, y: 126, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-o-3", {duration: explodeSpeed, x: 13, y: 42, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-o-2", {duration: explodeSpeed, x: 431, y: 50, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-o-1", {duration: explodeSpeed, x: 321, y: 300, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#exc-n-4", {duration: explodeSpeed, x: 332, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-n-3", {duration: explodeSpeed, x: 39, y: 200, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-n-2", {duration: explodeSpeed, x: 124, y: 250, scale: explodeSize, ease: "none"}, "explode")
        .to("#exc-n-1", {duration: explodeSpeed, x: 230, y: 400, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-p-4", {duration: explodeSpeed, x:-123, y: 23, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-p-3", {duration: explodeSpeed, x: -321, y: 324, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-p-2", {duration: explodeSpeed, x: -387, y: 250, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-p-1", {duration: explodeSpeed, x: -245, y: 320, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-r-4", {duration: explodeSpeed, x: -332, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-r-3", {duration: explodeSpeed, x: -39, y: 200, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-r-2", {duration: explodeSpeed, x: -124, y: 250, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-r-1", {duration: explodeSpeed, x: -230, y: 400, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-o-4", {duration: explodeSpeed, x:-232, y: 421, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o-3", {duration: explodeSpeed, x: -139, y: 234, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o-2", {duration: explodeSpeed, x: 424, y: 432, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o-1", {duration: explodeSpeed, x: 360, y: 103, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-t-4", {duration: explodeSpeed, x:-32, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-t-3", {duration: explodeSpeed, x: -79, y: -200, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-t-2", {duration: explodeSpeed, x: 124, y: -250, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-t-1", {duration: explodeSpeed, x: 230, y:700, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-o2-4", {duration: explodeSpeed, x: -140, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o2-3", {duration: explodeSpeed, x: -439, y: 200, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o2-2", {duration: explodeSpeed, x: -224, y: 250, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o2-1", {duration: explodeSpeed, x: -230, y: 400, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-c-4", {duration: explodeSpeed, x: 332, y: -105, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-c-3", {duration: explodeSpeed, x: 39, y: -50, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-c-2", {duration: explodeSpeed, x: 124, y: 0, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-c-1", {duration: explodeSpeed, x: 230, y: 7, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-o3-4", {duration: explodeSpeed, x: 332, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o3-3", {duration: explodeSpeed, x: 39, y: 200, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o3-2", {duration: explodeSpeed, x: 124, y: 250, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-o3-1", {duration: explodeSpeed, x: 230, y: 400, scale: explodeSize, ease: "none"}, "explode")
        
        .to("#pro-l-4", {duration: explodeSpeed, x: -52, y: 216, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-l-3", {duration: explodeSpeed, x: -439, y: 200, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-l-2", {duration: explodeSpeed, x: -424, y: 100, scale: explodeSize, ease: "none"}, "explode")
        .to("#pro-l-1", {duration: explodeSpeed, x: -530, y: 400, scale: explodeSize, ease: "none"}, "explode")
        
        
        
        .to(".blur", {duration: 1.5, rotate: 10, scale: 1.1, ease: "sine"})


        export function explodePartTwoAnimation(){
            return explodePartTwoTL;
           
        }

        const shrinkTL = gsap.timeline();
          shrinkTL.to("#robot", {duration: .2, scale:0, y:70, ease: "none"}, "fadeAway")
          .to("#exclusion", {duration: .2, scale:0, ease: "none"}, "fadeAway")
          .to("#protocol", {duration: .2, scale:0, y:-70, ease: "none"}, "fadeAway")
          .from("#author", {duration: .5, scale:0, ease:"sine"}, "+=.1")
          .to("#author", {duration: 1, letterSpacing: "0px", filter: "blur(1px)", ease: "none"}, "+=.1")
          .to("#author", {duration: 3})
        export function shrinkAnimation(){
            return shrinkTL;
           
        }

        gsap.set("#author",{transformOrigin: "center"});