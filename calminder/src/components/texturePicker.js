import bg_summerUrl from "../resources/bg_summer.jpg";
import bg_winterUrl from "../resources/bg_winter.png";
import bg_autumnUrl from "../resources/bg_autumn.png";
import bg_springUrl from "../resources/bg_spring.jpg"; //background
import cloudsUrl from "../resources/clouds.png";
import clouds_winterUrl from "../resources/clouds_winter.png";
import clouds_autumnUrl from "../resources/clouds_autumn.png";//clouds
import treesUrl from "../resources/trees.png";
import trees_autumnUrl from "../resources/trees_autumn.png";
import trees_winterUrl from "../resources/trees_winter.png";
import plantsSpring from "../resources/plants spring.png";
import sun_flare_summerUrl from "../resources/sun_flare_summer.png";

const seasons = {
  Spring: {
    layouts: [
      {
        name: 'Spring background layout',
        value: bg_springUrl,
        style: {
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'Spring clouds layout',
        value: cloudsUrl,
        static:true,
      },
      {
        name: 'Spring plants layout',
        value: plantsSpring,
        className: 'plants',
        static: true,
        style: {
          zIndex: 7,
          bottom: '0px',
        },
      },
      {
        name: 'Spring trees layout',
        value: treesUrl,
        static: true,
        style: {
          margin: '0px',
          height: '100vh',
          width: '100%'
        }
      }
    ]
  },
  Winter: {
    layouts: [
      {
        name: 'Winter background layout',
        value: bg_winterUrl,
        style: {
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'Winter clouds layout',
        value: clouds_winterUrl
      },
      {
        name: 'Winter plants layout',
        value: plantsSpring,
        className: 'plants',
        static: true,
        style: {
          zIndex: 7,
          bottom: '0px',
        },
      },
      {
        name: 'Winter trees layout',
        value: trees_winterUrl,
        static: true,
        style: {
          margin: '0px',
          height: '100%'
        }
      }
    ]
  },
  Summer: {
    layouts: [
      {
        name: 'Summer background layout',
        value: bg_summerUrl,
        style: {
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'Summer clouds layout',
        value: cloudsUrl
      },
      {
        name: 'Summer plants layout',
        value: plantsSpring,
        className: 'plants',
        static: true,
        style: {
          zIndex: 7,
          bottom: '0px',
        },
      },
      {
        name: 'Summer trees layout',
        value: treesUrl,
        static: true,
        style: {
          margin: '0',
          height: '100%'
        }
      },
      /*
      {
        name: 'Summer sun flare layout',
        value: sun_flare_summerUrl,
        style: {
          zIndex: 8
        },
      }
      */
    ]
  },
  Autumn: {
    layouts: [
      {
        name: 'Autumn background layout',
        value: bg_autumnUrl,
        style: {
          width: '100%',
          height: '100%',
        }
      },
      {
        name: 'Autumn clouds layout',
        value: clouds_autumnUrl
      },
      {
        name: 'Autumn plants layout',
        value: plantsSpring,
        className: 'plants',
        static: true,
        style: {
          zIndex: 7,
          bottom: '0px'
        },
      },
      {
        name: 'Autumn trees layout',
        value: trees_autumnUrl,
        static: true,
        style: {
          margin: '0',
          height: '100%'
        }
      },
    ]
  }
};


export const getSeasonTextures = (season) => seasons[season];


