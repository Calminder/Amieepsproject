import firebase from '../Firebase';

export const getFaqs = () => {
    return new Promise((resolve, reject) => {
        firebase.database().ref('questions').on('value', snapshot => {
            let faqList = [];
            snapshot.forEach(snap => faqList.push(snap.val()));
            return resolve(faqList);
        });
    })
}
