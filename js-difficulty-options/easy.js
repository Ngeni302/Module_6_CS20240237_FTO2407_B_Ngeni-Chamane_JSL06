// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// QUESTION: What should you do first? How can you display menu items by category?

// Function to display menu items by category
function displayMenuItems(menu) {
    // QUESTION: What do you need to get from the HTML to display the menu? Find a way to reference it.
    const menuContainer =document.getElementById('menu');

    // QUESTION: How can you loop through each category and its items in the menu object?
    for (const [category, items] of Object.entries(menu)) { //loops through each category and the items in the menu

        // QUESTION: What HTML element represents a category? Create it here.
        const categoryElement = document.createElement('h2'); //create HTML element

        // QUESTION: How can you set the text content of the category element to the category name?
        categoryElement.textContent=category; //set the text 

        // QUESTION: How can you append the category element to the menu container in the HTML?
        menuContainer.appendChild(categoryElement); //appends <h2> to menu

        // QUESTION: What HTML element represents a list of items? Create it here.
        const list = document.createElement('ul'); //creates an unordered list

        // QUESTION: Loop through the items in the category and create list items for each one.
        items.forEach(item => { ///loops through each item 

            // QUESTION: Create a list item element here.
            const listItem =document.createElement('li'); //create a list for the menu

            // QUESTION: How can you set the text content of the list item element to the item name?
            listItem.textContent = item; //set the text 

            // QUESTION: Attach a click event listener to the list item to add it to the order.
            listItem.addEventListener('click', () => addToOrder(item));

            // QUESTION: How can you append the list item to the list of items for this category?
            list.appendChild(listItem); //appends list item to the list

        });
        // QUESTION: How can you update the order when an item is added? What elements in the HTML do you need to reference?
        menuContainer.appendChild(list); //appends list of items to menu container
    }
}


// Callback function for adding an item to the order
function addToOrder(itemName) {

    // QUESTION: What HTML elements represent the order items list and the order total?
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement =document.getElementById('order-total');

    // QUESTION: Create a list item for the order here.
    const orderItemElement = document.createElement('li'); //create a list item

    // QUESTION: How can you set the text content of the list item to the item name?
    orderItemElement.textContent = itemName; //sets text of order list

    // QUESTION: How can you append the list item to the order items list?
    orderItemsList.appendChild(orderItemElement);

    // QUESTION: Calculate and update the total price. How can you access the current total and item price?
    const prices = {
        "Garlic Bread": 50.00,
        "Bruschetta": 8.00,
        "Margherita Pizza": 125.00,
        "Spaghetti Carbonara": 130.00,
        "Tiramisu": 150.00,
        "Cheesecake": 140.00
    };

    let currentTotal = parseFloat(orderTotalElement.textContent) || 0; //parses the current total price from orderTotalElement defaults to 0 if empty
    let itemPrice = prices[itemName] || 0; //gets the price for the item to 0 if item is not found
    let newTotal = currentTotal + itemPrice; //calculate new total by adding item's price to the current total

    // QUESTION: How can you update the text content of the order total element with the new total?
    orderTotalElement.textContent = newTotal.toFixed(2); //updates total price display with new total to 2 decimal places
}

// QUESTION: What's the first step to initialize the menu system and display the menu?

// Function to initialize the menu system
function initMenuSystem(menu) {
    // QUESTION: What function should you call to display the menu?
    displayMenuItems(menu);
}

// QUESTION: How can you start the menu system? What function should you call here?

// Call the init function to start the menu system
initMenuSystem(menu);
