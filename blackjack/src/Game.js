import { Shoe } from './Shoe.js';
import { Hand } from './Hand.js';
import { Table } from './Table.js';

export class Game {

    constructor() {
        this.shoe = new Shoe();
        this.shoe.shuffle();
 
        this.discard = [];
        
        this.wallet = 995;
        this.initBet = 5;
        this.prevBet = 0;
        this.insurBet = false;

        this.userHands = [new Hand()];
        this.dealerHand = new Hand();

        this.splits = 0;

        this.currentHand = 0;
        this.table = new Table();

        this.startRound();
    }

    startRound() {

        if (this.shoe.decks.length < 60) {
            for(let card of this.discard) {
                this.shoe.decks.append(card);
            }
            this.shoe.shuffle();
        }

        // Clear hands
        this.userHands = [new Hand()];
        this.dealerHand = new Hand();
        this.currentHand = 0;
        this.insurBet = false;

        this.table.updateBankroll(this.wallet);
        this.table.updateShoeCount(this.shoe.decks.length);

        // Display bets
        this.table.showBets();

        if (this.prevBet) {
            this.table.updateBet(this.prevBet);
            this.wallet -= this.prevBet;
            this.table.updateBankroll(this.wallet);
        }
    }

    addbet(amount) {

        if (amount === 'all') {
            amount = this.wallet;
        }

        if (amount <= this.wallet) {

            console.log('Adding bet');

            this.wallet -= amount;
            this.initBet += amount;

            this.table.updateBet(this.initBet, this.wallet);
            this.table.updateBankroll(this.wallet);
        }
        else {
            console.log('Insufficient balance in wallet.');
        }
    }

    removeBet() {
            this.wallet += this.initBet;
            this.initBet = 0;

            this.table.updateBet(0, this.wallet);
            this.table.updateBankroll(this.wallet);
    }

    dealHand() {
        if (this.initBet >= 5) {
            this.table.showTable();
            for(let i = 0; i < 2; i++) {
                this.hit('user');

                this.hit('dealer');
            }

            this.table.showControls();

            let initHand = this.userHands[0];
            initHand.bet = this.initBet;

           /* if (this.dealerHand.cards[1].value === 11 && 
                this.wallet >= this.initBet / 2) {
                // Display option for insurance
                this.table.offerInsurance();
            }
            else {
                console.log('Checking init hand.');
                this.checkInitHand(initHand);
            } */

            this.checkInitHand(initHand);
        }
    }

    checkInitHand(initHand) {
        if (initHand.blackjack) {
            //this.checkScores();
            this.dealerTurn();
        }
        else {

            this.table.showControls();

            if (this.wallet >= this.initBet) {
                this.table.offerDouble();
            }

           /* if (initHand.cards[0].value === initHand.cards[1].value) {
                this.table.offerSplit();
            } */
        }
    }

    insurance() {
       this.insurBet = this.initBet / 2;

       if (this.dealerHand.blackjack) {
           this.wallet += this.insurBet;
           this.table.insuranceWon();
           this.checkScores();
       }
       else {
           this.table.insuranceLost();
           this.checkInitHand();
       }
    }

    doubleDown() {
        let currentBet = this.userHands[this.currentHand].bet;

        if (this.wallet >= currentBet) {
            this.wallet -= currentBet;
            currentBet += currentBet;

            this.table.updateBet(currentBet, this.wallet);
            this.table.updateBankroll(this.wallet);
            this.table.removeDouble();

            this.hit('user');
        }
        else {
            console.log('Insufficient ballance in wallet')
        }
    }

    hit(player) {

        // Pick card from shoe
        const cardIndex = Math.floor(Math.random() * this.shoe.decks.length);
        const card = this.shoe.decks[cardIndex];

        if (player === 'user' && !this.userHands[this.currentHand].done) {

            const hand = this.userHands[this.currentHand];

            const addCheck = hand.addCard(card);

            if (!addCheck) {
                // Display that there was an error
                console.log('Could not add card');
            }
            else {
                // Display new card

                this.discard.push(card);
                this.shoe.decks.splice(cardIndex, 1);
                
                this.table.showCard('player', card, this.shoe.decks.length, false);
                this.table.updateScore('player', this.userHands[this.currentHand].score);
            }

            if (hand.done) {
                this.dealerTurn();
            }
        }
        else if (player === 'dealer' && !this.dealerHand.done) {
            
            const addCheck = this.dealerHand.addCard(card);

            if (!addCheck) {
                // Display that there was a dealer error
            }
            else {
                // Display new card

                this.discard.push(card);
                this.shoe.decks.splice(cardIndex, 1);

                this.table.showCard('dealer', card, this.shoe.decks.length, this.dealerHand.cards.length === 1);
                this.table.updateScore('dealer', this.dealerHand.score - this.dealerHand.cards[0].value);
            }
        }
    }
    
    stand(player) {
        this.dealerTurn();
        /*if (player === 'user') {
            const standCheck = this.userHands[this.currentHand].stand();

            if (standCheck) {
                this.endUserTurn();
            }
        }
        else if (player === 'dealer') {
            const standCheck = this.dealerHand.stand();

            if (standCheck) {
                console.log('Dealer stood');
            }
        }*/
    }

    split() {
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

               this.table.split();

               this.hit('user');
            }
        }
        else {
            console.log('Insufficient ballance in wallet');
        }
    }

    endUserTurn() {
        if (this.currentHand + 1 < this.userHands.length) {
            this.nextHand();
        }
        else {
            this.dealerTurn();
        }
    }

    nextHand() {
        this.table.clearHand();
        
        this.table.hideControls();

        this.currentHand += 1;

        this.table.showCard('player', this.userHands[this.currentHand].cards[0], this.shoe.decks.length, false);

        this.hit('user');

        if (this.userhands[this.currentHand].cards[0].value === 11 && this.userHands[this.currentHand].cards[1].value === 11 && this.splits < 3) {
            this.table.offerSplit();
        }
        else {

        if (this.userhands[this.currentHand].cards[0].value === this.userHands[this.currentHand].cards[1].value && this.splits < 3) {
            this.table.offerSplit();
            this.offerDouble
        }

    }
   }

    dealerTurn() {
        console.log('Dealer turn');
        this.table.removeHoleCard();
        this.table.showHoleCard(this.dealerHand.cards[0], this.dealerHand.score);
        this.prevBet = this.initBet;

        if (this.userHands[0].score > 21) {
            console.log('User bust');
            this.table.dealerWin();
        }
        else {

            while(this.dealerHand.score <= 16) {
                this.hit('dealer');
            } 

            setTimeout(() => {

            if (this.userHands[0].blackjack && this.dealerHand.blackjack) {
                this.table.push();
                this.wallet += this.userHands[0].bet;
            }
            else if (this.dealerHand.blackjack && !this.userHands[0].blackjack) {
                this.table.dealerWin();
            }
            else if (!this.dealerHand.blackjack && this.userHands[0].blackjack) {
                this.table.playerWin();
                this.wallet += this.userHands[0].bet += (this.userHands[0].bet * 1.5);
            }
            else if (this.dealerHand.score > 21 && this.userHands[0].score <= 21) {
                this.table.playerWin();
                this.wallet += this.userHands[0].bet * 2;
            }
            else if (this.userHands[0].score === this.dealerHand.score) {
                this.table.push();
                this.wallet += this.userHands[0].bet;
            }
            else if (this.userHands[0].score > this.dealerHand.score) {
                this.table.playerWin();
                this.wallet += this.userHands[0].bet * 2;
            }
            else if (this.dealerHand.score < this.userHands[0].score) {
                this.table.dealerWin();
            }     
        }, 1500);
        }

        console.log(this.dealerHand);
        setTimeout(() => {

            if (this.wallet < 5 ) {
                this.endGame();
            }
            else {
                this.table.resetTable();
                this.startRound();
            }
        }, 2500);
    }

    checkScores() {
        this.table.hideControls();

        if (this.userHands[0].blackjack) {
            if (this.dealerHand.blackjack) {
                this.table.push();
                this.wallet += this.userHands[0].bet;
            }
            else {
                this.table.playerWin();
                this.wallet += this.userHands[0].bet * 1.5;
            }
        }

        for(let i = 0; i < this.userHands.length; i++) {
            if (this.userHands[i].score > 21) {
                this.table.dealerWin();
            }
            else if (this.dealerHand.score > 21) {
                this.table.playerWin();
            }
            else if (this.userHands[i].score === this.dealerHand.score) {
                this.table.push();
            }
            else if (this.userHands[i].score < this.dealerHand.score) {
                this.table.dealerWin()
            }
            else if (this.userhands[i].score > this.dealerHand.score) {
                this.table.playerWin();
            }
        }
    }

    endGame() {
        this.table.gameOver(this.wallet);
    }
}