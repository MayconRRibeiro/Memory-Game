import { v4 as uuidv4 } from 'uuid';

import CardDTO from '../dtos/CardDTO';

import {
  angularJS,
  aurelia,
  backboneJS,
  css3,
  emberJS,
  html5,
  javascript,
  polymer,
  redux,
  vueJS,
} from '../assets';

interface cardImageProps {
  image: string;
  name: string;
}

const cardImages: cardImageProps[] = [
  {
    image: angularJS,
    name: 'angularJS',
  },
  {
    image: aurelia,
    name: 'aurelia',
  },
  {
    image: backboneJS,
    name: 'backboneJS',
  },
  {
    image: css3,
    name: 'css3',
  },
  {
    image: emberJS,
    name: 'emberJS',
  },
  {
    image: html5,
    name: 'html5',
  },
  {
    image: javascript,
    name: 'javascript',
  },
  {
    image: polymer,
    name: 'polymer',
  },
  {
    image: redux,
    name: 'redux',
  },
  {
    image: vueJS,
    name: 'vueJS',
  },
];

function shuffleCards(cards: CardDTO[]): CardDTO[] {
  return cards.sort(() => Math.random() - 0.5);
}

export default function generateCards(): CardDTO[] {
  const cards = cardImages.map<CardDTO>(cardImage => ({
    id: uuidv4(),
    imageURL: cardImage.image,
    imageName: cardImage.name,
    isFlipped: true,
  }));

  const cloneCards = cards.map(card => ({ ...card, id: uuidv4() }));

  return shuffleCards([...cards, ...cloneCards]);
}
