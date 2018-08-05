const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')


//Set up the express app
const app = express();
// Log requests to the console
app.use(logger('dev'));
//Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false }));
//Setup a default catch-all route that sends back a welcome message in JSON format

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.options('*', cors());

var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};

app.use(allowCrossDomain);

var whitelist = ['http://165.227.53.39/'];

var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1; callback(null, originIsWhitelisted);
    }
};

require('./server/routes')(app);
app.get('*',cors(corsOptions), (req, res) => res.status(200).send(
    {message: 'Welcome to the beginning of nothingness',}
));

module.exports = app;

