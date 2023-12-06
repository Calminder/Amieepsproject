import React from 'react';
import styles from './framework.module.scss';

import Header from './header'


export const Framework = () =>
{
    const onButtonClick = () => {
        const pdfUrl = "pedagogical framework_AMiE.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = pdfUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Header>
            </Header>
            <div className={styles.wrapper}>
                <section className={styles.first_screen}>
                    <div className = {styles.title}>
                        Framework
                    </div>
                    <div className = {styles.full}>
                        <p>Hello there!</p>
                        <p>To help you bring arts and mindfulness in education we have designed a simple pedagogical framework.</p>
                        <p>If you want to know more about how you can use this framework make sure to follow the free AMiE online course (available on Udemy)</p>
                        <p>You can find the AMiE pedagogical framework here:</p>
                        <button onClick = {onButtonClick}>
                            Download PDF
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
};