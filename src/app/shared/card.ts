export class Card {
  value: number;
  displayValue: string;
  color: string;
  type: string;
  faceDown: boolean;
  constructor(value: number, displayValue: string, color: string, type: string, faceDown: boolean) {
    this.value = value;
    this.displayValue = displayValue;
    this.color = color;
    this.type = type;
    this.faceDown = faceDown;
  }

  flipCard() {
    this.faceDown = !this.faceDown;
    return this;
  }
}
