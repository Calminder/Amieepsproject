import React, { useState } from "react";
import Header from './header';
import { FAQ } from './FAQ';
import styles from './fqa.module.css';
import { getData } from "./faqData";


export const Faq = () =>
{
    const data = getData();
    const [faqs, setfaqs] = useState([
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at beatae consequuntur corporis dolor ducimus ea earum eligendi esse eveniet, fuga fugiat fugit itaque minima nihil recusandae sint unde ut veniam voluptas? Aperiam assumenda, dignissimos dolor, dolore inventore iure praesentium provident quas sed similique tenetur, voluptas voluptatem. Accusamus cum dolor inventore ipsum iusto natus omnis saepe ullam voluptate voluptatum. Inventore nobis, sequi! Aut corporis, dolores",
            open: false
        },
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at beatae consequuntur corporis dolor ducimus ea earum eligendi esse eveniet, fuga fugiat fugit itaque minima nihil recusandae sint unde ut veniam voluptas? Aperiam assumenda, dignissimos dolor, dolore inventore iure praesentium provident quas sed similique tenetur, voluptas voluptatem. Accusamus cum dolor inventore ipsum iusto natus omnis saepe ullam voluptate voluptatum. Inventore nobis, sequi! Aut corporis, dolores",
            open: false
        },
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at beatae consequuntur corporis dolor ducimus ea earum eligendi esse eveniet, fuga fugiat fugit itaque minima nihil recusandae sint unde ut veniam voluptas? Aperiam assumenda, dignissimos dolor, dolore inventore iure praesentium provident quas sed similique tenetur, voluptas voluptatem. Accusamus cum dolor inventore ipsum iusto natus omnis saepe ullam voluptate voluptatum. Inventore nobis, sequi! Aut corporis, dolores",
            open: false
        },
        {
            question: "Can mindfulness help with behavior problems?If so,in what way?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at beatae consequuntur corporis dolor ducimus ea earum eligendi esse eveniet, fuga fugiat fugit itaque minima nihil recusandae sint unde ut veniam voluptas? Aperiam assumenda, dignissimos dolor, dolore inventore iure praesentium provident quas sed similique tenetur, voluptas voluptatem. Accusamus cum dolor inventore ipsum iusto natus omnis saepe ullam voluptate voluptatum. Inventore nobis, sequi! Aut corporis, dolores",
            open: false
        },
    ]);

    const toggleFAQ = index =>
    {
        let previousArray = [...faqs];
        previousArray[index].open = !previousArray[index].open;
        setfaqs(previousArray)
    };

    return (
        <div>
            <div className={styles.logoHolder}>
                <img src="./logo.png" alt="AMiE" />
            </div>
            <Header />
            <div className={styles.faqs} >

                {faqs.map((faq, i) => (
                    <div className={styles.faq}>

                        <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />

                    </div>
                ))}
            </div>
        </div>
    )
};

