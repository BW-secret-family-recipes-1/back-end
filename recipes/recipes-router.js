const router = require("express").Router();

const recipes = require("./recipes-model");

router.get("/", (req, res) => {
    recipes
        .findingredients()
        .then((ingredients) => {
            res.json(ingredients);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get recipes", err });
        });
    recipes
        .findingredients()
        .then((ingredients) => {
            res.json([ingredients.name]);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get recipes", err });
        });
    recipes
        .findinstructions()
        .then((instructions) => {
            res.json([instructions.name]);
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to get recipes", err });
        });
});

module.exports = router;
