import firebase from '../../Firebase';

const componentFaq = fag =>
{
    firebase.database().ref('questions').on('value', snapshot =>
    {
        let faqList = [];
        snapshot.forEach(snap =>
        {
            faqList.push(snap.val());
        });
        return faqList;
        //returns an array of FAQs
    });
};

export const getData = () => componentFaq();

