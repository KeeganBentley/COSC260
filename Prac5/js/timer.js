 $.ajax({
    url: "https://turing.une.edu.au/~esadgro2/time/time.php",
    dataType:   "json",
    success: function(data){
        console.log(data);
    },
 })
