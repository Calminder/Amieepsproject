import { Card } from '../../cards/card';
import styles from './activity.module.css';
import { getCardById } from '../../services/card.service';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
export const Activity = () =>
{
    const { id } = useParams();
    const [cardOpened, setCardOpened] = useState(false);

    const card = getCardById(id);

    const { title, duration, requirmens, age, materials, description, goal } = card;

    return (
        card &&
        <div className={styles.shadow}>
            <Link to="/" className={styles.backBtn}>Back</Link>


            <div className={styles.wrapper}>
                <div className={cardOpened ? styles.cardActiveWrapper : styles.cardCloseWrapper}>
                    <div className={styles.cardActive}>
                        <div className={styles.close} onClick={() => setCardOpened(false)}>X</div>
                        <div className={styles.title}>
                            Activity name ({goal.title})
                        </div>
                        <div className={styles.value}>
                            {goal.value}
                        </div>
                    </div>
                </div>

                <div className={styles.goal}>
                    <h1 className={styles.title}>
                        Activity name
                    </h1>
                    <div className={styles.pic}>

                    </div>
                    <div className={styles.title2}>
                        <span className={styles.text2}>
                            Goal
                            </span>
                    </div>
                    <section className={styles.value}>
                        {goal.value}
                    </section>
                </div>

                <section className={styles.card} onClick={() => setCardOpened(true)}>
                    <div className={styles.output}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.desc}>{description}</div>
                    </div>
                </section>

                <div className={styles.info}>
                    <div className={styles.item}>

                        <div className={styles.title}>
                            <span className={styles.text}>
                                Title
                            </span>

                        </div>
                        <div className={styles.desc}>
                            {title}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Duration
                            </span>

                        </div>
                        <div className={styles.desc}>
                            {duration} minutes
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Requirments
                            </span>

                        </div>
                        <div className={styles.desc}>
                            {requirmens}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Age
                                     </span>
                        </div>
                        <div className={styles.desc}>
                            {age}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Materials
                                     </span>
                        </div>
                        <div className={styles.desc}>
                            {materials}
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.title}>
                            <span className={styles.text}>
                                Description
                            </span>
                        </div>
                        <div className={styles.desc}>
                            <div className={styles.scrolltext}>
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}