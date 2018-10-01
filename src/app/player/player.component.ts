import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Deck } from '../shared/deck';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() number: any;
  @Input() deck: Deck;
  @Output() hitMe = new EventEmitter();

  constructor() {}

  hit() {
    this.hitMe.emit();
  }
}
