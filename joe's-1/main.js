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

    let submitOrder = () => {
        
    }
}