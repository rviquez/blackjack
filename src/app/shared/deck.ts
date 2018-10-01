import { Card } from './card';

enum CardType {
  hearts = '\u2665',
  diamonds = '\u2666',
  clubs = '\u2663 ',
  spades = '\u2660'
}

enum CardColor {
  red = '#cc0033',
  black = '#000000'
}

export class Deck {
  cards: Card[];
  constructor() {
    // Create an empty array of cards.
    this.cards = [];
  }

  makeDeck(numberOfPacks: number) {
    const values: any[] = [
      { displayValue: 'A', value: 1 },
      { displayValue: '2', value: 2 },
      { displayValue: '3', value: 3 },
      { displayValue: '4', value: 4 },
      { displayValue: '5', value: 5 },
      { displayValue: '6', value: 6 },
      { displayValue: '7', value: 7 },
      { displayValue: '8', value: 8 },
      { displayValue: '9', value: 9 },
      { displayValue: '10', value: 10 },
      { displayValue: 'J', value: 10 },
      { displayValue: 'Q', value: 10 },
      { displayValue: 'K', value: 10 }
    ];
    const suits = [
      CardType.clubs,
      CardType.diamonds,
      CardType.hearts,
      CardType.spades
    ];
    let pack, suit, cardValue;
    let combinations;

    combinations = values.length * suits.length;

    // Set array of cards.
    this.cards = new Array(numberOfPacks * combinations);

    // Fill the array with 'numberOfPacks' of cards.
    for (pack = 0; pack < numberOfPacks; pack++) {
      for (suit = 0; suit < suits.length; suit++) {
        for (cardValue = 0; cardValue < values.length; cardValue++) {
          this.cards[
            pack * combinations + suit * values.length + cardValue
          ] = new Card(
            values[cardValue].value,
            values[cardValue].displayValue,
            suits[suit] === CardType.clubs || suits[suit] === CardType.spades
              ? CardColor.black
              : CardColor.red,
            suits[suit],
            false
          );
        }
      }
    }
  }
  shuffleDeck(numberOfShuffles) {
    let shuffle, cardPlace, newCardPlace;
    let shuffledCard;
    // Shuffle the deck 'numberOfShuffles' .
    for (shuffle = 0; shuffle < numberOfShuffles; shuffle++) {
      for (cardPlace = 0; cardPlace < this.cards.length; cardPlace++) {
        newCardPlace = Math.floor(Math.random() * this.cards.length);
        shuffledCard = this.cards[cardPlace];
        this.cards[cardPlace] = this.cards[newCardPlace];
        this.cards[newCardPlace] = shuffledCard;
      }
    }
  }

  deal() {
    if (this.cards.length > 0) {
      return this.cards.shift();
    } else {
      return null;
    }
  }

  cardCount() {
    return this.cards.length;
  }

  combineDecks(deck) {
    this.cards = this.cards.concat(deck.cards);
    deck.cards = [];
  }
}
