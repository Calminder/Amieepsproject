import React, { createRef, useEffect, useState } from "react";
import { debounce } from "lodash";
import { getSeasonTextures } from "./texturePicker.js";
import { getSeason } from "./SeasonsArray.js";
import { List }  from '../cards';
import { Faq } from './faq';
import { Activity } from './activity';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Layer = ({ texture, depth, parent, offset }) => {
  const [style, setStyle] = useState({
    position: "absolute",
    height: "100vh",
    width: "100vw",
    top: "0px",
    left: "0px",
    zIndex: depth,
    transition: "all 1s"
  })

  useEffect(() => {
    parent.current.addEventListener('mousemove', debounce(paralaxEffect))
  }, [offset])


  const paralaxEffect = (event) => {
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
    setStyle({...style, top: clientY / (10*depth), left: clientX / 50*depth})
  }

  return <img src={texture} style={style} />
}

export function AnimationLandingPage() {
  const ref = createRef();
  const season = getSeason();
  const textures = getSeasonTextures(season);
  const [offset, setOffset] = useState({x: 0, y: 0});

  return (
    <section 
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden"
      }}
      ref={ref}
    >
      {Object.keys(textures).map((key, index) => {
        return (
          <Layer
            texture={textures[key]}
            depth={index}
            parent={ref}
            offset={offset}
          />
        )
      })
      }
      <div style={{position: "absolute", width: "100%", height: "100%", zIndex: 5}}>
        <Router>
          <Switch>
            <Route path="/" exact>
            <List />
            </Route>
            <Route path="/faq" exact>
              <Faq />
            </Route>
            <Route path="/activity/:id" exact>
              <Activity />
            </Route>
          </Switch>
        </Router>
      </div>
    </section>
  )
}


