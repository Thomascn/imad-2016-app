var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ArticleOne = 
{
    title: "Article-1",
    heading: "Article One",
    date: "Sep 28, 2016",
    content: 
                    `<p>
                        
                        This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content. 
                        
                    </p>
                    
                     <p>
                        
                        This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content. 
                        
                    </p>
                    
                    <p>
                        
                        This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content.This is the first article content. 
                        
                    </p>`
                    
    
    
};
function createTemplate (data) 
{ 
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
        var htmlTemplate = `
    <html>
      <head>
          <title>
              
              ${title}
          </title>
          
          <meta name="viewport" content ="width=device-width, initial-scale=1"/>
           <link href="/ui/style.css" rel="stylesheet" />
        
          
      </head>  
        
        <body>
            <div class="container">
            <div>
                <a href ="/">Home</a> 
                 </div>
                
                <hr/>
                
                <h3>
                   ${heading}
                    
                </h3>
                
                <div>
                    
                    ${date}
                </div>
                    <div>
                      
                        ${content}
                        
                    </div>
                </div>    
               
                
                
           
        </body>
        
        
    </html>
    
    `;
    return htmaTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/article-1', function (req, res) {
    
res.send(createTemplate (ArticleOne) );    

});


app.get('/article-2', function (req, res) {
    
res.send ("Article two is requested");    

});


app.get('/article-3', function (req, res) {
    
res.send ("Article three is requested");    

});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
