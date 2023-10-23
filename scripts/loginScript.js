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
            alert("Welcome!");
            window.location = "../pages/userHome.html";
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
            return true;
        }
    }
    // Username is unavailable
    else
    {
        alert("The username is already taken. Please try again.");
        return true;
    }
}

function checkIsLoggedIn(pageId)
{
    // Check which page is being accessed
    if (pageId === "homeNavBar") 
    {
        // User is not logged in
        if (sessionStorage.getItem("Username") == null)
        {
            window.location = "../index.html";
            return false;
        }
        // User is logged in
        else
        {
            window.location = "userHome.html";
            return false;
        }
    }
    // Check which page is being accessed
    else if (pageId === "accountNavBar")
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
}

function outputAccountInfo()
{
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    p1.innerText="Welcome " + sessionStorage.getItem("First Name") + " " + sessionStorage.getItem("Last Name") + "!";
    p2.innerText="Current Number of Tokens: " + sessionStorage.getItem("Tokens");
    document.getElementById("accountInfo").appendChild(p1);
    document.getElementById("accountInfo").appendChild(p2);
}

function attemptLogOut()
{
    sessionStorage.clear();
    window.location = "../index.html";
    return false;
}

function deleteAccount()
{
    localStorage.removeItem(sessionStorage.getItem("Username"));
    sessionStorage.clear();
    window.location = "../index.html";
    return false;
}