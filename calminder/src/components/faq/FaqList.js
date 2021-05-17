import React, { Component } from 'react';
import FaqCard from "./FaqCard";
import { loadJson } from "../../utils";
import { useEffect, useState } from 'react';
import styles from './fqa.module.css';
import Header from './header'
export const FaqList = (props) =>
{
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(async () =>
    {
        setLoading(true);
        const result = await loadJson('/questions.json');
        console.log(result);
        setQuestions(result);
        setLoading(false)
    }, []);

    return (

        <>
            <Header>

            </Header>
            {
                loading && <div>Loading...</div>
            }
            {
                !loading &&
                <ol className={styles.faqs}>
                    {
                        questions.map((question, index) => (
                            <li key={question.id}>
                                <FaqCard question={question} index={index} />
                            </li>
                        ))
                    }
                </ol>
            }
        </>
    )
};

export default FaqList;
