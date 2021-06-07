import { useEffect, useState } from "react";
import { Card } from './card';
import styles from './list.module.css';
import { Link } from 'react-router-dom';
import btn_simple from '../resources/btn_simple.png';
import btn_rotate from '../resources/btn_rotate.png';
import btn_multiple from '../resources/btn_multiple.png';
import { getFullDate } from '../helpers/dateHendlers';
import { CardsWeek } from "./CardsWeek";
import { getCards } from '../services/firebase.service';
import Header from './header';

export const List = () => {
    const [mode, setMode] = useState('MULTIPLE');

    useEffect(async () => {
        if (mode === "ROTATE") {
            const currentDay = getFullDate();
            const elem = cards.findIndex(card => card.activeDay === currentDay);
            cards.unshift(...cards.splice(elem, cards.length));
        }
        await getCards();
    }, [mode]);

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(async () => {
        setLoading(true);
        const result = await getCards();
        console.log(result);
        setCards(result);
        setLoading(false)
    }, []);

    const getRotate = (index) => {
        if (index % 2 === 0) {
            return index * 45 + index * 10;
        }
        return index * -45 + index * 10;
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (

        <div className={styles.wrapper}>
            <Header></Header>
            <div className={styles.overflow}>
                {
                    mode === "MULTIPLE" &&
                    <div className={styles.list}>
                        {cards.map((card, index) =>
                            <Link to={`/activity/${index}`}>
                                <Card
                                    title={card.title}
                                    description={card.description}
                                    image={card.url}
                                    requirmens={card.requirmens}
                                    age={card.age}
                                    materials={card.materials}
                                    activeDay={card.activeDay}
                                    goal={card.goal}
                                    flip={true}
                                    category={card.category}
                                />
                            </Link>
                        )}
                    </div>
                }

                {
                    mode === "ROTATE" &&
                    <div className={styles.listRotate}>
                        {cards.map((card, index) =>
                            <Link to={`/activity/${index}`}
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
                                    category={card.category}
                                />

                            </Link>
                        )}
                    </div>
                }
                {
                    mode === "SIMPLE" &&
                    <div className={styles.listSimple}>
                        <div className={styles.column}>
                            <Link to={`/activity/0`}>
                                <Card
                                    title={cards[0].title}
                                    description={cards[0].description}
                                    image={cards[0].image}
                                    requirmens={cards[0].requirmens}
                                    age={cards[0].age}
                                    materials={cards[0].materials}
                                    activeDay={cards[0].activeDay}
                                    goal={cards[0].goal}
                                    category={cards[0].category}
                                />
                            </Link>
                            <Link to={`/activity/1`}>
                                <Card
                                    title={cards[1].title}
                                    description={cards[1].description}
                                    image={cards[1].image}
                                    requirmens={cards[1].requirmens}
                                    age={cards[1].age}
                                    materials={cards[1].materials}
                                    activeDay={cards[1].activeDay}
                                    goal={cards[1].goal}
                                    category={cards[1].category}
                                />
                            </Link>
                        </div>
                        <Link to={`/activity/2`}>
                            <Card
                                title={cards[2].title}
                                description={cards[2].description}
                                image={cards[2].image}
                                requirmens={cards[2].requirmens}
                                age={cards[2].age}
                                materials={cards[2].materials}
                                activeDay={cards[2].activeDay}
                                goal={cards[2].goal}
                                category={cards[2].category}
                                style={{ width: '300px', height: '500px' }}
                            />
                        </Link>

                        <div className={styles.column}>
                            <Link to={`/activity/3`}>
                                <Card
                                    title={cards[3].title}
                                    description={cards[3].description}
                                    image={cards[3].image}
                                    requirmens={cards[3].requirmens}
                                    age={cards[3].age}
                                    materials={cards[3].materials}
                                    activeDay={cards[3].activeDay}
                                    goal={cards[3].goal}
                                    category={cards[3].category}
                                />
                            </Link>
                            <Link to={`/activity/4`}>
                                <Card
                                    title={cards[4].title}
                                    description={cards[4].description}
                                    image={cards[4].image}
                                    requirmens={cards[4].requirmens}
                                    age={cards[4].age}
                                    materials={cards[4].materials}
                                    activeDay={cards[4].activeDay}
                                    goal={cards[4].goal}
                                    category={cards[4].category}
                                />
                            </Link>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.controls}>
                <img src={btn_simple} onClick={() => setMode("SIMPLE")} />
                <img src={btn_rotate} onClick={() => setMode("ROTATE")} />
                <img src={btn_multiple} onClick={() => setMode("MULTIPLE")} />
            </div>
        </div>
    )

};

