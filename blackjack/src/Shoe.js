import { Deck } from './Deck.js';

export class Shoe {
    constructor() {
        this.decks = [];
        this.build();
    }

    build() {
        for (let i = 0; i < 4; i++) {
            const deck = new Deck();
            this.decks.push(...deck.cards);
        }
    }

    shuffle() {
        for(let i = 207; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            const temp = this.decks[i];

            this.decks[i] = this.decks[r];
            this.decks[r] = temp;
        }
    }
}