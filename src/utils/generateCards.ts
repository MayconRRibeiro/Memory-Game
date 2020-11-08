import { v4 as uuidv4 } from 'uuid';

import CardDTO from '../dtos/CardDTO';

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

function shuffleCards(cards: CardDTO[]): CardDTO[] {
  return cards.sort(() => Math.random() - 0.5);
}

export default function generateCards(): CardDTO[] {
  const cards = cardImages.map<CardDTO>(cardImage => ({
    id: uuidv4(),
    imageURL: cardImage,
    isFlipped: true,
  }));

  const cloneCards = cards.map(card => ({ ...card, id: uuidv4() }));

  return shuffleCards([...cards, ...cloneCards]);
}
