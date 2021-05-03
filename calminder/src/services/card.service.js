import { cards } from '../constants/cards';

export const getCardById = (id) =>  {console.log(cards);return cards.find(card => card.id == id) }