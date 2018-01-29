var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'frontEnd/dist')));
app.use(session({
    secret: '4234d8bc7894930204d4542aad7435e0',
    resave: true,
    saveUninitialized: true
}));

require('./server/config/mongoose.js');

var routesSetter = require('./server/config/routes.js');
routesSetter(app);

app.listen(8000, function(){
    console.log("Listening on port 8000");
})