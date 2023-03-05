import { MenuData } from "./MenuData";
import './NavBarStyles.css'
import Lottie from 'react-lottie-player'
import cat from './cat.json'
import React, { useEffect, useRef,useState } from "react";

function ColorSchemesExample() {
  const animationRef = useRef(null);

  useEffect(() => {
    const anim = animationRef.current;
    if (anim) {
      anim.addEventListener('mouseenter', () => {
        anim.play();
      });
      anim.addEventListener('mouseleave', () => {
        anim.setDirection(-1);
        anim.play();
      });
      anim.addEventListener('complete', () => {
        anim.setDirection(1);
      });
    }
    return () => {
      const anim = animationRef.current;
      if (anim) {
        anim.removeEventListener('mouseenter');
        anim.removeEventListener('mouseleave');
        anim.removeEventListener('complete');
      }
    };
  }, []);

  return (
    <nav className="NavbarItems">
      <h1 className="logo">OFS</h1>
      <ul className="nav-menu">
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li onMouseEnter={() => {
              animationRef.current.play();
            }}
            onMouseLeave={() => {
              animationRef.current.setDirection(-1);
              animationRef.current.play();
            }}>
              <a href="/reg">
        <Lottie
              loop={false}
              autoPlay={false}
              animationData={cat}
              style={{ width: 140, height: 140 }}
              ref={animationRef}
              className='icon'
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default ColorSchemesExample;
