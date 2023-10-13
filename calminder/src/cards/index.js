import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import { Card } from './card';
import { categories } from '../constants/cards';
import styles from './list.module.css';
import { Link } from 'react-router-dom';
import iconloop from '../resources/icon-loop.png';
import { getFullDate } from '../helpers/dateHendlers';
import { getCards } from '../services/firebase.service';
import { getCardImageByCategory } from '../services/card.service'; 
import Header from './header';
//const selectCategory = getCardImageByCategory(category) || ''; //pair (image, category)
export const List = () =>
{
    const [mode, setMode] = useState('MULTIPLE');
    const [category, setCategory] = useState([]);
    //MULTIPLE is a default condition of "mode"
    //setMode is a method
    useEffect(async () =>
    {
        if (mode === "ROTATE")
        {
            const currentDay = getFullDate();
            const elem = cards.findIndex(card => card.activeDay === currentDay);
            cards.unshift(cards.splice(elem, cards.length));
            //"unshift" adds new items to the beginning of cards array 
            //"splice" removes "cards.length" items from element (with elem index) 
        }
        await getCards(); // waiting for Cards from Firebase
    }, [mode]);

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    useEffect(async () =>
    {
        setLoading(true);
        const result = await getCards(); /* getting Data from Firebase */
        setCards(result);
        setLoading(false)
    }, []);

    const toggleMenu = (query.length>0) ? styles.dropDownMenuOpen : styles.dropDownMenuClose;

    return (
        <div className={styles.wrapper}>
            <Header></Header> 
            <div className={styles.overflowbackground}>
                <div className={styles.textSection}>
                    <p> Mindfulness is beneficial for children of all ages as they learn how to bring a gentle,
                        accepting attitude to the present moment. 
                        Mindfulness together with art will create a stimulating environment for children to learn and develop.
                        On this Calminder website exercises are provided to help implement <strong>A</strong>rts and <strong>M</strong>indfulness <strong>i</strong>n <strong>E</strong>ducation.
                        The exercises invite the children to recognise and accept their feelings and express them into artworks. You will also find music especially composed for use as mindfulness exercises, link to our FAQ, pedagogical framework and our online course about arts and mindfulness.
                        <br></br> Let's get started!
                    </p>
                </div>
                <div class={styles.btnChoices}>
                    <div class = {styles.ButtonAll} onClick={() => setCategory([])}>
                        Show all Exercises
                    </div>
                    <div class = {styles.button} onClick={() => setCategory(categories[0].name)}>
                        {categories[0].name}
                    </div>
                    <div class = {styles.button} onClick={() => setCategory(categories[1].name)}>
                        {categories[1].name}
                    </div>
                    <div class = {styles.button} onClick={() => setCategory(categories[2].name)}>
                        {categories[2].name}
                    </div>
                    <div class = {styles.button} onClick={() => setCategory(categories[3].name)}>
                        {categories[3].name}
                    </div>
                    <div class = {styles.button} onClick={() => setCategory(categories[4].name)}>
                        {categories[4].name}
                    </div>
                </div>
                <div className = {styles.searchBars}>
                    <div className = {styles.searchForTitle}> 
                        <input type="text" id = "titleSearch" placeholder = "Search for a keyword" onChange={(search) => setQuery(search.target.value.trim().toLowerCase())}/>
                        <img src = {iconloop}/>
                    </div>
                </div>
                <div className={styles.overflow}> 
                    {
                        mode === "MULTIPLE" &&

                        <div className = {styles.list}>
                        {   (category.length > 0) ? 
                            cards.filter(filter => filter.category == category && (filter.title.toLowerCase().includes(query) || filter.description.toLowerCase().includes(query) || filter.instructions.toLowerCase().includes(query) || filter.duration.toLowerCase().includes(query) )).map((card) => //creating cards array 
                            <Link to={`/activity/${cards.findIndex(v => v.title == card.title)}`}>
                                <Card
                                    title={card.title}
                                    description={card.description}
                                    image={card.url}
                                    age={card.age}
                                    materials={card.materials}
                                    activeDay={card.activeDay}
                                    goal={card.goal}
                                    flip={true}
                                    category={card.category}
                                    video = {card.videoURL}
                                />
                            </Link>
                            ) :
                            cards.filter(filter => filter.title.toLowerCase().includes(query) || filter.description.toLowerCase().includes(query) || filter.instructions.toLowerCase().includes(query) || filter.duration.toLowerCase().includes(query)).map((card) => //creating cards array 
                                <Link to={`/activity/${cards.findIndex(v => v.title == card.title)}`}>
                                    <Card
                                        title={card.title}
                                        description={card.description}
                                        image={card.url}
                                        age={card.age}
                                        materials={card.materials}
                                        activeDay={card.activeDay}
                                        goal={card.goal}
                                        flip={true}
                                        category={card.category}
                                        video = {card.videoURL}
                                    />
                                </Link>
                            )}
                        </div>   
                    }
                
                </div>
                    
                

            </div>
        
            
        </div>
       )
};
