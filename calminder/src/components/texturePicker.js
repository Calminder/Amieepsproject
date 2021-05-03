import bgUrl from "../resources/bg.jpg";
import groundUrl from "../resources/ground.png";
import Summer_plants_and_treesUrl from "../resources/Summer_plants _and_trees.png"; //summer
import bg_winterUrl from "../resources/bg_winter.png";
import clouds_winterUrl from "../resources/clouds_winter.png";
import plants_and_trees_with_snowUrl from "../resources/plants_and_trees_with_snow.png"; //winter
import bg_autumnUrl from "../resources/bg_autumn.png";
import autumn_cloudsUrl from "../resources/autumn_clouds.png";
import autumn_treesUrl from "../resources/autumn_trees.png";
import leaves2Url from "../resources/leaves2.png";
import cloudsUrl from "../resources/clouds.png";
import bg_springUrl from "../resources/bg_spring.jpg";
import leaves1Url from "../resources/leaves1.png";
import treesWinter from "../resources/trees_winter.png";

const seasons = {
  Spring: {
    backGround: bg_springUrl, 
    clouds: cloudsUrl, 
    frontGround: leaves2Url, 
    secondTree: leaves1Url,
    tree: leaves1Url
  },
  Winter: {
    backGround: bg_winterUrl, 
    clouds: clouds_winterUrl, 
    frontGround: leaves2Url, 
    secondTree: treesWinter,
    tree: treesWinter
  },
  Summer: {
    backGround: bgUrl, 
    clouds: cloudsUrl, 
    frontGround: groundUrl, 
    Summer_plants_and_treesUrl,
    leaves1Url
  },
  Autumn: {
    backGround: bg_autumnUrl, 
    clouds: autumn_cloudsUrl, 
    frontGround:leaves2Url, 
    tree: autumn_treesUrl,
    secondTree: leaves1Url
  }
}

export const getSeasonTextures = (season) => seasons[season];


