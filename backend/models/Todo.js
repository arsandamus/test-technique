const mongoose = require('mongoose');

const { Schema } = mongoose;

// Schéma pour le modèle d'objet de la todolist
const todoSchema = new Schema({
// intitulé du todo
  name: {
    type: String,
  },
// Statut du todo
  done: {
    type: Boolean,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;