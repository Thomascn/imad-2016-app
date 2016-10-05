//Counter code

alert ('OK'); 
var button = document.getElementById('counter');

button.onclick = function() {
  alert ('clicked');
  var request = new XMLHttpRequest ();
    alert (request);
  request.onreadystatechange = function () {
      
      alert ('OK1');
      
      if (request.readyState === XMLHttpRequest.DONE) {
          
          if(request.status ===200) {
           
             var counter = request.responseText;
              var span = document.getElementById('count');
                span.innerHTML = counter.toString();
  
              
          }
      }
     alert ("open");
      request.open('GET', 'http://thomascn.imad.hasura-app.io/counter', true);
     alert ("sending");
      request.send(null);
        alert ("sent");
  };
  

};