/*import React from 'react';
import styles from "./fqa.module.css";
import Header from "./header";
import {FAQ} from "./FAQ";
//верстка карточки вопроса и ответа
function FaqCard(props) {
    const { question } = props;



    const toggleFAQ = index => {
        let previousArray = [...question];
        previousArray[index].open = !previousArray[index].open;
        setquestion(previousArray)
    };

    return    <div>
        <div className={styles.faqs} >
            {question.map((faq, i) => (
                <div className={styles.faq}>

                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>

                </div>
            ))}
        </div>
    </div>;
}

export default FaqCard;*//