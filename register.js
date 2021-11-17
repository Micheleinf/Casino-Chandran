var username;
var email;
var password1;
var password2;
var passwordFinal;
var passwordsAreTheSame = false;



$(document).ready(function() {
    $("#register").click(function() {

        src = "/JS/register.js";
        src = "https://www.gstatic.com/firebasejs/5.7.8/firebase.js";


        console.log("button clicked");

        var username;
        var email;
        var password1;
        var password2;
        var passwordFinal;

        console.log("variables created");

        usernameV = $("#usernameInput").val();
        emailV = $("#emailInput").val();
        password1V = $("#passwordInput").val();
        password2V = $("#confirmPasswordInput").val();

        console.log("data read from input fields");

        if ((emailV.indexOf('@') == -1)) {
            alert("Your E-Mail Adress is invalid");
        } else if (emailV.indexOf('.') == -1) {
            alert("Your E-Mail Adress is invalid");
        } else {

            console.log("trying to send data to firebase");

            firebase.database().ref('User').set({
                username: username,
                mail: email,
                password: password1
            });

            console.log("data sent");
        }
    });
});


$(document).ready(function() {
    $("#confirmPasswordInput, #passwordInput").keyup(function() {

        var pwd1 = $("#passwordInput").val();
        var pwd2 = $("#confirmPasswordInput").val();

        if (pwd1 === "" && pwd2 === "") {
            $("#passwordInput, #confirmPasswordInput").css("background-color", "white");
        } else {

            if (pwd1 == pwd2) {
                $("#passwordInput, #confirmPasswordInput").css("background-color", "#32a852");
                passwordsAreTheSame = true;

            } else {
                $("#passwordInput, #confirmPasswordInput").css("background-color", "#b82e1c");
            }
        }
    });
});


$(document).ready(function() {
    function makeNewUser(username, password, email) {

    }
});