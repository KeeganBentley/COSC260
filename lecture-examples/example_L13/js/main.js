function get_tasks(){
    const element = document.getElementById("task_body");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
       var tableHeadings = "<table><tr><td><b>Task Name</b></td>" +
                                   "<td><b>Task Description</b></td>" +
                                    "<td><b>Date</b></td>" +
                                    "<td><b>Remove?</b></td></tr>"
       element.innerHTML = tableHeadings + this.responseText + "</table>";
       const btns = document.querySelectorAll('button[id=del]')
    
       btns.forEach(btn => {
          btn.addEventListener("click", del_task);
       });
    }
    xhttp.open("GET", "http://turing.une.edu.au:7080", true);
    xhttp.send();
    
    //add listeners
    
}

function del_task(e){
    console.log('clicked del');
    if(e.cancelable){
        e.preventDefault();
    }
    e.stopPropagation();
    const btn = e.target;
    var task = btn.value;
    var params = "*del^" + task;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
       console.log(this.responseText);
       get_tasks();
    }
    xhttp.open("POST", "http://turing.une.edu.au:7080", true);
    xhttp.send(params);
    
}


function post_task(e){
    
    if(e.cancelable){
        e.preventDefault();
    }
    e.stopPropagation();
    console.log('clicked');
    var message = document.getElementById("task").value;
    //check no symbols
    if(!message.match('^[A-Za-z0-9 ]+$')){ 
    	return alert("No symbols please");
    }
    var name_send = document.getElementById("name_in").value;
    var date = new Date();
    var params = name_send + "^<tr><td>" + name_send + "</td><td>" 
                                          + message + "</td><td>" 
                                          + date + "</td>"
                                          + "<td><button id='del' name='del' value='"+ name_send +"'>X </button></td></tr>";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
       console.log(this.responseText);
       get_tasks();
    }
    xhttp.open("POST", "http://turing.une.edu.au:7080", true);
    xhttp.send(params);
    
}

window.addEventListener('load', function() {
    var post_tsk = document.getElementById('post_tsk');
    post_tsk.addEventListener("click",post_task);
    console.log('All assets are loaded')
    setInterval(get_tasks,1000);
    
})
