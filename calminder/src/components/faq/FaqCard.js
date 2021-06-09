import React from 'react';
import styles from "./fqa.module.css";
import { useEffect, useState } from 'react';


function FaqCard(props) {
    const [question, setQuestion] = useState({});
    const [index] = useState(props.index);

    useEffect(() => {
        setQuestion(props.question);
    }, []);

    const toggleFAQ  = () => {
        setQuestion({...question, open: !question.open})
    };

    const toggleClass = question.open ? styles.faqOpen : styles.faq;

        return (

            <div
                className={toggleClass}
                key={index}
                onClick={toggleFAQ}
            >

                <div className={styles.questionContainer}>
                    <div className={styles.imgContainerQuestion}>
                        
                    </div>
                    <div className={styles.faqQuestion}>
                        <h1>{question.title}</h1>
                    </div>
                </div>
                
                <div className={styles.answerContainer}>
                    <div className={styles.shadow}></div>
                    <div className={styles.imgContainerAnswer}>

                    </div>
                    <div className={styles.faqAnswer} >
                        {question.answer}
                    </div>
                </div>
            </div>
        )
    };


    export default FaqCard;
