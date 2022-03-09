import { Shoe } from './Shoe.js';
import { Hand } from './Hand.js';

export class Game {

    constructor() {
        this.shoe = new Shoe();
        this.shoe.shuffle;

        this.discard = [];
        

        this.wallet = 1000;
        this.initBet = 0;

        this.userHands = [new Hand()];
        this.dealerHand = new Hand();

        this.currentHand = 0;
    }

    addbet(amount) {

        if (amount === 'all') {
            amount = this.wallet;
        }

        if (amount <= wallet) {

            this.wallet -= amount
            this.initBet += amount;

            // Display bet added to table

            // Update available chips
        }
        else {
            console.log('Insufficient balance in wallet.')
        }
    }

    removeBet(amount) {
            if (this.initBet >= amount) {
                this.initBet -= amount;
            }

            if (this.initBet === 0) {
                // Remove the deal button
            }
    }

    initHand() {
        if (this.initBet >= 5) {
            for(let i = 0; i < 2; i++) {
                hit('user');

                hit('dealer');
            }

            if (this.dealerHand.cards[1].value === 11 && 
                this.wallet >= this.userHands[0].bet / 2) {
                // Display option for insurance

            }
        }
    }

    insurance() {
        const insureCheck = this.userHands[0].insure();

        if (!insureCheck) {
            // Display insurance error
        }

        // Display insurance
    }

    doubleDown() {
        const currentBet = this.userHands[this.currentHand].bet;
        if (this.wallet >= currentBet) {
            this.wallet -= currentBet;
            currentBet += currentBet;

            // Remove from display wallet

            // Display added bet

            // Remove option to double
        }
        else {
            console.log('Insufficient ballance in wallet')
        }
    }

    hit(player) {

        // Pick card from shoe
        const card = this.shoe[Math.floor(Math.random() * this.shoe.length)];

        if (player === 'user' && !this.userHands[this.currentHand].done) {

            const hand = this.userHands[this.currentHand];

            const addCheck = this.userHands[this.currentHand].addCard(card);

            if (!addCheck) {
                // Display that there was an error
                
            }
            else {
                // Display new card
            }

            // Check for black jack
            if (hand.score === 21) {
                // Display user black jack
            }

            // Check for bust
            if (hand.score > 21) {
                // Display user bust
            }

            if ((this.currentHand + 1) < this.userHands.length) {
                // Show next hand
            }

        }
        else if (player === 'dealer' && !this.dealerHand.done) {
            
            const addCheck = this.dealerHand.addCard(card);

            if (!addCheck) {
                // Display that there was a dealer error
            }
            else {
                if (this.dealerHand.cards.length === 1) {
                    // Display card face down
                }
                // Display new card
            }

            if (this.dealerHand.score)

            if (this.dealerHand.score === 21) {
                // Display dealer blackjack

                // End game
            }

            if (this.dealerHand > 21) {
                // Display dealer bust
            }
        }
    }
    
    stand() {
        
    }

    split(){
        // Get current hand
        const hand = this.userHands[this.currentHand];

        // Get current bet
        const currentBet = hand.bet;

        // Check that user has enough in wallet to 
        if (this.wallet >= currentBet) {
            // Attempt to split hand
            const splitHand = hand.splitHand();

            // Check that splitting hand was succesful
            if (!splitHand) {
                // Display that there was an error splitting hand
            }
            else {
                // Remove split bet from wallet
                this.wallet -= currentBet;

                // Add bet to split hand
                splitHand.bet = currentBet;

                // Add split hand to user hands
                this.userHands.push(splitHand);

                // Display split hand and bet to the side

                // Add card to current hand
                this.hit();
            }
        }
        else {
            console.log('Insufficient ballance in wallet');
        }
    }
}