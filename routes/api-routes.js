const router = require("express").Router();
// const Transaction = require("../models/transaction.js");

const db = require("../models");


// getLastWorkout() - GET
router.get("/api/workouts", (req, res) => {
    console.log('getLastWorkout()');
    console.log('get("/api/workouts"');
    console.log('req.body: ', req.body);
    db.Workout.find({})
        .populate('exercises')
        .then(dbWorkout => {
            console.log('dbWorkout: ', dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// addExercise() - PUT
router.put("/api/workouts/:id", ({ body }, res) => {
    console.log('addExercise()');
    console.log('body: ', body);
    db.Exercise.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
        .then(dbWorkout => {
            console.log('dbWorkout: ', dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// createWorkout() - POST
router.post("/api/workouts", (req, res) => {
    console.log('createWorkout()');
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
    console.log('******************************* getWorkoutsInRange() ******************************* ');
    console.log('req.body: ', req.body);
    db.Workout.find({})
        .populate('exercises')
        .then(dbWorkout => {
            console.log('dbWorkout: ', dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;
