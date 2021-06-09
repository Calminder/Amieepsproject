import firebase from '../Firebase';
export const getFaqs = () => {
    return new Promise((resolve, reject) => {
        firebase.database().ref('questions').on('value', snapshot => {
            let array = [];
            snapshot.forEach(snap => {array.push(snap.val())});
            return resolve(array);
        });
    })
};


export const getCards = () => {
    return new Promise((resolve, reject) => {
        firebase.database().ref('Calminder-exercise').on('value', snapshot => {
            let array = [];
            snapshot.forEach(snap => {
             array.push(snap.val())});
            return resolve(array);
        });
    })
};
