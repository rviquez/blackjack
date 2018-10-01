import { Component } from '@angular/core';
import { Deck } from '../shared/deck';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  deck = new Deck();
  dealerDeck = new Deck();
  playerDeck = new Deck();
  numberOfPlayers = 1;
  players: any[] = [1];
  gameStarted = false;

  constructor() {}

  startGame() {
    this.deck.makeDeck(1);
    this.deck.shuffleDeck(4);
    this.gameStarted = true;
    this.dealerDeck.cards.push(this.deck.deal().flipCard());
    this.dealDealer();
    this.dealPlayer();
    this.dealPlayer();
  }

  playersPlaying() {
    for (
      let playerNumber = 0;
      playerNumber < this.numberOfPlayers;
      playerNumber++
    ) {
      this.players.push(playerNumber);
    }
  }
  dealDealer() {
    this.dealerDeck.cards.push(this.deck.deal());
  }

  dealPlayer() {
    this.playerDeck.cards.push(this.deck.deal());
  }
}
