import React, { createRef, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { getSeasonTextures } from './texturePicker.js';
import { getSeason } from './SeasonsArray.js';
import { List }  from '../cards';
import { Activity } from './activity';
import FaqList from './faq/FaqList';
import { Menu } from './Menu/Menu';
import {Music} from './music/music';
import { Course } from './course/course';
import { Framework } from './framework/framework';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';
import {About} from "./about/about";


const Layer = ({ texture, depth, parent, offset }) => {
  const ref = createRef();
  const [style, setStyle] = useState({
    position: "fixed",
    width: "100%",
    left: "0px",
    zIndex: depth,
    ...texture.style,
    transition: "all 1s",
  });

  useEffect(() => {
    if(!texture.static) {
      parent.current.addEventListener('mousemove', debounce(paralaxEffect));
    }
  }, [offset]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  const paralaxEffect = (event) => {
    const { clientX, clientY } = event;
    if(texture.name === "Spring plants layout" || texture.name === "Winter plants layout" || texture.name === "Autumn plants layout" || texture.name === "Summer plants layout") {
      let bottom = clientY / (10*depth);
      if(bottom > 30) {
        bottom  = getRandomInt(0, 30);
      } 
      setStyle({...style, bottom, left: clientX / 50*depth})
    }
    else {
      setStyle({...style, top: clientY / (10*depth), left: clientX / 50*depth})
    }
  };

  return <img src={texture.value} style={style} className={texture.className} />
};



export function AnimationLandingPage() {
  const ref = createRef();
  const season = getSeason();
  const textures = getSeasonTextures(season);
  const [offset, setOffset] = useState({x: 0, y: 0});
  useEffect(() => {
    setInterval(() => {
      const page = window.location.pathname.includes('/activity') || window.location.pathname.includes('/faq');
      const plants = document.querySelector('.plants');
      if (page)  plants.style.zIndex = 5;
      else plants.style.zIndex = 7;
    }, 100);

  }, [])


  return (
    
    <section 
      style={{
        heigth: "100vh",
        position: "relative",
      }}
      ref={ref}
    >
      
      {textures.layouts.map((texture, index) => {
        return (
          <Layer
            texture={texture}
            depth={index}
            parent={ref}
            offset={offset}
          />
        )
      })
      }
      <div style={{position: "absolute", width: "100%", height: "100%",  zIndex: 5}}>
        <Router>
          <Switch>
            <Route path="/" exact>
            <List />
            </Route>
            <Route path="/faq" exact>
              <FaqList />
            </Route>
            <Route path="/activity/:id" exact>
              <Activity />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/music">
              <Music/>
            </Route>
            <Route path="/course">
              <Course/>
            </Route>
            <Route path ="/framework">
              <Framework/>
            </Route>
          </Switch>
        </Router>
        <Menu />
      </div>
    </section>
  )
}


