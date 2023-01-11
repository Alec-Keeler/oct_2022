// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({order: [['name', 'ASC']]});

    res.json(allPuppies);
});


// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {
    // Your code here
    const pup = await Puppy.findByPk(req.params.puppyId)
    if (!pup) {
        res.send('this pup doesnt exist')
    }
    const {age_yrs, weight_lbs, microchipped} = req.body

    // if (age_yrs) {
    //     pup.age_yrs = age_yrs
    // }
    // if (weight_lbs) {
    //     pup.weight_lbs = weight_lbs
    // }
    // if (microchipped !== undefined) {
    //     pup.microchipped = microchipped
    // }
    pup.set({
        age_yrs: req.body.age_yrs
    })

    await pup.save()

    const updatedPup = await Puppy.findByPk(req.params.puppyId)
    res.json({
        message: "Successfully updated puppy",
        updatedPup
    })

})


// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
    // Your code here
    const pup = await Puppy.findByPk(req.params.puppyId)
    
    if (pup) {
        await pup.destroy()
        res.send('Puppy successfully graduated to dog')
    } else {
        res.send('This puppy does not exist')
    }
})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));