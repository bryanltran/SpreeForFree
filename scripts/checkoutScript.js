function checkOut() {
    const tokens = parseFloat(sessionStorage.getItem("Tokens"));
    const totalCost = parseFloat(sessionStorage.getItem("totalCost"));

    const result = tokens - totalCost;

    sessionStorage.setItem("Tokens", result);
    updateTotal();

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