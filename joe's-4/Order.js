export class Order {
    constructor() {
        this.menu = {
            hotdog: 4,
            fries: 3.50,
            soda: 1.50,
            sauerkraut: 1
        };
    
        this.order = {
            hotdog: 0,
            fries: 0,
            soda: 0,
            sauerkraut: 0,
            total: 0
        };
    }

    addItem(item) {
        // Add item
        this.order[item]++;

        // Update total
        this.order.total += this.menu[item];
    }

    removeItem(item) {
        // Check that user has item
        if (this.order[item]) {
            // Remove item
            this.order[item]--;

            // Update total
            this.order.total -= this.menu[item];
        }
    }

    submitorder() {
        
    }
}