import React from "react";
import styles from "./fqa.module.css";

export const FAQ = ({faq,index, toggleFAQ}) => {

    const toggleClass = faq.open ? styles.faqOpen : styles.faq
     return (

        <div
            className={toggleClass}
            key={index}
            onClick={()=> toggleFAQ(index) }
        >

            <div className={styles.faqQuestion}>
                {faq.question}
            </div>
            <div className={styles.faqAnswer} >
                {faq.answer}
            </div>
        </div>

 )
};
