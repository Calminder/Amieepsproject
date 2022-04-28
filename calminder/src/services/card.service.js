import { categories } from '../constants/cards';

export const getCardImageByCategory = (category) => categories.find(c => c.name === category);
//category - это аргумент
// ищет категории по заданному слову categories.find(c => c.name === category)
// c  - возвращаемая пара (изображение, категория)