// Window onLoad listener
window.addEventListener("load", function (e) {
    // Wait until DOM is loaded
    document.getElementById("pet_test").addEventListener("submit", validate);
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

function animate(totalScore) {
    let petImage = '';
    let scoreMessage = '';
    let idealPetMessage = '';
    if (totalScore >= 0 && totalScore <= 10) {
      petImage = 'img/rat.jpg'; 
      scoreMessage = 'Your Score: ' + totalScore;
      idealPetMessage = 'Ideal Pet: Fish, Reptile, or Rodent';
      $('#score-message').css('color', 'blue'); 
    } else if (totalScore >= 11 && totalScore <= 25) {
      petImage = 'img/cat.jpg'; 
      scoreMessage = 'Your Score: ' + totalScore;
      idealPetMessage = 'Ideal Pet: Cat or Small to Medium Sized Dog';
      $('#score-message').css('color', 'green'); 
    } else if (totalScore >= 26 && totalScore <= 50) {
      petImage = 'img/dog.jpeg'; 
      scoreMessage = 'Your Score: ' + totalScore;
      idealPetMessage = 'Ideal Pet: Large Dog, Parrot, or Rabbit';
      $('#score-message').css('color', 'red'); 
    }
    // Update the DOM elements with the calculated values
    $('#pet-image').attr('src', petImage);
    $('#score-message').text(scoreMessage);
    $('#ideal-pet-message').text(idealPetMessage);
    // Show the animation and register button after 10 seconds
    $('#animation').show();
}

// Validate the form, returning true if valid, false otherwise
function validate(e) {
    e.preventDefault();
    clearErrors();
    var success = true;
    var form = document.getElementById("pet_test");
    var space = parseInt(form.elements["space"].value);
    var exercise = parseInt(form.elements["exercise"].value);
    var grooming = parseInt(form.elements["grooming"].value);
    var noise = parseInt(form.elements["noise"].value);
    var interaction = parseInt(form.elements["interaction"].value);
    
    if (isNaN(space)) {
        addError("Please select a value for space.");
        success = false;
    }
    if (isNaN(exercise)) {
        addError("Please select a value for exercise.");
        success = false;
    }
    if (isNaN(grooming)) {
        addError("Please select a value for grooming.");
        success = false;
    }
    if (isNaN(noise)) {
        addError("Please select a value for noise.");
        success = false;
    }
    if (isNaN(interaction)) {
        addError("Please select a value for interaction.");
        success = false;
    }
    

    if (success) {
        // Calculate the total score
        var total = space + exercise + grooming + noise + interaction;

        alert("Your total score is: " + total);
        animate(total);
    }
    return success;
}
