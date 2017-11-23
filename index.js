// Setup basic express server
var debug = true;

// DEBUT SERVEUR EXPRESS
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// fin serveur express

//DEBUT SpogLevel BDD
var SpogTools = require('./spogtools');
var SpogLevel = require('./spoglevel');
var st = new SpogTools(debug);
var sl = new SpogLevel("smagBoose0"); // name, mode (n3 or null), demo or not
st.log(sl);
var config = {};
//FIN SPOG LEVEL BDD
config = {};
config.dbName = sl.getDb();
config.graphListe = sl.getGraphListe();
config.room = sl.getDefaultGraphName();



//Socket.IO
io.on('connect', function(socket){
  console.log("connecte");
  connexion(socket);
});
io.on('event', function(data){
  console.log(data);
});
io.on('disconnect', function(){
  console.log("deconnecte");
});

st.log("ready");


// EVENEMENTS
function connexion(socket){

  socket.emit('config', config);
socket.join(config.room);

socket.emit('updateroom', {rooms:config.graphListe, room:config.room});
  st.log(socket);
}
