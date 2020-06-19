const express = require("express");

const recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
    recipes.find().then((recipes) => {
        res.status(200);
    });
});
