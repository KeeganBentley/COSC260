// Window onLoad listener
window.addEventListener("load", function (e) {
    // Wait until DOM is loaded
    document.getElementById("myform").addEventListener("submit", validate);
});


// Add an error message to the #errors element
function addError(message) {
    var p = document.createElement("p");
    var text = document.createTextNode(message);
    p.appendChild(text);
    document.getElementById("errors").appendChild(p);
}


// Clear all error messages from the #errors element
function clearErrors(){
    var errors = document.getElementById("errors");
    while (errors.firstChild) {
        errors.removeChild(errors.firstChild);
    }
}


// Validate the form, returning true if valid, false otherwise
function validate(e) {
    e.preventDefault();
    clearErrors();
    var success = true;
    var form = document.getElementById("pet_test");
    
    
    firstname = form.elements["first"].value;
    lastn = form.elements["last"].value;

    if (firstname.length === 0 || lastn.length === 0) {
        addError("Please enter both first and last names.");  
        success = false;
    }
    
    email = form.elements["email"].value;
    if (!/^[a-zA-Z0-9]+@(une|myune)[.]edu[.]au/.test(email) || email.length === 0) {
        addError("Please enter a valid UNE email address.");
        success = false;
    }

    //this is optional 
    phone = form.elements["mobile"].value;
    if (!/^04\d{8}$/.test(phone)) {
        addError("Please enter a valid phone number.");
        success = false;
    }
    
    
   
    if (success) {
        // Calculate the total score
        

        var total = space + exericse + grooming + noise + interaction;

        alert("Your total score is: " + total);
    }
    return success;
}
