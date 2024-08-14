// jQuery onLoad: this will run once the DOM has been loaded
// This is a jQuery shortcut for document.onload()
$(function(){
    /* This will run once the DOM is loaded */
    initButtonListeners();
});

function initButtonListeners(){
    // Loop over all the buttons and add a click listener
    var $buttons = $(".button");

    $buttons.each(function(){
        $(this).click(function() {
            $(this).next().toggle(500);
            toggleButton($(this));
            console.log(this);
        })
    })
}

function toggleButton(button){
    if(button.hasClass("down")){
        button.css('background-image', 'url("img/button_up.png")');
        button.removeClass("down");
        button.addClass("up");
    }
    else if(button.hasClass("up")){
        button.css('background-image', 'url("img/button_down.png")');
        button.removeClass("up");
        button.addClass("down");
    }
}