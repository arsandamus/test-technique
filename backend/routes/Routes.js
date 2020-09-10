const express = require('express');

const app = express.Router();

// affiche tous les todos dans la DB
app.get('/', (req, res) => {
  repository.findAll().then((todos) => {
    res.json(todos);
  }).catch((error) => console.log(error));
});

// ajoute un nouveau todo
app.post('/', (req, res) => {
  const { name } = req.body;
  repository.create(name).then((todo) => {
    res.json(todo);
  }).catch((error) => console.log(error));
});

// efface un todo
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id).then((ok) => {
    console.log(ok);
    console.log(`Enregistrement effacé avec l'id: ${id}`);
    res.status(200).json([]);
  }).catch((error) => console.log(error));
});

// édite un todo
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const todo = { name: req.body.name, done: req.body.done };
  repository.updateById(id, todo)
    .then(res.status(200).json([]))
    .catch((error) => console.log(error));
});

module.exports = app;