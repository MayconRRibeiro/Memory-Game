import { v4 as uuidv4 } from 'uuid';

import {
  angularJS,
  aurelia,
  backboneJS,
  css3,
  ember,
  html5,
  javascript,
  polymer,
  redux,
  vueJS,
} from '../assets';

interface Card {
  id: string;
  imageURL: string;
}

const cardImages: string[] = [
  angularJS,
  aurelia,
  backboneJS,
  css3,
  ember,
  html5,
  javascript,
  polymer,
  redux,
  vueJS,
];

function shuffleCards(cards: Card[]): Card[] {
  return cards.sort(() => Math.random() - 0.5);
}

export default function generateCards(): Card[] {
  const cards = cardImages.map<Card>(cardImage => ({
    id: uuidv4(),
    imageURL: cardImage,
  }));

  const cloneCards = cards.map(card => ({ ...card, id: uuidv4() }));

  return shuffleCards([...cards, ...cloneCards]);
}
