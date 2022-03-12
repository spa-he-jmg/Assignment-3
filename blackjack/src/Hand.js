import { Card } from "./Card.js";

export class Hand {
    constructor() {
        this.bet = 0;
        this.score = 0;
        this.cards = [];
        this.blackjack = false;
        this.softAce = false;
        this.insurance = false;
        this.done = false;
    }

    double() {
        try {
            if(this.cards.length !== 2) {
                throw new Error('Double only on initial hand.');
            }

            this.bet += this.bet;

            return true;
            
        } catch (error) {
            console.log(error);

            return false;
        }
    }

    stand() {
        try {
            if (this.done) {
                throw new Error('Hand already done');
            }

            this.done = true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    addCard(card) {
        try {
            console.log(card);
            // Check if hand is complete
            if (this.done || this.score > 20) {
                throw new Error('Hand is already complete');
            }

            // Add card to hand
            this.cards.push(card);

            // Check for soft ace
            if(card.value === 11 && this.score < 11 && !this.softAce) {
                this.softAce = true;
            }
            
            // Increase score
            this.score += (card.value === 11 && this.score > 10) ? 1 : card.value;

            // Check for black jack
            if (this.cards.length === 2 && this.score === 21) {
                this.blackjack = true;
                this.done = true;
            }
            else {
                // Check for bust with soft ace
                if (this.score > 21 && this.softAce) {
                    // Decrement soft ace
                    this.score -= 10;
                    
                    // Change soft ace check
                    this.softAce = false;
                }

                // Check if score is over 20
                if (this.score > 20) {
                    this.done = true;
                }
            }
            
            // Card was added succesfully
            return true;
        } catch (error) {
            // Log error
            console.log(error);

            // Card was not added
            return false;
        }
    }

    splitHand() {
        try {
            // Check if split is valid
            if (this.cards.length !== 2 || (this.cards.length === 2 && this.cards[0].value !== this.cards[1].value)) {
                throw new Error('Split is not valid.');
            }

            // Remove split card
            const splitCard = this.cards.splice(1, 1)[0];

            // Decrement current hand score
            this.score -= splitCard.value === 11 ? 1 : splitCard.value;
            
            // Create next hand
            const nextHand = new Hand();

            // Add split card to hand
            const addCheck = nextHand.addCard(splitCard);

            // Check if split card was added successfully
            if (!addCheck) {
                throw new Error('Error adding split card to new hand');
            }

            // Return next hand
            return nextHand;

        } catch (error) {
            // Log error
            console.log(error);

            // Indicate that split was invalid
            return false;
        }
    }
}