import { Card } from '../../cards/card';
import styles from './activity.module.css';
import { getCardById } from '../../services/card.service';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
export const Activity = () => {
    const { id } = useParams();

    const card = getCardById(id);

    const { title, duration, requirmens, age, materials, description, goal } = card;

    return (
    card &&
    <div className={styles.shadow}>
        <Link to="/" className={styles.backBtn}>Back</Link>

        <div className={styles.wrapper}>

            <div className={styles.goal}>
                <div className={styles.title}>
                    Activity name ({goal.title})
                </div>
                <div className={styles.value}>
                    {goal.value}
                </div>
            </div>

            <Card 
                title={title}
                description={description}
                requirmens={requirmens}
                age={age}
                materials={materials}
                goal={goal}
            />

            <div className={styles.info}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        Title
                    </div>
                    <div className={styles.desc}>
                        {title}
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.title}>
                        Duration
                    </div>
                    <div className={styles.desc}>
                        {duration}
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.title}>
                        Requirments
                    </div>
                    <div className={styles.desc}>
                        {requirmens}
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.title}>
                        Age
                    </div>
                    <div className={styles.desc}>
                        {age}
                    </div>
                </div>
                
                <div className={styles.item}>
                    <div className={styles.title}>
                        Materials
                    </div>
                    <div className={styles.desc}>
                        {materials}
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.title}>
                        Description
                    </div>
                    <div className={styles.desc}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}