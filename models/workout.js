const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
    
  });
  

const Exercise = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;