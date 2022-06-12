import React from 'react';
import styles from "./fqa.module.css";
import { useEffect, useState } from 'react';
import FaqCard from './FaqCard';
import { getFaqs } from '../../services/firebase.service';

function FaqCategory(props) {
    const colors = [{
            value: "#0066cc" //blue
        },
        {
            value: "#ff6600" //orange
        },
        {
            value: "#009900" //green
        },
        {
            value: "#b30086" //lila
        },
        {
            value:"#ff9900" //golden
        }
    ];
    const [category, setCategory] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [index] = useState(props.index);
    const [open, setOpen] = useState(false);
    ////////////////////////////////////////
    useEffect(async () => {
        const result = await getFaqs();
        setQuestions(result);
        setCategory(props.category);
    }, []);

    const toggleFAQ  = () => {
        setOpen(!open);
    };

    const toggleClass = open ? styles.faqCategoryOpen : styles.faqCategoryClose;
        return (

            <div
                className={toggleClass}
                key={index}
            >

                <div className={styles.categoryContainer}
                    onClick={toggleFAQ}
                >
                    <div className={styles.imgContainerCategory}
                    style ={{
                        backgroundColor: colors[index].value
                    }}
                    >
                    </div>
                    <div className={styles.faqCategory}>
                        <h1>{category}</h1>
                    </div>
                </div>
                <div className={styles.faqsFromCategory}> {
        
                    questions.filter(filter => filter.category == category).map((question, index) => (
                        <div key={question.id}>
                            <FaqCard
                                question={question}
                                index={index}
                            />
                        </div>
                    ))
                }
                </div>
            </div>
        )
    };


    export default FaqCategory;
