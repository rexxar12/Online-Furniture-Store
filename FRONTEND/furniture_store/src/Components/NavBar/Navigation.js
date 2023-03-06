
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
  const [showSearchAlert, setShowSearchAlert] = useState(false);

  return (
<nav className="navbar navbar-expand-lg white NavbarItems">
  
  <div className="container-fluid">
    
    

  <h1 className="logo">OFS</h1>
  <div className="container">
    
    <div className="row">
        <div className="col-12">
        <div className="container h-100">
      <div className="d-flex justify-content-left h-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
        </div>
      </div>
    </div>
        </div>
    </div>
</div>


    <div className="collapse navbar-collapse" id="navbarRightAlignExample">
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li onMouseEnter={() => {
              animationRef.current.play();
            }}
            onMouseLeave={() => {
              animationRef.current.setDirection(-1);
              animationRef.current.play();
            }} >
              <a href="/reg">
        <Lottie
              loop={false}
              autoPlay={false}
              animationData={cat}
              style={{ width: 140, height: 80 }}
              ref={animationRef}
              className='icon'
            />
          </a>
        </li>
      </ul>
      
    </div>
    
  </div>
  
</nav>
  );
}

export default ColorSchemesExample;

{/* <nav className="NavbarItems">
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
    </nav> */}