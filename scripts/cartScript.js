const cartContainer = document.getElementById('cart_items');

var prodMatrix = [
    ["Spiral Notebook", 12.99, "/img/SpiralNotebook.jpg", "notebookProd"],
    ["Ballpoint Pens", 5.99, "/img/Pens.jpg", "penProd"],
    ["Highlighters", 3.99, "/img/highlighters.jpg", "highlighterProd"],
    ["Backpack", 28.99, "/img/backpack.jpg", "backpackProd"],
    ["No. 2 Pencil", 7.99, "/img/no2pencil.jpg", "pencilProd"],
    ["Calculator", 10.99, "/img/calculator.jpg", "calculatorProd"],
    ["Laptop", 129.99, "/img/laptop.jpg", "laptopProd"],
    ["Post-it Notes", 6.99, "/img/postit.jpg", "notesProd"]
];

function addProduct(id)
{
    var prodFound = false;
    for (i = 0; i < prodMatrix.length; i++)
    {
        // Find which product was added
        if (prodMatrix[i][3] === id)
        {
            // Check if the current product list already contains items
            if (JSON.parse(sessionStorage.getItem("cartProducts")) === null)
            {
                // If no items have been added, create a new array and add the current product
                var cartProd = [];
                var product = {name: prodMatrix[i][0], price: prodMatrix[i][1], img: prodMatrix[i][2], quantity: 1, id: prodMatrix[i][3]};
                cartProd.push(product);
            }
            else
            {
                // If items have already been added, retrieve the product array and add the current product
                var cartProd = JSON.parse(sessionStorage.getItem("cartProducts"));
                for (j = 0; j < cartProd.length; j++)
                {
                    // Change the quantity of the product if the product is already present in the array
                    if (cartProd[j].name === prodMatrix[i][0])
                    {
                        cartProd[j].quantity = cartProd[j].quantity + 1;
                        prodFound = true;
                    }
                }
                // If the product is not present in the array, add it
                if (prodFound === false)
                {
                    var product = {name: prodMatrix[i][0], price: prodMatrix[i][1], img: prodMatrix[i][2], quantity: 1, id: prodMatrix[i][3]};
                    cartProd.push(product);
                }
            }
            // Store the cart products
            sessionStorage.setItem("cartProducts", JSON.stringify(cartProd));
            if (checkSavedCartFeature())
            {
                addSessionItemsToSavedCart(cartProd);
            }   
        }
    }
}

function displayProducts()
{
    // No products to display
    if (JSON.parse(sessionStorage.getItem("cartProducts")) === null || JSON.parse(sessionStorage.getItem("cartProducts")).length === 0)
    {
        // Add empty cart heading
        var cartHeading = createNoProdHTMLHeading();
        cartContainer.innerHTML += cartHeading;
    }
    // Products need to be displayed
    else
    {
        // Add cart heading
        var cartHeading = createProdHTMLHeading();
        cartContainer.innerHTML += cartHeading;

        // For each product added, add the respective html elements to the cart page
        var cartProducts = JSON.parse(sessionStorage.getItem("cartProducts"));
        for (i = 0; i < cartProducts.length; i++)
        {
            var productHTML = createItemHtml(cartProducts[i]);
            cartContainer.innerHTML += productHTML;
        }

        // Display total cost
        var totalHTML = createTotalHTML();
        cartContainer.innerHTML += totalHTML;
    }
}

function createItemHtml(product)
{
    return `
        <div class="cartItem">
            <div>
                <img class="cartImg" src=${product.img} alt="Product">
            </div>
            <div class="cartItemContainer">
                <div class="cartItemName">
                    <b>${product.name}</b>
                </div>
                <div class="cartItemPrice">
                    <b>${product.price}</b>
                </div>
                <div class="cartItemQuantity">
                    <b>${product.quantity}</b>
                </div>
                <div class="cartButton">
                    <button id=${product.id} class="cartRemoveButton" type="submit" onclick="removeProduct(this.id);">Remove Item</button>
                </div>
            </div>
        </div>
    `;
}

function createNoProdHTMLHeading()
{
    return `
        <div class="EmptyCart">
            <h3 class="cartHeading">Your cart is empty!</h3>
        </div>
    `;
}

function createProdHTMLHeading()
{
    return `
        <div class="Cart">
            <h3 class="cartHeading">Your cart</h3>
        </div>
    `;
}

function removeProduct(id)
{
    var cartProd = JSON.parse(sessionStorage.getItem("cartProducts"));
    for (i = 0; i < cartProd.length; i++)
    {
        if (cartProd[i].id === id)
        {
            // If there is only one of this item, remove it from the cart product
            if (cartProd[i].quantity === 1)
            {
                // Remove element from array
                cartProd = cartProd.filter(function (element)
                {
                    if (element.id != id)
                    {
                        return element;
                    }
                });
            }
            // If there are multiple of the same item, remove one from its respective quantity
            else
            {
                cartProd[i].quantity = cartProd[i].quantity - 1;
            }
        }
    }
    // Store updated cart products
    sessionStorage.setItem("cartProducts", JSON.stringify(cartProd));
    if (checkSavedCartFeature())
    {
        addSessionItemsToSavedCart(cartProd);
    } 
    // Reload the page
    window.location.reload();
}

function createTotalHTML()
{
    // Calculate the total cost of all items in the cart
    var cartTotal = 0;
    var cartProd = JSON.parse(sessionStorage.getItem("cartProducts"));
    for (i = 0; i < cartProd.length; i++)
    {
        cartTotal = cartTotal + (parseFloat(cartProd[i].price) * cartProd[i].quantity);
    }

    // Return HTML to output the total cost
    return `
        <div class="totalCost">
            <h3 class="total">Total: ${cartTotal.toFixed(2)}</h3>
        </div>
    `;
}

function checkSavedCartFeature()
{
    // Check if the user is logged in
    if (sessionStorage.getItem("Username") != null)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function addSessionItemsToSavedCart(cartProductsArray)
{
    // Update the user's account cart with changes made during this session
    var username = sessionStorage.getItem("Username");
    var usernameProd = username.concat(" Products");
    localStorage.setItem(usernameProd, JSON.stringify(cartProductsArray));
    if (JSON.parse(localStorage.getItem(usernameProd)) != null)
    {
        return true;
    }
    else
    {
        return false;
    }
}