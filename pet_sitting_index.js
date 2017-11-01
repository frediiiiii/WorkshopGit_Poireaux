var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello in the pet sitting World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// On démarre babel, un outil qui permet d'utiliser les dernières évolutions du
// langage Javascript (ici l'évolution ES2015) en restant compatible avec tous
// les serveurs et navigateurs

/*if (process.env.NODE_ENV === "development") {
  require("babel-register");
  require("./src/server");
} else {
  require("./lib/server");
}