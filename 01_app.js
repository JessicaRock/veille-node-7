var express = require('express');
var app = express();

app.use(express.static('public'));

/* on associe le moteur de vue au module «ejs» */
app.set('view engine', 'ejs'); // générateur de template

///////////////////////////////////////////////////////////////route accueil
app.get('/', function (req, res) {

	let resultat = [
		{
			id : 1,
			nom : "Jessica Rock",
			telephone : "514-909-2174"
		},
		{
			id : 2,
			nom : "Test 1",
			telephone : "514-909-2174"
		},
		{
			id : 3,
			nom : "Test 2",
			telephone : "514-909-2174"
		}
	]



   res.render('gabarit_1.ejs', {adresses: resultat});
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})