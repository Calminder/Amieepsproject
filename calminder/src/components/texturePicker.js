import bg_summerUrl from "../resources/bg_summer.jpg";
import bg_winterUrl from "../resources/bg_winter.png";
import bg_autumnUrl from "../resources/bg_autumn.png";
import bg_springUrl from "../resources/bg_spring.jpg"; //background
import cloudsUrl from "../resources/clouds.png";
import clouds_winterUrl from "../resources/clouds_winter.png";
import clouds_autumnUrl from "../resources/clouds_autumn.png";//clouds
import treesUrl from "../resources/trees.png";
import trees_autumnUrl from "../resources/trees_autumn.png";
import trees_winterUrl from "../resources/trees_winter.png";//trees
import plantsUrl from "../resources/plants.png";
import plantsSpring from "../resources/plants spring.png";
import snow_winterUrl from "../resources/snow_winter.png";
import sun_flare_summerUrl from "../resources/sun_flare_summer.png";

const seasons = {
  Spring: {
    layouts: [
        {
          name: 'Spring background layout',
          value: bg_springUrl
        },
        {
          name: 'Spring clouds layout',
          value: cloudsUrl
        },
        {
          name: 'Spring plants layout',
          value: plantsSpring,
          style: {
            zIndex: 7
          },
        },
        {
          name: 'Spring trees layout',
          value: treesUrl,
          static: true
        }
    ]
  },
  Winter:{
    layouts: [
      {
        name: 'Winter background layout',
        value: bg_winterUrl
      },
      {
        name: 'Winter clouds layout',
        value: clouds_winterUrl
      },
      {
        name: 'Winter plants layout',
        value: plantsSpring,
        style: {
          zIndex: 7
        },
      },
      {
        name: 'Winter trees layout',
        value: trees_winterUrl,
        static: true
      }
    ]
  },
  Summer:{
    layouts: [
      {
        name: 'Summer background layout',
        value: bg_summerUrl
      },
      {
        name: 'Summer clouds layout',
        value: cloudsUrl
      },
      {
        name: 'Summer plants layout',
        value: plantsSpring,
        style: {
          zIndex: 7
        },
      },
      {
        name: 'Summer trees layout',
        value: treesUrl,
        static: true
      },
      {
        name: 'Summer sun flare layout',
        value: sun_flare_summerUrl,
        style: {
          zIndex: 7
        },
      }
    ]
  },
  Autumn:{
    layouts: [
      {
        name: 'Autumn background layout',
        value: bg_autumnUrl
      },
      {
        name: 'Autumn clouds layout',
        value: clouds_autumnUrl
      },
      {
        name: 'Autumn plants layout',
        value: plantsSpring,
        style: {
          zIndex: 7
        },
      },
      {
        name: 'Autumn trees layout',
        value: trees_autumnUrl,
        static: true
      },
    ]
  }
};


export const getSeasonTextures = (season) => seasons[season];


