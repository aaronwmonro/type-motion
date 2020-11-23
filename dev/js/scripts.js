gsap.registerPlugin(TextPlugin);

import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {GSDevTools} from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);
GSDevTools.create();


import {binaryAnimation} from "./binary-code.js";
binaryAnimation();

import {titleAnimation, twitchAnimation, explodeAnimation, noBlurAnimation, explodePartTwoAnimation, shrinkAnimation} from "./title.js";


const mainTL = gsap.timeline();

mainTL.add(titleAnimation())
.add(twitchAnimation(), "-=.5")
.add(noBlurAnimation(), "-=.5")
.add(explodeAnimation())
.add(explodePartTwoAnimation())
.add(shrinkAnimation(), "-=.1")

      ;


