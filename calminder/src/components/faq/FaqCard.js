import React from 'react';
import styles from "./faq.module.css";
import { useEffect, useState } from 'react';
import {getFormattedText} from './textFormatting.js';
function FormatText(props)
{
    const items = props.text;
    if (items.length > 0 ){
        const listItems = items.map((item) =>
            <li>{item}</li>
        );
        return (
            <div>
                <ul 
                style ={{ listStyleType:"none"}}>
                    {listItems}
                </ul>
            </div>
        );
    }
    else {
        return (
            <div>
            </div>
        );
    }
}
function FaqCard(props) {
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState([]);
    const [index] = useState(props.index);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setQuestion(props.question);
        setAnswer(getFormattedText(props.question.answer));
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
            >

                <div className={styles.questionContainer}
                onClick={toggleFAQ}>
                    <div className={styles.imgContainerQuestion}>
                        
                    </div>
                    <div className={styles.faqQuestion}>
                        <h1>{question.title}</h1>
                    </div>
                </div>
                
                <div className={styles.answerContainer}>
                    <div className={styles.imgContainerAnswer}>

                    </div>
                    <div className={styles.faqAnswer} >
                        <FormatText
                            text = {answer}
                        />  
                    </div>
                </div>
            </div>
        )
    };


    export default FaqCard;
