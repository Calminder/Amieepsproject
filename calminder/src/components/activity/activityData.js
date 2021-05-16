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
        console.log(exercise);
        return exercise;
    });
};

export const getData = () => componentData();