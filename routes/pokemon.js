const express = require("express");
const { type } = require("os");
const router = express.Router();

const pokemons = [];
let id = 1;


router
  .route("/")
  .get((req, res) => {
    return res.json(pokemons);
  })
  .post((req, res) => {
    pokemons.push({
      name: req.base.name,
      type: ++type
    });
    return res.json({ message: "Your pokemon" });
  });

router
  .route("/:id")
  
  
  
  .put((req, res) => {
    const pokemons = pokemons.find(val => val.id === Number(req.params.id));
    pokemons.name = req.body.name;
    return res.json({ message: "Pokemon Updated" });
  })
  .delete((req, res) => {
    const pokemons = pokemons.findIndex(val => val.id === Number(req.params.id));
    pokemons.splice(pokeIndex, 1);
    return res.json({ message: "Pokemon Deleted" });
  })

module.exports = router
