$(document).ready(function() {

    $('#myform').submit(function(e) {
      e.preventDefault();
 /*     var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var email = $('#email').val();
      var mobile = $('#mobile').val();*/
      var type=$('#type').val();
      var modeOn = $('#mode_on').prop('checked');
      var modeOff = $('#mode_off').prop('checked');
      $(".errors").remove();

/*      if (first_name.length < 1) {
       $('#first_name').after('<span class="errors">This field is required</span>');
        
      }else{
        var regExName=/^[a-zA-Z]+$/;
        var valid_name=regExName.test(first_name);
        if(!valid_name){
          $('#first_name').after('<span class="errors">Letters only!</span>');
        }
      }*/
      validateInput('#first_name',/^[a-zA-Z]+$/,'Invalid. Enter letters only!');
      
      /*if (last_name.length < 1) {
        $('#last_name').after('<span class="errors">This field is required</span>');
      }else{
        var regExName=/^[a-zA-Z]+$/;
        var valid_name=regExName.test(last_name);
        if(!valid_name){
          $('#last_name').after('<span class="errors">Letters only!</span>');
        }
      }*/
      validateInput('#last_name',/^[a-zA-Z]+$/,'Invalid. Enter letters only!');

      /*if (email.length < 1) {
        $('#email').after('<span class="errors">This field is required</span>');
      } else {
        var regEx = /^[a-z]+(|[1-9][0-9]*)@(une|myune)[.]edu[.]au$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="errors">Enter a valid email</span>');
        }
      }*/
      validateInput('#email',/^[a-z]+(|[1-9][0-9]*)@(une|myune)[.]edu[.]au$/,'Invalid email!');

      /*if (mobile.length!=10) {
        $('#mobile').after('<span class="errors">number must be at least 10digits long</span>');
      }else{
        var regEx=/^[0-9]+$/;
        var validMobile=regEx.test(mobile);
        if(!validMobile){
          $('#mobile').after('<span class="errors">numbers only!</span>');
        }
      }*/

      validateInput('#mobile',/^[0-9]+$/,'Must contain only numbers!','Phone number must be 10 digits long!',1,10);

      if(type=="none"){
        $('#type').after('<span class="errors">select a degree!</span>');
      }
      if ((!modeOn) && (!modeOff)) {
        $('#study').after('<span class="errors">select a study mode!</span>');
      }
    });

  });

  function validateInput(idbox,regex,regex_error_message,length_error_message='This field is required',input_min_length=1, input_req_length=0){
    var id = $(idbox).val();
    var valid_input=regex.test(id); //test if regex is valid
    if(!valid_input && id.length!=0) //if regex is not valid, and input is not empty print regex error mssg
        $(idbox).after('<span class="errors">'+regex_error_message+'!</span>');
    else if(input_req_length!=0 && id.length != input_req_length)  //if the user has specified a fixed length, check that the input is of that length mobile phone
      $(idbox).after('<span class="errors">'+length_error_message+'</span>'); //mobile phone
    else  if (id.length < input_min_length) //if the user hasn't specified a fixed length, check if the input is above the min length (default = 1)
      $(idbox).after('<span class="errors">'+length_error_message+'</span>');
  }