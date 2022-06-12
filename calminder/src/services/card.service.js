import { categories } from '../constants/cards';

export const getCardImageByCategory = (category) => categories.find(c => c.name === category);
// c  - returns a pair: [image, category]