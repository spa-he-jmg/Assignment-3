import { Deck } from './Deck.js';

export class Shoe {
    constructor() {
        this.decks = [];
    }

    build() {
        for (let i = 0; i < 4; i++) {
            const deck = new Deck();
            deck.shuffle();
            this.decks.push(...deck);
        }
    }

    shuffle() {
        for(let i = 207; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];

            this.cards[i] = this.cards[r];
            this.cards[r] = temp;
        }
    }
}