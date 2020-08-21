const express = require("express");
const http = require("http");
const path = require("path");
const webSocket = require("ws");
const PORT = 6900;
// const server = http.createServer(express);
//var indexRouter = require('./routes/index');
const server = express();
// const wss = new webSocket.Server({server});

//Loads the handlebars module
const handlebars = require('express-handlebars');

const cards = require("./data/cards.json");

//Set Static path
//server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static('public'));
// server.use('static', express.static(path.join(__dirname, 'public')))
//Sets our app to use the handlebars engine
server.set('views', path.join(__dirname, 'views'));
// server.set('view engine', 'handlebars');
server.set('view engine', 'hbs');

//Sets handlebars configurations (we will go through them later on)
server.engine('hbs', handlebars({
	layoutsDir: __dirname + '/views/layouts',
	partialsDir: __dirname + '/views/partials',
	//new configuration parameter
	extname: 'hbs', 
	defaultLayout: 'index'
}));

//server.use('/test', indexRouter);

server.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('index', { 
  	layout:'index',
  	title: 'Final Project Home',
  	pageTitle: 'COP Project - Home Page',
  	body: 'This is my first post!'
	});
});

server.get('/contact', (req, res) => {
	res.render('contactView', { 
  	layout:'index',
  	title: 'Contact Page',
  	pageTitle: 'COP Project - Contact Page',
  	body: '<holder>'
	});
});

server.get('/profile', (req, res) => {
	res.render('profileView', { 
  	layout:'index',
  	title: 'Profile Page',
  	pageTitle: 'COP Project - Profile Page',
  	body: '<holder>'
	});
});

//Sets a basic route for games
server.get('/games', (req, res) => {
	res.render('gamesView', { 
  	layout:'games',
  	title: 'Game Page',
  	pageTitle: 'COP Project - Game Page',
  	body: '<holder>'
	});
});

server.get('/merchant', (req, res) => {
	res.render('merchantView', { 
  	layout:'index',
  	title: 'Merchant Page',
  	pageTitle: 'COP Project - Merchant Page',
  	body: '<holder>'
	});
});

server.get('/tool', (req, res) => {
	res.render('toolView', { 
  	layout:'index',
  	title: 'Tool Page',
  	pageTitle: 'COP Project - Tool Page',
  	body: '<holder>'
	});
});

server.get('/signup', (req, res) => {
	res.render('signupView', { 
  	layout:'index',
  	title: 'Sign-Up Page',
  	pageTitle: 'COP Project - Sign-Up Page',
  	body: '<holder>'
	});
});

//Sets a basic route for redirect
/*server.get('/games/cashflow', (req, res) => {
	console.log('page reached');
	console.log(cards);
	res.redirect('/cashFlow.html');
});*/
/*//Sets a basic route for redirect
server.get('/', (req, res) \=> {
	res.redirect('/index.html');
});*/


// console.log(cards);
// console.dir(cards);
// console.table(cards);
// console.log(JSON.stringify(cards));

/*wss.on('connection', function(ws){
	ws.on('message', function incoming(data){
		wss.clients.forEach(function(client){
			if(client != ws && client.readyState === webSocket.OPEN){
				client.send(data);
			}
		})
	})
})*/

server.listen(PORT, function(){
	console.log(`Server is listening on port: ${PORT}`);
})