
var express = require('express');
var app = new express();
var bodyParser = require('body-parser');


app.get("/", function (req, res) {
    var form = '<!doctype html>\
        <html lang="en">\
        <head>\
        <meta charset="UTF-8">\
        <title>Document</title>\
        <link rel="stylesheet" href="style.css"/>\
        </head>\
        <body>\
        <form action="our_post" method="post">\
        <input type="text" name="text" style="font-size:36px;"/>\
        <button style="font-size:36px;">Жми</button>\
        </form>\
        </body>\
        </html>'
    res.send(form)
     

})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/our_post",function(req,res){
   res.send("<div style='font-size: 36px'>Ответ на пост запрос</div>")
 })




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
