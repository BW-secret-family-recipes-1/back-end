# back-end

repo for backend code

This is the template for the Product Vision Document that teams complete after their initial icebreaker. The PVD is crucial to the planning phase and is mandatory for all groups to complete and submit to their Project Lead before starting their project.
☝️ Proposal

What problem does your app solve?
The ability to save old handwritten family recipes.
Be as specific as possible; how does your app solve the problem?
Gives the user the ability to save family or favorite recipes.
What is the mission statement?
Saving family recipes one recipe at a time!
💡 Features

What features are required for your minimum viable product?
On-boarding process for a new user

Ability to enter a new recipe, including title, source (ex: Grandma Ethel), ingredients, instructions, and category (dinner, chicken, dessert, pasta, etc) and edit or delete it later.

Homepage to view all entered recipes.

Ability to search for recipes by title or tagged categories.

What features may you wish to put in a future release?

1. Ability to upload a picture of the original recipe along with the recipe entry.
   Have the ability to add “forks” to recipes while preserving the original.
   What do the top 3 similar apps do for their users?
   They give users the ability to save their favorite recipes for future reference.

🛠 Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?
HTML/CSS | React | Node.js
Do the APIs you need require you to contact them to gain access?
Are you required to pay to use said API(s)?
🧮 For Data Scientists

Describe the established data source with at least rough data able to be provided on day one.
Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?
🎯 Target Audience

Who is your target audience? Be specific.
Anyone who loves to cook and wants to save recipes for future generations.
What feedback have you gotten from potential users?
Have you validated this problem and your solution with a target audience? Describe how,

🔑 Prototype Key Feature(s)

How long do you think it will take to implement these features?
About a week and a half
Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
Yes.

Secret Family Recipes

Introduction
This API provides login credentials and recipes

Authentication
Jwttoken is used for authentication

Error Codes
200 Success,
201 Success Resource Created,
401 Unauthorized,
404 Not Found,
500 Internal Server Error
/-----------------------------------------------------------------------------------------------/

POST /api/auth/register

Register New User

expects an object: Required:

{
"first_name":"bob",
"last_name":"jones",
"email":"bobjones@gmail.com",
"password":"password"
}

returns 201 SUCCESS Status and newly created user object

{
"token":"super-secret-token",
"user":
{
"id:5",
"first_name":"bob",
"last_name":"jones",
"email":"bobjones@gmail.com",
"password":"password"
}
}

/-----------------------------------------------------------------------------------------------/

POST /api/auth/login

User Login

expects an object: Required:

{
email:"bobjones@gmail.com",
password:"password"

}

returns a 200 SUCCESS Status and the user object:

{
"message": "Welcome to our API"
"token":"super-secret-token",

}

/-----------------------------------------------------------------------------------------------/

GET /api/recipes

Get all recipes for user
{
"recipe_id": 2,
"step_number": "2",
"instructions": "Place on oven sheet funny funny"
}
/-----------------------------------------------------------------------------------------------/
Get /api/recipes/:id/

{
"id": 2,
"title": "something new",
"source": "something not new",
"category": "something different"
}

/-----------------------------------------------------------------------------------------------/

GET /api/recipes/:id/ingredients

[
{
"name": "did you wanna know",
"id": 4
},
{
"name": "1 butter recipe moist cake mix",
"id": 5
},
{
"name": "4 oz salted butter (softened)",
"id": 6
},
{
"name": "1 2/3 cup whole milk (divided)",
"id": 7
}
]

/-----------------------------------------------------------------------------------------------/

GET /api/recipes/:id/instructions

[
{
"title": "something new",
"step_number": "2",
"instructions": "Place on oven sheet funny funny",
"id": 3
},
{
"title": "something new",
"step_number": "2",
"instructions": "Prepare milk mixture by combining a can of sweetened condensed milk, evaporated milk, and 1 c whole milk in a bowl and whisk together to combine and keep cool while cake cools.",
"id": 4
},
{
"title": "something new",
"step_number": "3",
"instructions": "Decorate with sliced strawberries if desired and allow to chill for at least 4 hours before serving",
"id": 5
}
]

/-----------------------------------------------------------------------------------------------/

POST /api/recipes/

{
title:"cookies",
category:"desert",
source:"grandmaw sally",
}

/-----------------------------------------------------------------------------------------------/

POST /api/recipes/:id/ingredients/
{
name: "1 cup of flour",
recipe_id: 1
}

/-----------------------------------------------------------------------------------------------/

POST /api/recipes/:id/instructions/

{
recipe_id: 1,
step_number: 1,
instructions: "Mix all ingredients in bowl",
}

/-----------------------------------------------------------------------------------------------/

PUT /api/recipes/:id

{
title:"cookies",
category:"desert",
source:"grandmaw sally",
}

PUT /api/recipes/ingredients/:ingredientid

{
name: "1 cup of flour",
recipe_id: 1
}

PUT /api/recipes/instructions/:instructionid
g
{
recipe_id: 1,
step_number: 1,
instructions: "Mix all ingredients in bowl",
}

/-----------------------------------------------------------------------------------------------/

DELETE /api/recipes/:id

Delete recipe

Must include id
