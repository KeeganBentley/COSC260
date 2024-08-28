// Window onLoad listener
window.addEventListener("load", function (e) {
    // Wait until DOM is loaded

    //this could just be a style ??
    //$('pet-image').hide();

    document.getElementById("pet_test").addEventListener("submit", validate);
    document.getElementById("registration-form").addEventListener("submit", validate_rego);
    document.getElementById("register-button").addEventListener("click", function() {
        $('#registration-form').show();
    });
    this.setInterval("updateImage()", 2000);
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

// To rotate through the ideal pet elements - can be in separate js file
function updateImage() {
    var $active = $('#animation .active');
  
    var $next = $active.next();
  
    if ($next.length === 0) {
      $next = $('#animation :first-child');
    }
  
    $active.fadeTo(1000, 0.0, function() {
      $active.removeClass('active');
    });
  
    $next.fadeTo(1000, 1.0, function() {
      $next.addClass('active');
    });
  }

// Calculate the total score and display the appropriate pet image and message
//this name isn't great
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
    setTimeout(function() {
      $('#register-button').show();
    }, 10000);

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
        animate(total);
    }
    return success;
}
    
function validate_rego(e) {
    
}