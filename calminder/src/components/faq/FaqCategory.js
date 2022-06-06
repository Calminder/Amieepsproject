import React from 'react';
import styles from "./fqa.module.css";
import { useEffect, useState } from 'react';
import FaqCard from './FaqCard';
import { getFaqs } from '../../services/firebase.service';

function FaqCategory(props) {
    const colors = [{
            value: "#FA4659" //redish
        },
        {
            value: "#364F6B" //dark-blue
        },
        {
            value: "#A9EEE6" //light-green
        },
        {
            value: "F0D43A" //yellow
        },
        {
            value:"#95ADBE"
        },
        {
            value:"247E6C"
        }
    ];
    const [category, setCategory] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [index] = useState(props.index);
    const [open, setOpen] = useState(false);
    ////////////////////////////////////////
    ////////////
    useEffect(async () => {
        const result = await getFaqs();
        setQuestions(result);
        setCategory(props.category);
        console.log("FAQ Category works!");
    }, []);

    const toggleFAQ  = () => {
        setOpen(!open);
        console.log("FAQ Category works!");
    };

    const toggleClass = open ? styles.faqCategoryOpen : styles.faqCategoryClose;

        return (

            <div
                className={toggleClass}
                key={index}
                onClick={toggleFAQ}
            >

                <div className={styles.categoryContainer}>
                    <div className={styles.imgContainerCategory}
                    style={{
                        backgroundColor: colors[index].value 
                    }}
                    >
                    </div>
                    <div className={styles.faqCategory}>
                        <h1>{category}</h1>
                    </div>
                    <ol className={styles.faqsFromCategory}>{
                        questions.filter(filter => filter.category == category).map((question, index) => (
                            <li key={question.id}>
                                <FaqCard
                                    question={question}
                                    index={index}
                                />
                            </li>
                        ))
                    }
                    </ol>
                </div>
            </div>
        )
    };


    export default FaqCategory;
