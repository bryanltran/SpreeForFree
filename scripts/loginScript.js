function attemptLogin()
{
    // Retrieve user data
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
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

    }
    // Username is unavailable
    else
    {
        alert("The username is already taken. Please try again.");
    }
}