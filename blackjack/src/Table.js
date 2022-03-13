import { templates } from './Templates.js';
import { router } from './Router.js';

export class Table {
    constructor() {
        this.bankRoll = document.getElementById('bankroll-amount');
        this.shoeCount = document.getElementById('card-count');
        this.dealerPit = document.getElementById('dealer-pit');
        this.dealerScore = document.getElementById('dealer-score');
        this.dealerCards = document.getElementById('dealer-cards');
        this.lhControls = document.getElementById('lh-controls');
        this.centerControls = document.getElementById('center-controls');
        this.rhControls = document.getElementById('rh-controls');
        this.hitBtn = document.getElementById('hit');
        this.currentBet = document.getElementById('current-bet');
        this.doubleBtn = document.getElementById('double');
        this.splitBtn = document.getElementById('split');
        this.standBtn = document.getElementById('stand');
        this.playerPit = document.getElementById('player-pit');
        this.playerCards = document.getElementById('player-cards');
        this.playerScore = document.getElementById('player-score');
        this.betControls = document.getElementById('bet-controls');
        this.betBtn = document.getElementById('bet-btn');
        this.removeBetBtn = document.getElementById('remove-bet-btn');
        this.allInBtn = document.getElementById('all-in-btn');
        this.cashOutBtn = document.getElementById('cash-out-btn');
        this.chips = document.getElementById('player-chips');
        this.insuranceModal = document.getElementById('insurance-modal');
        this.insuranceYes = document.getElementById('insurance-yes');
        this.insuranceNo = document.getElementById('insurance-no');
        this.resultModal = document.getElementById('result-modal');
        this.resultMessage = document.getElementById('result-message');
        this.splitCards = document.getElementById('split-cards');
        this.takeHome = document.getElementById('take-home');
    }

    updateBankroll(balance) {
        this.bankRoll.textContent = balance.toLocaleString(); 
    }

    updateShoeCount(count) {
        this.shoeCount.textContent = count;
    }

    showBets() {
        this.dealerPit.classList.remove('active');
        this.dealerPit.classList.add('inactive');
        this.lhControls.classList.add('hidden');
        this.doubleBtn.classList.add('hidden');
        this.rhControls.classList.add('hidden');
        this.splitBtn.classList.add('inactive');
        this.playerPit.classList.remove('active');
        this.playerPit.classList.add('inactive');
        this.betControls.classList.remove('inactive');
        this.betControls.classList.add('active');
        this.resultModal.classList.remove('active');
        this.resultModal.classList.add('inactive');
    }

    updateBet(bet, wallet) {
        if (!bet) {
            this.centerControls.classList.add('hidden');
            this.betBtn.classList.add('hidden');
            this.removeBetBtn.classList.add('hidden');
        }
        
        if (bet && this.centerControls.classList.contains('hidden')) {
            this.centerControls.classList.remove('hidden');
        }
        
        if (bet < 5) {
            this.betBtn.classList.add('hidden');
        }

        if (bet >= 5) {
            this.betBtn.classList.remove('hidden');
            this.removeBetBtn.classList.remove('hidden');
        }



        this.currentBet.textContent = bet.toLocaleString();
     
        for (let child of this.chips.children) {
            if (parseFloat(child.dataset.amnt) > wallet) {
                document.getElementById(child.id).classList.add('hidden');
            }
            else {
                document.getElementById(child.id).classList.remove('hidden');
            }
        }
    }

    showTable() {
        this.dealerPit.classList.remove('inactive');
        this.dealerPit.classList.add('active');
        this.playerPit.classList.remove('inactive');
        this.playerPit.classList.add('active');
        this.betControls.classList.add('inactive');
        this.betControls.classList.remove('active');
    }

    showControls() {
        this.lhControls.classList.remove('hidden');
        this.rhControls.classList.remove('hidden');
    }

    hideControls() {
        this.lhControls.classList.add('hidden');
        this.doubleBtn.classList.add('hidden');
        this.rhControls.classList.add('hidden');
    }

    showCard(user, card, shoeCount, holeCard) {
        const nextCard = document.createElement('div');

        nextCard.classList.add('card');

        nextCard.innerHTML = holeCard ? templates('Hole') : templates(card.suit, card.type);

        this[`${user}Cards`].appendChild(nextCard);

        this.updateShoeCount(shoeCount);
    }

    updateScore(user, score) {
        this[`${user}Score`].textContent = score;
    }

    offerInsurance() {
        this.insuranceModal.classList.remove('inactive');
        this.insuranceModal.classList.add('active');
    }

    offerDouble() {
        this.doubleBtn.classList.remove('hidden');
    }
    
    offerSplit() {
        this.splitBtn.classList.remove('inactive');
    }

    removeDouble() {
        this.doubleBtn.classList.add('hidden');
    }

    split() {
        this.splitCards.classList.remove('hidden');
        this.playerCards.removeChild(this.playerCards.lastChild);
        this.splitBtn.classList.add('inactive');
    }

    resetTable() {
        this.playerCards.innerHTML = '';
        this.dealerCards.innerHTML = '';

        this.updateScore('player', 0);
        this.updateScore('dealer', 0);
    }

    removeHoleCard() {
        this.dealerCards.removeChild(this.dealerCards.firstElementChild);
    }

    showHoleCard(card, score) {

        let firstCard = document.createElement('div');
        firstCard.classList.add('card');

        firstCard.innerHTML = templates(card.suit, card.type);
        this.dealerCards.prepend(firstCard);

        this.updateScore('dealer', score);
    }

    dealerWin() {
        this.resultMessage.textContent = 'House wins';
        this.resultModal.classList.remove('inactive');
        this.resultModal.classList.add('active');
    }

    playerWin() {
        this.resultMessage.textContent = 'Player wins';
        this.resultModal.classList.remove('inactive');
        this.resultModal.classList.add('active');
    }

    push() {
        this.resultMessage.textContent = 'Push';
        this.resultModal.classList.remove('inactive');
        this.resultModal.classList.add('active');
    }

    gameOver(amount) {
        let gain = amount - 1000;
        this.takeHome.textContent = gain.toLocaleString();
        router('game-over');
    }
}