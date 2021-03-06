var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));


var articles =
{
    
ArticleOne: 
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
    
},

ArticleTwo:
{
    title: "Article-2",
    heading: "Article Two",
    date: "Sep 29, 2016",
    content: 
                    `<p>
                        
                        This is the Second article content.
                        
                    </p>
                    
                     <p>
                        
                         This is the Second article content. 
                        
                    </p>
                    
                    <p>
                         This is the Second article content.
                    </p>`
                    
},

ArticleThree:
{
       title: "Article-3",
    heading: "Article Three",
    date: "Sep 30, 2016",
    content: 
                    `<p>
                        
                        This is the Third article content.
                        
                    </p>
                    
                     <p>
                        
                         This is the Third article content. 
                        
                    </p>
                    
                    <p>
                         This is the Second article content.
                    </p>`
                    
},

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
                  
        </body>
        
        </div> 
    </html>
    
`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var comments = [];
app.get('/comments', function (req, res) {
  var comment= req.query.comment;
  comments.push (comment);
  res.send (JSON.stringify (comments));
  
    
});




var counter = 0;
app.get ('/counter', function (req, res) {
counter = counter +1;
res.send (counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName', function (req, res) {
var articleName = req.params.articleName;   
res.send(createTemplate (articles [articleName]) );   
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

