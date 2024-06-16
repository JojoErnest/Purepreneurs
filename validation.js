

function formValidation(){
	    var name = document.forms["contactForm"]["Name"];
        var email = document.forms["contactForm"]["Email"];
        var message = document.forms["contactForm"]["Message"];
        var text = document.getElementById("validationinfo");



        if (name.value == "") {
            text.innerText = "Please enter your name.";
            name.focus();
            return false;
        }
        else if(email.value == ""){
            text.innerText = "Please enter your email.";
            email.focus();
            return false;
        }
        else if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value) == false)
        {
            text.innerText = "Wrong email format!";
            email.focus();
            return false;
        }
        /* check if phone has alphabets */
        else if (message.value == ""){
            text.innerText = "Please enter your message.";
            message.focus();
            return false;
        }

        return true;
}


