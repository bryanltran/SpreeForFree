function attemptLogin()
{
    // Retrieve user data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username is a valid username
    if (JSON.parse(localStorage.getItem(username)) === null)
    {
        alert("Invalid username. Please try again.");
        return true;
    }
    // Username is valid, check if password matches the username
    else 
    {
        // Entered successful pair of information
        if (JSON.parse(localStorage.getItem(username)).pw === password)
        {
            sessionStorage.clear();
            sessionStorage.setItem("Username", username);
            sessionStorage.setItem("First Name", JSON.parse(localStorage.getItem(username)).fn);
            sessionStorage.setItem("Last Name", JSON.parse(localStorage.getItem(username)).ln);
            sessionStorage.setItem("Tokens", JSON.parse(localStorage.getItem(username)).tokens);

            // On successful login, add previous cart items to current cart if they exist
            var usernameProd = username.concat(" Products");
            if (JSON.parse(localStorage.getItem(usernameProd)) != null)
            {
                var userCartProd = JSON.parse(localStorage.getItem(usernameProd));
                sessionStorage.setItem("cartProducts", JSON.stringify(userCartProd));
            }
            
            alert("Welcome!");
            window.location = "../index.html";
            return false;
        }
        // Invalid password entered
        else
        {
            alert("Invalid password. Please try again.");
            return true;
        }
    }
}

function createAccount()
{
    // Retrieve user data
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById("lastname").value;
    var username_CA = document.getElementById("username_CA").value;
    var password_CA = document.getElementById("password_CA").value;
    var password_confirm = document.getElementById("passwordConfirm").value;

    // Check if the username is available
    if (JSON.parse(localStorage.getItem(username_CA)) === null)
    {
        // Check if the password matches the re-entered password
        if (password_CA === password_confirm)
        {
            // Save user data to local storage
            var userData = {pw: password_CA, fn: first_name, ln: last_name, tokens: 100};
            localStorage.setItem(username_CA, JSON.stringify(userData));
            alert("Account successfully created!");
            window.location = "../pages/login.html";
            return false;
        }
        // Passwords do not match
        else
        {
            alert("Passwords do not match. Please try again.");
            return false;
        }
    }
    // Username is unavailable
    else
    {
        alert("The username is already taken. Please try again.");
        return false;
    }
}

function checkIsLoggedIn(pageId)
{
    // Check which page is being accessed
    if (pageId === "accountNavBar")
    {
        // User is not logged in
        if (sessionStorage.getItem("Username") == null)
        {
            window.location = "login.html";
            return false;
        }
        // User is logged in
        else
        {
            window.location = "account.html";
            return false;
        }
    }
    // Check which page is being accessed
    if (pageId === "accountNavBarIdx")
    {
        // User is not logged in
        if (sessionStorage.getItem("Username") == null)
        {
            window.location = "pages/login.html";
            return false;
        }
        // User is logged in
        else
        {
            window.location = "pages/account.html";
            return false;
        }
    }
}

function outputAccountInfo()
{
    // Create paragraph elements
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

    // Add user information to the first paragraph
    p1.innerText="Welcome, " + sessionStorage.getItem("First Name") + " " + sessionStorage.getItem("Last Name") + "!";
    
    // Add token information to the second paragraph
    p2.innerText="Current Number of Tokens: " + sessionStorage.getItem("Tokens");

    // Add the elements to the page
    document.getElementById("accountName").appendChild(p1);
    document.getElementById("accountTokens").appendChild(p2);
}

function attemptLogOut()
{
    // Clear current session data
    sessionStorage.clear();

    // Return to the home page
    window.location = "../index.html";
    return false;
}

function deleteAccount()
{
    // Remove locally stored data
    localStorage.removeItem(sessionStorage.getItem("Username"));

    // Clear current session
    sessionStorage.clear();

    // Return to the home page
    window.location = "../index.html";
    return false;
}