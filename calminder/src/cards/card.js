import styles from './card.module.css';

export const Card = ({title, description, image, activeDay}) => {
    return (
    <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront} style={{
                backgroundImage:`url(${(image)})`,
                backgroundSize: "cover"
            }}>
                hello world
                {activeDay}
            </div>
            <div className={styles.flipCardBack}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
    )
};