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
        console.log(faqList);
        return faqList;
    });
};

export const getData = () => componentFaq();

