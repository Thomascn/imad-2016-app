//Counter code

alert ('OK'); 
var button = document.getElementById('counter');

button.onclick = function() {
  alert ('clicked');
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function() {
      
      alert ('OK1');
      
      if (request.readyState === XMLHttpRequest.DONE) {
          
          if(request.status ===200) {
           
             var counter = request.responseText;
              var span = document.getElementById('count');
                span.innerHTML = counter.toString();
  
              
          }
      }
      
      request.open('GET', 'http://thomascn.imad.hasura-app.io/counter', true);
      request.send(null);
      
  };
  

};