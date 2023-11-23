function checkOut() {
    const tokens = parseFloat(sessionStorage.getItem("Tokens"));
    const totalCost = parseFloat(sessionStorage.getItem("totalCost"));
    
    const result = tokens - totalCost;


    if(result < 0) {
        alert("Insufficient Tokens");
        return;
    }
    sessionStorage.setItem("Tokens", result);
    updateTotal();
    clearCart();
    alert("Checkout Sucessful!");
    window.location.reload();

}

function updateTotal() {
    var p2 = document.createElement('p');
    p2.innerText = "Current Number of Tokens: " + sessionStorage.getItem("Tokens");

    // Get the element by ID
    var accountTokens = document.getElementById("accountTokens");

    // Clear existing content
    accountTokens.innerHTML = "";

    // Append the new content
    accountTokens.appendChild(p2);
}

function clearCart() {
    sessionStorage.removeItem("cartProducts");
    var cartTotal = 0;
    sessionStorage.setItem("totalCost", cartTotal, JSON.stringify(cartTotal));
}

