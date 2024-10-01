import { useLayoutEffect,useRef } from 'react';
import './index.css';
import img_1 from './assets/1.jpeg';
import img_2 from './assets/2.jpeg';
import img_3 from './assets/3.jpeg';
import img_4 from './assets/4.jpeg';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
export default function App() {
  const container = useRef();
  const cities = [
    {
      img:img_1,
      city:"Test-1"
    },
    {
      img:img_2,
      city:"Test-2"
    },
    {
      img:img_3,
      city:"Test-3"
    },
    {
      img:img_4,
      city:"Test-4"
    },

  ]

  useLayoutEffect(()=> {
    const ctx = gsap.context(()=> {
      gsap.fromTo('.card:not(:first-child)',{
        x:1000,
      },{
        x:0,
        stagger:0.5,
        scrollTrigger: {
          pin:container.current,
          scrub:0.5,
        }
      })
    });
    return ()=> ctx.revert();
  },[])

  return <div ref={container} className="h-screen flex items-center justify-center">
  <div className="relative w-72 h-[420px]">
    {cities.map((city)=> {
      return (
        <div key={city.city} className="card">
            <img src={city.img} alt="t" className="rounded-lg h-full w-full"/>
            <div className="overlay">
              <p>{city.city}</p>
            </div>
        </div>
      )
    })}
  </div>

  </div>;
}