import { Card } from './card';
import { cards } from '../constants/cards';
import styles from './list.module.css';
import { Link } from 'react-router-dom';

export const List = () => {
   
    return ( 
    <div className={styles.wrapper}>
        <div className={styles.overflow}>
            <div className={styles.list}>
                {cards.map(card =>
                    <Link to={`/activity/${card.id}`}>
                        <Card
                        title={card.title}
                        description={card.description}
                        requirmens={card.requirmens}
                        age={card.age}
                        materials={card.materials}
                        goal={card.goal}
                    />
                </Link>
                )}
            </div>
        </div>
    </div>
    )
    
}
