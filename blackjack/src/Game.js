import { Shoe } from './Shoe.js';
import { Hand } from './Hand.js';

export class Game {

    constructor() {
        this.shoe = new Shoe();
        this.shoe.shuffle;
        

        this.userWallet = 1000;

        this.userHands = [new Hand()];
        this.dealerHands = new Hand();

        this.currentHand = 0;

        for (let i = 0; i < 2; i++) {
            // Deal initial hands
            this.dealCard('user');

            this.dealCard('dealer');
        }
    }

    pickCard(player) {
        // Get random index
        const ran = Math.floor(Math.random() * this.shoe.length));

        // Pick card from shoe
        const card = this.shoe[ran];

        // Add card to players hand
        this[`${player}Hand`].push(card);

        // Remove card from shoe
        this.shoe.splice(ran, 1);

        // Return card
        return card;
    }

    dealCard(player) {
        if (player === 'user' && ) {

        }
        const card = this.pickCard(player);


    }

    updateScore(val, player) {
        let updatedScore = this[`${player}Score`] + val;

        if (updatedScore > 21 && )
    }
}