import styles from './card.module.css';
import { getCardImageByCategory } from '../services/card.service';

export const Card = ({ title, description, image, activeDay, style, category }) => {
    const selectCategory = getCardImageByCategory(category) || '';
    return (
        <div className={styles.flipCard} style={style}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront} style={{
                    backgroundImage: `url(${(selectCategory.image)})`,
                    backgroundSize: "cover"
                }}>
                    {activeDay}
                </div>
                <div className={styles.flipCardBack} style={{
                    backgroundSize: "cover"
                }}
                >
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
};