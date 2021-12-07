import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.config({ nullTargetWarn: false });
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default gsap;
