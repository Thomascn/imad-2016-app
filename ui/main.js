//Counter code

var button = document.getElementById('counter');

button.onclick = function() {
  var request = new XMLHttpRequest ();
   request.onreadystatechange = function () {
      

      if (request.readyState === XMLHttpRequest.DONE) {
          
          if(request.status ===200) {
           
             var counter = request.responseText;
              var span = document.getElementById('count');
                span.innerHTML = counter.toString();
  
              
          }
      }
      
  };
      request.open('GET', 'http://thomascn.imad.hasura-app.io/counter', true);
 
      request.send(null);
     
};

//comment code
var commentinput = document.getElementById('comment');
var comment = commentinput.value;
var submit = document.getElementById('Submit');
submit.onclick = function(){
    
    var comments = ['test comment', 'test comment1'];
    var list = '';
    for (var i=0; i<comments.length; i++) {
        list += '<li>' + comments[i] + '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ui.innerHTML = list;
    
    
}
