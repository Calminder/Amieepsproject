import React from 'react';
import styles from "./fqa.module.css";
import { useEffect, useState } from 'react';


function FaqCard(props) {
    const [question, setQuestion] = useState({});
    const [index] = useState(props.index);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setQuestion(props.question);
    }, []);
    // here is an error
    const toggleFAQ  = () => {
        setOpen(!open);
    };

    const toggleClass = open ? styles.faqOpen : styles.faq;

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
                      <p> {question.answer}</p>  
                    </div>
                </div>
            </div>
        )
    };


    export default FaqCard;
