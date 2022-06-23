import { Card } from '../../cards/card';
import styles from './activity.module.css';
import { getCardById } from '../../services/card.service';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { getCards } from "../../services/firebase.service";
import {getFormattedInstructions} from './instructionsFormatting.js';
import {getFormattedMaterials} from './materialsFormatting.js';
import Header from './header';
import Background from '../../resources/sky.jpg';
const clientId = 'c5a171200f3a0a73a523bba14a1e0a29';
// const resolveUrl = 'https://soundcloud.com/qvenaozv6yzq/grapevocal/s-wSrH0TN9QJv?fbclid=IwAR1O9bmVk5v969rAe8tTv0-Njjs4cZgevTXZR9B_CwUhrseD1WzWdgo4NTg';
var boolPicture = true;
var boolMusic = true;
var boolVideo = true;
let videoLink = "";
const text = [];
function Picture(props)
{
    if (props.warn == "")
    {
        boolPicture = true;
    }
    else
    {
        boolPicture = false;
    }

    return (
        <div></div>
    );

}

function Video(props)
{
    if (props.warn == "")
    {
        return boolVideo = true;
    }
    else
    {
        boolVideo = false;
        videoLink = props.warn;
    }
    return (

        <div>

        </div>
    );

}
function FormatText(props)
{
    const items = props.text;
    if (items.length > 0 ){
        const listItems = items.map((item) =>
            <li>{item}</li>
        );
        return (
            <div>
                <ul
                style ={{ listStyleType:"none"}}>
                    {listItems}
                </ul>
            </div>
        );
    }
    else {
        return (
            <div>
            </div>
        );
    }
}

export const Activity = () =>
{
    const { id } = useParams(); /*specially for address bar */
    const [cardOpened, setCardOpened] = useState(false);
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [instructions, setInstructions] = useState([]);
    const [materials, setMaterials] = useState([]);
    useEffect(async () =>
    {
        setLoading(true);
        const cards = await getCards(); //here is what I need , took from Firebase
        setCard(cards[id]);
        setInstructions(getFormattedInstructions(cards[id].instructions));
        setMaterials(getFormattedMaterials(cards[id].materials));
        setLoading(false);
    }, []);


    /* const { title, duration, requirmens, age, materials, description, goal } = card;*/

    return (
        // this file doesn't correspond to the file in "cards" folder
        card ?
        <>
            <div className={ (cardOpened && boolVideo) ? styles.cardActiveWrapper : styles.cardCloseWrapper}>
                <div className={styles.cardActive}>
                    <div className={styles.title}>
                        {card.title}  
                    </div>   
                    <div className={styles.bgImage}
                    style={{
                        backgroundImage: boolPicture ? `url(${Background})` : `url(${(card.url)})`, 
                    }}
                    >
                    </div>
                    <div className={styles.close} onClick={() => setCardOpened(false)}>X</div>
                </div>
            </div>
            <div className={styles.shadow}>
                <Video warn={card.videoURL} />
                <Picture warn={card.url} />
                <Header></Header>
                <div className={styles.wrapper}>
                    <section className={ boolVideo ? styles.card : styles.video}
                        onClick={() => setCardOpened(true)}
                        style={{
                            backgroundImage: boolPicture ? `url(${Background})` : `url(${(card.url)})`,
                            backgroundSize: "contain",
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >

                    </section>

                    <div className = { boolVideo ? styles.NoVideoPlayer: styles.videoPlayer}>
                        <ReactPlayer 
                        width='100%'
                        height='100%'
                        controls={true}
                        url={videoLink}  
                        />
                    </div>
                    <div className={styles.goal}>
                        <h1 className={styles.title}>
                            {card.title}
                        </h1>
                        <div className={styles.pic}>

                        </div>
                        <div className={styles.title2}>
                            <span className={styles.text2}>
                                Description
                            </span>
                        </div>
                        <section className={styles.value}>
                            {card.description}
                        </section>

                        <div className={styles.title2}>
                            <span className={styles.text2}>
                                Instructions
                            </span>

                        </div>
                        <div className={styles.value}>
                            <FormatText
                                text = {instructions} />
                        </div>

                    </div>

                    <div className={styles.info}>
                        <div className={styles.item}>

                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Title
                                </span>

                            </div>
                            <div className={styles.desc}>
                                {card.title}
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Duration
                                </span>
                            </div>
                            <div className={styles.desc}>
                                {card.duration}
                            </div>
                        </div>



                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Age
                                </span>
                            </div>
                            <div className={styles.desc}>
                                {card.age}
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Materials
                                </span>
                            </div>
                            <div className={styles.desc}>
                                  <FormatText
                                    text = {materials} /> 

                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.title}>
                                <span className={styles.text}>
                                    Extra
                                </span>
                            </div>
                            <div className={styles.desc}>
                                <div className={styles.scrolltext}>
                                    {card.extra}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </> : null
    )
}