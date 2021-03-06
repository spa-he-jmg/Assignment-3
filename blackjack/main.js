import { router } from './src/Router.js';
import { Game } from './src/Game.js';

document.getElementById('start-game').addEventListener('click', () => {
    document.getElementById('player-cards').replaceChildren();
    document.getElementById('dealer-cards').replaceChildren();

    router('table');
    const game = new Game();

    document.getElementById('player-chips').addEventListener('click', (event) => {
        if (event.target.classList.contains('std-chip')) {
            const amount = parseFloat(event.target.dataset.amnt);

            game.addbet(amount);
        }
    });

    document.getElementById('bet-btn').addEventListener('click', () => {
        game.dealHand();
    });

    document.getElementById('remove-bet-btn').addEventListener('click', () => {
        game.removeBet();
    });

    document.getElementById('all-in-btn').addEventListener('click', () => {
        game.addbet('all');
    });

    document.getElementById('hit').addEventListener('click', () => {
        game.hit('user');
    });

    document.getElementById('double').addEventListener('click', () => {
        game.doubleDown();
    });

    document.getElementById('split').addEventListener('click', () => {
        game.split();
    });

    document.getElementById('stand').addEventListener('click', () => {
        game.stand();
    });

    document.getElementById('cash-out-btn').addEventListener('click', () => {
        game.endGame();
    });
});