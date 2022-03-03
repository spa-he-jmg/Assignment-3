import { Card } from './Card.js';

export class Deck {
    constructor() {
        this.cards = [];
    }

    build() {
        // Iterate through suites
        for (const suit of ['Spades', 'Hearts', 'Clubs', 'Diamonds']) {

            const cards = {
                'A': 11, 
                '2': 2, 
                '3': 3, 
                '4': 4, 
                '5': 5, 
                '6': 6, 
                '7': 7, 
                '8': 8, 
                '9': 9, 
                '10': 10, 
                'J': 10, 
                'Q': 10, 
                'K': 10
            };

            for (const card in cards) {
                this.cards.push(new Card(suit, card, cards[card]));
            }
        }
    }

    shuffle() {
        for(let i = 51; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            const temp = this.cards[i];

            this.cards[i] = this.cards[r];
            this.cards[r] = temp;
        }
    }
}