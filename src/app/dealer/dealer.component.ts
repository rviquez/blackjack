import { Component, Input } from '@angular/core';
import { Deck } from '../shared/deck';

@Component({
  selector: 'dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent {
  @Input() deck: Deck;
  constructor() { }

}
