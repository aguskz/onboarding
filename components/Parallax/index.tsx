// Photos from https://citizenofnowhe.re/lines-of-the-city

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

import { repos } from '../../constants'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ name, image, title, subtitle, link }: { id: number, name: string, image: string, title: string, subtitle: string, link: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="mr-80">
      <div ref={ref} className="bg-black">
        <img ref={ref} src={image} className='w-auto h-auto'/>
      </div>
      <motion.h2 style={{ y }}>
        <div className="ml-20 -mt-20">
          {name}
          <p className="tracking-normal mb-2 mt-2 font-bold text-2xl max-w-md">{title}</p>
          <p className="tracking-normal max-w-md">{subtitle}</p>
          <div className="flex">
            <a className="flex rounded-md bg-yellow-300 font-mono text-lg px-2" target="_blank" href={link}>
              <p className="text-black m-0 p-1 tracking-normal">GitLab</p>
            </a>
          </div>
        </div>
      </motion.h2>
      
    </section>
  );
}

function Test() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul ref={ref}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {repos.map(({id, name, image, title, subtitle, link}) => (
        <Image id={id} name={name} image={image} title={title} subtitle={subtitle} link={link}/>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
