const router = require("express").Router();

const recipes = require("./recipes-model");

router.get("/", (req, res) => {
    recipes.find()
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(error => {
            res.status(401).json({ message: "couldn't retrieve recipes" })
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    recipes.findById(id)
        .then(recipe => {
            if (recipe) {
                res.json(recipe)
            } else {
                res.status(404).json({ message: "Could not find the recipe" })
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Failed to get this recipe" })
        })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    recipes.findInstructions(id)
        .then(steps => {
            if (steps.length) {
                res.json(steps)
            } else {
                res.status(404).json({ message: 'Could not find instructions for given recipe' })
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to get instructions'})
        })
})

module.exports = router;
