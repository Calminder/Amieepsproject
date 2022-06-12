import React, { Component } from 'react';
import FaqCard from "./FaqCard";
import { useEffect, useState } from 'react';
import styles from './fqa.module.css';
import Header from './header';
import { getFaqs } from '../../services/firebase.service';
import FaqCategory from './FaqCategory';
let count = 0;
const categories = [];
function UniqueCategories (props) {
    let searchForCategories;
    count++;
    props.FAQs.forEach( searchForCategories = (item) => {
        if (item.category != "" & !categories.includes(item.category)) {
            categories.push(item.category);
        }
    })
    console.log(categories,' ',count);
    return (
        <div></div>
    );
}
export const FaqList = (props) =>
{
    const [questions, setQuestions] = useState([]);
    //above useState([]) is correct
    const [loading, setLoading] = useState(false);
    useEffect(async () =>
    { 
        setLoading(true);
        const result = await getFaqs();
        setQuestions(result);
        setLoading(false);
    }, []);
    return (

        <>
            <Header>

            </Header>
            {
                loading && <div>Loading...</div>
            }
            <UniqueCategories 
                FAQs = {questions}
            />
            {
                !loading 
                && 
                <div className={styles.faqCategories}>
                {
                    categories.map((category, index) => (
                        <div key={category.id}>
                            <FaqCategory 
                                category={category}
                                index={index}
                             />
                        </div>
                    ))
                }
                </div>
            }
        </>
    )
};

export default FaqList;
