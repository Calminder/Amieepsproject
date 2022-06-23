import firebase from '../../Firebase';

const componentData = exercise =>
{
    firebase.database().ref('Calminder-exercise').on('value', snapshot =>
    {
        let exerciseList = [];
        snapshot.forEach(snap =>
        {
            exerciseList.push(snap.val());
        })
        return exerciseList;
    });
};
// gives the whole list of exercises with attributes form Firebase
export const getData = () => componentData();