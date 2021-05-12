import { useEffect, useState } from "react";
import { Card } from './card';
import { cards } from '../constants/cards';
import styles from './list.module.css';
import { Link } from 'react-router-dom';
import btn_simple from '../resources/btn_simple.png';
import btn_rotate from '../resources/btn_rotate.png';
import btn_multiple from '../resources/btn_multiple.png';
import { getFullDate } from '../helpers/dateHendlers'; 

export const List = () => {
    const [mode, setMode] = useState('MULTIPLE');

    useEffect(() => {
        if(mode === "ROTATE") {
            const currentDay = getFullDate();
            const elem = cards.findIndex(card => card.activeDay === currentDay);
            cards.unshift(...cards.splice(elem, cards.length));
        }
    }, [mode])

    const getRotate = (index) => {
        if(index % 2 === 0) {
            return index * 45 + index * 10;
        }
        return index * -45 + index * 10;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
   
    return ( 
    <div className={styles.wrapper}>
        <div className={styles.overflow}>
            {
                mode === "MULTIPLE" &&
                <div className={styles.list}>
                {cards.map(card =>
                    <Link to={`/activity/${card.id}`}>
                        <Card
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            requirmens={card.requirmens}
                            age={card.age}
                            materials={card.materials}
                            activeDay={card.activeDay}
                            goal={card.goal}
                            flip={true}
                        />
                </Link>
                )}
            </div>
            }
           
            {
                mode === "ROTATE" &&
                <div className={styles.listRotate}>
                {cards.map((card, index) =>
                    <Link to={`/activity/${card.id}`}
                     style={{
                        position: "absolute",
                        transform: `rotate(${getRotate(index)}deg)`,
                        right: `${getRandomInt(150)}px`
                    }}>
                        <Card
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            requirmens={card.requirmens}
                            age={card.age}
                            materials={card.materials}
                            activeDay={card.activeDay}
                            goal={card.goal}
                        />
                </Link>
                )}
            </div>
            }
           
        </div>
        <div className={styles.controls}>
            <img src={btn_simple} onClick={() => setMode("SIMPLE")}/>
            <img src={btn_rotate} onClick={() => setMode("ROTATE")}/>
            <img src={btn_multiple} onClick={() => setMode("MULTIPLE")}/>
        </div>
    </div>
    )
    
}


// const controls = () => {

// }
