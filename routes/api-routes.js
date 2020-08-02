const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

const db = require("../models");


// getLastWorkout() - GET
router.get("/api/workouts", (req, res) => {
    console.log('get("/api/workouts"');
    console.log('req.body: ', req.body);
    db.Workout.find({})
        //.populate('exercises')
        .then(dbWorkout => {
            console.log('dbWorkout: ', dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// addExercise() - PUT
router.put("/api/workouts/", (req, res) => {
    console.log('put("/api/workouts"');
    console.log('req.body: ', req.body);
    res.send(req.body);
});

// createWorkout() - POST
router.post("/api/workouts", (req, res) => {
    console.log('post("/api/workouts"');
    console.log('req.body: ', req.body);
    db.Workout.create(req.body)
        .then(dbWorkout => {
            console.log('dbWorkout: ', dbWorkout);
        })
        .catch(({ message }) => {
            console.log(message);
        });
});

// getWorkoutsInRange() - GET
router.get("/api/workouts/range", (req, res) => {
    console.log('get("/api/workouts/range"');
    console.log('req.body: ', req.body);
    res.send(req.body);
});



module.exports = router;
