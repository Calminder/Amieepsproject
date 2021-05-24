import {useEffect, useState} from "react";
import {getCards} from "../services/firebase.service";

export const cards =()=>{
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(async () =>
    {
        setLoading(true);
        const result = await getCards();
        console.log(result);
        setCards(result);
        setLoading(false)
    }, []);

};

