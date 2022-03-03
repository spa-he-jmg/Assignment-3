import { Deck } from './Deck.js';

export class Shoe {
    constructor() {
        this.decks = [];
    }

    build() {
        for (let i = 0; i < 5; i++) {
            const deck = new Deck();
            deck.shuffle();
            this.decks.push(...deck);
        }
    }
}