import React from 'react';
import styles from "./list.module.css";
import { categories } from '../constants/cards';

//category - это аргумент
// ищет категории по заданному слову categories.find(c => c.name === category)
// c  - возвращаемая пара (изображение, категория)
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

function showAllExcercises() {
    console.log(categories.length);

}


function ChoiceOfCategories()
{
    return(
        <div className={styles.textSection}>
                    <p>Mindfulness is beneficial for children of all ages as they learn how to bring a gentle,
                        accepting atitude to the present moment. Mindfulness together with art will create an approachable
                        environment for children. On the Calminder website exercises are provided to help implement arts
                        and mindfulness in education. These exercises range from painting to paying attention to your
                        surroundings. Let's get started!
                    </p>
                    <button onClick ={showAllExcercises}> Show all exercises </button>
                    <p id="demo"></p>
                </div>
    )
}

export default ChoiceOfCategories;