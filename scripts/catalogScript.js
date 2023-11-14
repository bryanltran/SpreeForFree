
document.addEventListener('DOMContentLoaded', function() {
    class CardContent {
        constructor(img, name, price) {
            this.img = img;
            this.name = name;
            this.price = price;
        }
    }
    
    const productList = [
        new CardContent("../img/SpiralNotebook.jpg", "Spiral Notebook", 12.99),
        new CardContent("../img/Pens.jpg", "Ballpoint Pens", 5.99),
        new CardContent("../img/highlighters.jpg", "Highlighters", 3.99),
        new CardContent("../img/backpack.jpg", "Backpack", 28.99),
        new CardContent("../img/no2pencil.jpg", "No. 2 Pencil", 7.99),
        new CardContent("../img/calculator.jpg", "Calculator", 10.99),
        new CardContent("../img/laptop.jpg", "Laptop", 129.99),
        new CardContent("../img/postit.jpg", "Post-it Notes", 6.99)
    ];
    
    
    const cardContainer = document.getElementById('catalog__container');
    const featuredContainer = document.getElementById('featured__container');

    
    function createCardHTML(item) {
        return `
            <div class="card">
                <div>
                    <img class="catalog_image" src=${item.img} alt="Product">
                </div>
                <div class="container">
                    <div class="productName">
                        <b>${item.name}</b>
                    </div>
                    <div class="productPrice">
                        <b>${item.price}</b>
                    </div>
                    <div class="addToCart">
                        <button class="buttonAddToCart" type="button">
                            <img class="addToCartIcon" src="../img/shoppingcart.png">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    function appendCardToContainer(container, cardHTML) {
        if (container) {
            container.innerHTML += cardHTML;
        } else {
            console.error('Container is null or undefined.');
        }
    }
    
    
    function renderProductList(container, productList) {
        productList.forEach(item => {
            const cardHTML = createCardHTML(item);
            appendCardToContainer(container, cardHTML);
        });
    }
    
    
    function getRandomSubset(arr, size) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, size);
    }
    
    
    // Get a random subset of 3 items from productList
    const featuredProductList = getRandomSubset([...productList], 3);
    
    // Render the product list in the card container
    renderProductList(cardContainer, productList);

    // Render the featured product list in the featured container
    renderProductList(featuredContainer, featuredProductList);

    console.log(featuredContainer);

});
