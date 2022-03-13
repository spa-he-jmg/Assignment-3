export function router(path) {

    // Get routes
    const menu = document.getElementById('menu');
    const table = document.getElementById('table-wrapper');
    const gameOver = document.getElementById('game-over');

    // Display route
    switch (path) {
        case 'table':
            menu.classList.remove('active');
            gameOver.classList.remove('active');
            table.classList.add('active');
            break;
        case 'game-over':
            table.classList.remove('active');
            menu.classList.remove('active');
            gameOver.classList.add('active');
            break;
        default:
            table.classList.remove('active');
            gameOver.classList.remove('active');
            menu.classList.add('active');
            break;
    }
}