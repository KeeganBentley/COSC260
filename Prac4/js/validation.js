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
    var form = document.getElementById("myform");
    
    firstname = form.elements["first"].value;
    lastn = form.elements["last"].value;

    if (firstname.length === 0 || lastn.length === 0) {
        addError("Please enter both first and last names.");  
        success = false;
    }
    
    email = form.elements["email"].value;
    if (/^[a-zA-Z0-9]+@(une|myune)[.]edu[.]au/.test(email) || email.length === 0) {
        addError("Please enter a valid UNE email address.");
        success = false;
    }

    phone = form.elements["mobile"].value;
    if (/^04\d{8}$/.test(phone) || phone.length === 0) {
        addError("Please enter a valid phone number.");
        success = false;
    }
    
    degree = form.elements["type"].value;
    if (degree === "none") {
        addError("Please select a degree type.");
        success = false;
    }

    var onCampus = document.getElementById("mode_on");
    var offCampus = document.getElementById("mode_off");
    if (!onCampus.checked && !offCampus.checked) {
        addError("Please select a study mode.");
        success = false;
    }

    if (success) {
        alert("The information you provided is valid.");
    }
    return success;
}
