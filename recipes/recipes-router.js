const router = require("express").Router();

const recipes = require("./recipes-model");

router.get("/", (req, res) => {
    const { id } = req.params;

    recipes
        .findUserById(id)
            .then(
                recipes.find()
                .then((recipe) => {
                    res.status(200).json(recipe);
                })
                .catch((error) => {
                    res.status(401).json({ message: "couldn't retrieve recipes" });
                })
            )
            .catch(error => {
                res.status(500).json({ message: "Couldn't find user" })
            })
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    recipes
        .findById(id)
        .then((recipe) => {
            if (recipe) {
                res.json(recipe);
            } else {
                res.status(404).json({ message: "Could not find the recipe" });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: "Failed to get this recipe" });
        });
});

router.get("/:id/ingredients", (req, res) => {
    const { id } = req.params;

    recipes
        .findIngredients(id)
        .then((ingredients) => {
            if (ingredients.length) {
                res.json(ingredients);
            } else {
                res.status(404).json({
                    message: "Could not find ingredients for given recipe",
                });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: "Failed to get ingredients" });
        });
});

router.get("/:id/instructions", (req, res) => {
    const { id } = req.params;

    recipes
        .findInstructions(id)
        .then((steps) => {
            if (steps.length) {
                res.json(steps);
            } else {
                res.status(404).json({
                    message: "Could not find instructions for given recipe",
                });
            }
        })
        .catch((error) => {
            res.status(500).json({ message: "Failed to get instructions" });
        });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    recipes
        .remove(id)
        .then((recipe) => {
            if (recipe) {
                res.json({ removed: recipe });
            } else {
                res.status(404).json({
                    message: "Could not find recipe with given id",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to delete recipe" });
        });
});

router.delete("/:id", (req, res) => {
    recipes
        .removeIngredients(id)
        .then((recipe) => {
            if (recipe) {
                res.json({ removed: recipe });
            } else {
                res.status(404).json({
                    message: "Could not find ingredients with given id",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to delete ingredients" });
        });
});
router.delete("/:id", (req, res) => {
    recipes
        .removeInstructions(id)
        .then((recipe) => {
            if (recipe) {
                res.json({ removed: recipe });
            } else {
                res.status(404).json({
                    message: "Could not find instructions with given id",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to delete instructions" });
        });
});

router.post("/", (req, res) => {
    const recipeData = req.body;

    recipes
        .add(recipeData)
        .then((recipe) => {
            res.status(201).json(recipe);
        })
        .catch((error) => {
            res.status(500).json({ message: "Failed to create a new recipe" });
        });
});

router.post("/:id/ingredients", (req, res) => {
    const ingredientsData = req.body;
    const { id } = req.params;

    recipes
        .findById(id)
        .then((recipe) => {
            if (recipe) {
                recipes
                    .addInstructions(ingredientsData, id)
                    .then((ingredients) => {
                        res.status(201).json(ingredients);
                    });
            } else {
                res.status(404).json({ message: "Could not find ingredients" });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to create a new ingredients",
            });
        });
});

router.post("/:id/instructions", (req, res) => {
    const instructionsData = req.body;
    const { id } = req.params;

    recipes
        .findById(id)
        .then((recipe) => {
            if (recipe) {
                recipes
                    .addInstructions(instructionsData, id)
                    .then((instruction) => {
                        res.status(201).json(instruction);
                    });
            } else {
                res.status(404).json({ message: "Could not find instruction" });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to create a new instruction",
            });
        });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    recipes
        .update(changes, id)
        .then((count) => {
            if (count) {
                res.json({ update: count });
            } else {
                res.status(404).json({
                    message: "Could not find user with given id",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to update recipe" });
        });
});
router.put("/:id/ingredients", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    recipes
        .updateIngredients(changes, id)
        .then((count) => {
            if (count) {
                res.json({ update: count });
            } else {
                res.status(404).json({
                    message: "Could not find ingredients",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to update recipe" });
        });
});

router.put("/:id/instructions", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    recipes
        .updateInstructions(changes, id)
        .then((count) => {
            if (count) {
                res.json({ update: count });
            } else {
                res.status(404).json({
                    message: "Could not find instructions",
                });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Failed to update recipe" });
        });
});

module.exports = router;
