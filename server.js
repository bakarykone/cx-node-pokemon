const express = require("express");
const app = express();
const arg = process.argv
const pokeRoutes = require("./routes/pokemon.js");

app.use('/pokemons', pokeRoutes);

app.get("/", (req,res) => {
  return res.json("Start with /pokemons");
});





app.listen(4242,function() {
console.log('Server is listening on http://localhost:' + arg[2] );
});
