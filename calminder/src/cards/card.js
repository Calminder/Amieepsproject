import styles from './card.module.css';

export const Card = ({title, description}) => {
    return (
    <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
                hello world
            </div>
            <div className={styles.flipCardBack}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
    )
}