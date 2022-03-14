// Define ordering system with basic object
const orderSystem = {
    menu: {
        hotdog: 4,
        fries: 3.50,
        soda: 1.50,
        sauerkraut: 1
    },

    order: {
        hotdog: 0,
        fries: 0,
        soda: 0,
        sauerkraut: 0,
        total: 0
    },

    addItem(item) {
        // Add item
        this.order[item]++;

        // Update total
        this.order.total += this.menu[item];
    },

    removeItem(item) {
        // Check that user has item
        if (this.order[item]) {
            // Remove item
            this.order[item]--;

            // Update total
            this.order.total -= this.menu[item];
        }
    },

    startOrder() {
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

        let orderSummaryTotal = document.getElementById('order-summary-total');
        let orderSummaryNumber = document.getElementById('order-number');
        let orderItemsDetails = document.getElementById('order-items-details');

        let submitOrderBtn = document.getElementById('submit-order');

        hotdogIncr.addEventListener('click', () => {
            this.addItem('hotdog');
    
            if (this.order['hotdog'] === 1) {
                hotDogButton.classList.add('open')
                hotDogQuant.classList.remove('inactive');
                hotDogQuant.classList.add('active');
                hotDogQuant.classList.add('opened');
                hotdogDecr.classList.remove('inactive');
                hotdogDecr.classList.add('opened');
                hotdogIncr.classList.add('active');
                hotdogIncr.classList.add('opened');
            }
    
            hotDogQuant.textContent = this.order['hotdog'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
            if (orderPreview.classList.contains('inactive')) {
                orderPreview.classList.remove('inactive');
                orderPreview.classList.add('active');
            }
        });
    
        hotdogDecr.addEventListener('click', () => {
            this.removeItem('hotdog');
    
            if (this.order['hotdog'] < 1) {
                hotDogButton.classList.remove('open');
                hotDogQuant.classList.remove('active');
                hotDogQuant.classList.remove('opened');
                hotDogQuant.classList.add('inactive');
                hotdogDecr.classList.remove('active');
                hotdogDecr.classList.remove('opened');
                hotdogDecr.classList.add('inactive');
                hotdogIncr.classList.remove('opened');
    
                if (orderPreview.classList.contains('active') && this.order['total'] === 0) {
                    orderPreview.classList.remove('active');
                    orderPreview.classList.add('inactive');
                }
            }
    
            hotDogQuant.textContent = this.order['hotdog'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
        });
    
        friesIncr.addEventListener('click', () => {
            this.addItem('fries');
    
            if (this.order['fries'] === 1) {
                friesButton.classList.add('open')
                friesQuant.classList.remove('inactive');
                friesQuant.classList.add('active');
                friesQuant.classList.add('opened');
                friesDecr.classList.remove('inactive');
                friesDecr.classList.add('opened');
                friesIncr.classList.add('active');
                friesIncr.classList.add('opened');
            }
    
            friesQuant.textContent = this.order['fries'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
            if (orderPreview.classList.contains('inactive')) {
                orderPreview.classList.remove('inactive');
                orderPreview.classList.add('active');
            }
        });
    
        friesDecr.addEventListener('click', () => {
            this.removeItem('fries');
    
            if (this.order['fries'] < 1) {
                friesButton.classList.remove('open');
                friesQuant.classList.remove('active');
                friesQuant.classList.remove('opened');
                friesQuant.classList.add('inactive');
                friesDecr.classList.remove('active');
                friesDecr.classList.remove('opened');
                friesDecr.classList.add('inactive');
                friesIncr.classList.remove('opened');
    
                if (orderPreview.classList.contains('active') && this.order['total'] === 0) {
                    orderPreview.classList.remove('active');
                    orderPreview.classList.add('inactive');
                }
            }
    
            friesQuant.textContent = this.order['fries'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
        });
    
        sodaIncr.addEventListener('click', () => {
            this.addItem('soda');
    
            if (this.order['soda'] === 1) {
                sodaButton.classList.add('open')
                sodaQuant.classList.remove('inactive');
                sodaQuant.classList.add('active');
                sodaQuant.classList.add('opened');
                sodaDecr.classList.remove('inactive');
                sodaDecr.classList.add('opened');
                sodaIncr.classList.add('active');
                sodaIncr.classList.add('opened');
            }
    
            sodaQuant.textContent = this.order['soda'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
            if (orderPreview.classList.contains('inactive')) {
                orderPreview.classList.remove('inactive');
                orderPreview.classList.add('active');
            }
        });
    
        sodaDecr.addEventListener('click', () => {
            this.removeItem('soda');
    
            if (this.order['soda'] < 1) {
                sodaButton.classList.remove('open');
                sodaQuant.classList.remove('active');
                sodaQuant.classList.remove('opened');
                sodaQuant.classList.add('inactive');
                sodaDecr.classList.remove('active');
                sodaDecr.classList.remove('opened');
                sodaDecr.classList.add('inactive');
                sodaIncr.classList.remove('opened');
    
                if (orderPreview.classList.contains('active') && this.order['total'] === 0) {
                    orderPreview.classList.remove('active');
                    orderPreview.classList.add('inactive');
                }
            }
    
            sodaQuant.textContent = this.order['soda'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
        });
    
        sauerkrautIncr.addEventListener('click', () => {
            this.addItem('sauerkraut');
    
            if (this.order['sauerkraut'] === 1) {
                sauerkrautButton.classList.add('open')
                sauerkrautQuant.classList.remove('inactive');
                sauerkrautQuant.classList.add('active');
                sauerkrautQuant.classList.add('opened');
                sauerkrautDecr.classList.remove('inactive');
                sauerkrautDecr.classList.add('opened');
                sauerkrautIncr.classList.add('active');
                sauerkrautIncr.classList.add('opened');
            }
    
            sauerkrautQuant.textContent = this.order['sauerkraut'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
            if (orderPreview.classList.contains('inactive')) {
                orderPreview.classList.remove('inactive');
                orderPreview.classList.add('active');
            }
        });
    
        sauerkrautDecr.addEventListener('click', () => {
            this.removeItem('sauerkraut');
    
            if (this.order['sauerkraut'] < 1) {
                sauerkrautButton.classList.remove('open');
                sauerkrautQuant.classList.remove('active');
                sauerkrautQuant.classList.remove('opened');
                sauerkrautQuant.classList.add('inactive');
                sauerkrautDecr.classList.remove('active');
                sauerkrautDecr.classList.remove('opened');
                sauerkrautDecr.classList.add('inactive');
                sauerkrautIncr.classList.remove('opened');
    
                if (orderPreview.classList.contains('active') && this.order['total'] === 0) {
                    orderPreview.classList.remove('active');
                    orderPreview.classList.add('inactive');
                }
            }
    
            sauerkrautQuant.textContent = this.order['sauerkraut'];
            orderPreviewTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
        });

        submitOrderBtn.addEventListener('click', () => {
                orderSummaryTotal.textContent = this.order['total'].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
                orderSummaryNumber.textContent = Math.floor(Math.random() * 2000);
        
                let totals = document.createDocumentFragment();
        
                if (this.order['hotdog']) {
                    let hotdogTotals = document.createElement('h2');
                    hotdogTotals.textContent = `${this.order['hotdog']} X Hotdog`;
                    totals.appendChild(hotdogTotals);
                }
        
                if (this.order['fries']) {
                    let friesTotals = document.createElement('h2');
                    friesTotals.textContent = `${this.order['fries']} X Fries`;
                    totals.appendChild(friesTotals);
                }
        
                if (this.order['soda']) {
                    let sodaTotals = document.createElement('h2');
                    sodaTotals.textContent = `${this.order['soda']} X Soda`;
                    totals.appendChild(sodaTotals);
                }
        
                if (this.order['sauerkraut']) {
                    let sauerkrautTotals = document.createElement('h2');
                    sauerkrautTotals.textContent = `${this.order['sauerkraut']} X Sauerkraut`;
                    totals.appendChild(sauerkrautTotals);
                }
        
                document.getElementById('order-items-details').appendChild(totals);
        
                document.getElementById('item-list').classList.remove('active-page');
                document.getElementById('item-list').classList.add('inactive');
        
                document.getElementById('order-preview-wrapper').classList.remove('active');
                document.getElementById('order-preview-wrapper').classList.add('inactive');
        
                document.getElementById('order-summary').classList.remove('inactive');
                document.getElementById('order-summary').classList.add('active-page');
        });
    }
}


orderSystem.startOrder();