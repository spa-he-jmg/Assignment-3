// Initialize menu with associative array
const menu = [];

menu['hotdog'] = 4;
menu['fries'] = 3.50;
menu['soda'] = 1.50;
menu['sauerkraut'] = 1;

function startOrder() {

    // Initialize order with associative array
    let order = [];

    order['fries'] = 0;
    order['hotdog'] = 0;
    order['soda'] = 0;
    order['sauerkraut'] = 0;
    order['total'] = 0;

    // Get pages
    let itemList = document.getElementById('item-list')
    let orderSummary = document.getElementById('order-summary');
    let orderPreview = document.getElementById('order-preview-wrapper');
    let orderPreviewTotal = document.getElementById('order-preview-total');

    // Hide order info
    orderSummary.classList.remove('active-page');
    orderSummary.classList.add('inactive');

    orderPreview.classList.remove('active');
    orderPreview.classList.add('inactive');

    let hotDogButton = document.getElementById('hotdog-quant-btn');
    let hotdogIncr = document.getElementById('hotdog-incr');
    let hotDogQuant = document.getElementById('hotdog-quant');
    let hotdogDecr = document.getElementById('hotdog-decr');

    let friesButton = document.getElementById('fries-quant-btn');
    let friesIncr = document.getElementById('fries-incr');
    let friesQuant = document.getElementById('fries-quant');
    let friesDecr = document.getElementById('fries-decr');

    let sodaButton = document.getElementById('soda-quant-btn');
    let sodaIncr = document.getElementById('soda-incr');
    let sodaQuant = document.getElementById('soda-quant');
    let sodaDecr = document.getElementById('soda-decr');

    let sauerkrautButton = document.getElementById('sauerkraut-quant-btn');
    let sauerkrautIncr = document.getElementById('sauerkraut-incr');
    let sauerkrautQuant = document.getElementById('sauerkraut-quant');
    let sauerkrautDecr = document.getElementById('sauerkraut-decr');

    let submitOrderBtn = document.getElementById('submit-order');
    let orderSummaryTotal = document.getElementById('order-summary-total');
    let orderSummaryNumber = document.getElementById('order-number');
    let orderItemsDetails = document.getElementById('order-items-details');


    let addItem = (item) => {
        // Add item
        order[item]++;

        // Update total
        order['total'] += menu[item]
    }

    let removeItem = (item) => {
        // Check that user has item
        if (order[item]) {
            // Remove item
            order[item]--;

            // Update total
            order['total'] -= menu[item];
        }
    }

    hotdogIncr.addEventListener('click', () => {
        addItem('hotdog');

        if (order['hotdog'] === 1) {
            hotDogButton.classList.add('open')
            hotDogQuant.classList.remove('inactive');
            hotDogQuant.classList.add('active');
            hotDogQuant.classList.add('opened');
            hotdogDecr.classList.remove('inactive');
            hotdogDecr.classList.add('opened');
            hotdogIncr.classList.add('active');
            hotdogIncr.classList.add('opened');
        }

        hotDogQuant.textContent = order['hotdog'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

        if (orderPreview.classList.contains('inactive')) {
            orderPreview.classList.remove('inactive');
            orderPreview.classList.add('active');
        }
    });

    hotdogDecr.addEventListener('click', () => {
        removeItem('hotdog');

        if (order['hotdog'] < 1) {
            hotDogButton.classList.remove('open');
            hotDogQuant.classList.remove('active');
            hotDogQuant.classList.remove('opened');
            hotDogQuant.classList.add('inactive');
            hotdogDecr.classList.remove('active');
            hotdogDecr.classList.remove('opened');
            hotdogDecr.classList.add('inactive');
            hotdogIncr.classList.remove('opened');

            if (orderPreview.classList.contains('active') && order['total'] === 0) {
                orderPreview.classList.remove('active');
                orderPreview.classList.add('inactive');
            }
        }

        hotDogQuant.textContent = order['hotdog'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    });

    friesIncr.addEventListener('click', () => {
        addItem('fries');

        if (order['fries'] === 1) {
            friesButton.classList.add('open')
            friesQuant.classList.remove('inactive');
            friesQuant.classList.add('active');
            friesQuant.classList.add('opened');
            friesDecr.classList.remove('inactive');
            friesDecr.classList.add('opened');
            friesIncr.classList.add('active');
            friesIncr.classList.add('opened');
        }

        friesQuant.textContent = order['fries'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

        if (orderPreview.classList.contains('inactive')) {
            orderPreview.classList.remove('inactive');
            orderPreview.classList.add('active');
        }
    });

    friesDecr.addEventListener('click', () => {
        removeItem('fries');

        if (order['fries'] < 1) {
            friesButton.classList.remove('open');
            friesQuant.classList.remove('active');
            friesQuant.classList.remove('opened');
            friesQuant.classList.add('inactive');
            friesDecr.classList.remove('active');
            friesDecr.classList.remove('opened');
            friesDecr.classList.add('inactive');
            friesIncr.classList.remove('opened');

            if (orderPreview.classList.contains('active') && order['total'] === 0) {
                orderPreview.classList.remove('active');
                orderPreview.classList.add('inactive');
            }
        }

        friesQuant.textContent = order['fries'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    });

    sodaIncr.addEventListener('click', () => {
        addItem('soda');

        if (order['soda'] === 1) {
            sodaButton.classList.add('open')
            sodaQuant.classList.remove('inactive');
            sodaQuant.classList.add('active');
            sodaQuant.classList.add('opened');
            sodaDecr.classList.remove('inactive');
            sodaDecr.classList.add('opened');
            sodaIncr.classList.add('active');
            sodaIncr.classList.add('opened');
        }

        sodaQuant.textContent = order['soda'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

        if (orderPreview.classList.contains('inactive')) {
            orderPreview.classList.remove('inactive');
            orderPreview.classList.add('active');
        }
    });

    sodaDecr.addEventListener('click', () => {
        removeItem('soda');

        if (order['soda'] < 1) {
            sodaButton.classList.remove('open');
            sodaQuant.classList.remove('active');
            sodaQuant.classList.remove('opened');
            sodaQuant.classList.add('inactive');
            sodaDecr.classList.remove('active');
            sodaDecr.classList.remove('opened');
            sodaDecr.classList.add('inactive');
            sodaIncr.classList.remove('opened');

            if (orderPreview.classList.contains('active') && order['total'] === 0) {
                orderPreview.classList.remove('active');
                orderPreview.classList.add('inactive');
            }
        }

        sodaQuant.textContent = order['soda'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    });

    sauerkrautIncr.addEventListener('click', () => {
        addItem('sauerkraut');

        if (order['sauerkraut'] === 1) {
            sauerkrautButton.classList.add('open')
            sauerkrautQuant.classList.remove('inactive');
            sauerkrautQuant.classList.add('active');
            sauerkrautQuant.classList.add('opened');
            sauerkrautDecr.classList.remove('inactive');
            sauerkrautDecr.classList.add('opened');
            sauerkrautIncr.classList.add('active');
            sauerkrautIncr.classList.add('opened');
        }

        sauerkrautQuant.textContent = order['sauerkraut'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

        if (orderPreview.classList.contains('inactive')) {
            orderPreview.classList.remove('inactive');
            orderPreview.classList.add('active');
        }
    });

    sauerkrautDecr.addEventListener('click', () => {
        removeItem('sauerkraut');

        if (order['sauerkraut'] < 1) {
            sauerkrautButton.classList.remove('open');
            sauerkrautQuant.classList.remove('active');
            sauerkrautQuant.classList.remove('opened');
            sauerkrautQuant.classList.add('inactive');
            sauerkrautDecr.classList.remove('active');
            sauerkrautDecr.classList.remove('opened');
            sauerkrautDecr.classList.add('inactive');
            sauerkrautIncr.classList.remove('opened');

            if (orderPreview.classList.contains('active') && order['total'] === 0) {
                orderPreview.classList.remove('active');
                orderPreview.classList.add('inactive');
            }
        }

        sauerkrautQuant.textContent = order['sauerkraut'];
        orderPreviewTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    });

    let submitOrder = () => {
        orderSummaryTotal.textContent = order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        orderSummaryNumber.textContent = Math.floor(Math.random() * 2000);

        let totals = document.createDocumentFragment();

        if (order['hotdog']) {
            let hotdogTotals = document.createElement('h2');
            hotdogTotals.textContent = `${order['hotdog']} X Hotdog`;
            totals.appendChild(hotdogTotals);
        }

        if (order['fries']) {
            let friesTotals = document.createElement('h2');
            friesTotals.textContent = `${order['fries']} X Fries`;
            totals.appendChild(friesTotals);
        }

        if (order['soda']) {
            let sodaTotals = document.createElement('h2');
            sodaTotals.textContent = `${order['soda']} X Soda`;
            totals.appendChild(sodaTotals);
        }

        if (order['sauerkraut']) {
            let sauerkrautTotals = document.createElement('h2');
            sauerkrautTotals.textContent = `${order['sauerkraut']} X Sauerkraut`;
            totals.appendChild(sauerkrautTotals);
        }

        orderItemsDetails.appendChild(totals);

        itemList.classList.remove('active-page');
        itemList.classList.add('inactive');

        orderPreview.classList.remove('active');
        orderPreview.classList.add('inactive');

        orderSummary.classList.remove('inactive');
        orderSummary.classList.add('active-page');
    }

    submitOrderBtn.addEventListener('click', submitOrder);
}

startOrder();

