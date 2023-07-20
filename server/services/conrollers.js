const Todos = require("../models/todosSeqtable");


//create a todo .post method
const createTodo = async (req, res) => {
    try {
      const { description } = req.body;
      const newtodo = await Todos.create({ description });
      res.json(newtodo);
    } catch (err) {
      console.error(err.message);
    }
  };
  // getting all todos
  const allTodo= async (req, res) => {
    try {
      const atodos = await Todos.findAll();
      res.json(atodos);
    } catch (error) {
      console.error(err.message);
    }
  };
  // getting a single todo
  const aTodo= async (req, res) => {
    try {
      const { id } = req.params;
      const atodo = await Todos.findAll({
        where: {
          todo_id: id,
        },
      });
      res.json(atodo);
    } catch (err) {
      res.status(404).send(err);
      console.log(err.message);
    }
  };
  
  //updating values in existent todo
  const updateTodo= async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const utodo = await Todos.update(
        { description: description },
        {
          where: {
            todo_id: id,
          },
        }
      );
      res.json(utodo);
    } catch (err) {
      console.error(err.message);
    }
  };
  //deleting a todo
  const deleteTodo= async (req, res) => {
    try {
      const { id } = req.params;
      const dtodo = await Todos.destroy({
        where: {
          todo_id: id,
        },
      });
      res.json("todo was deleted!");
    } catch (err) {
      console.error(err.message);
    }
  };

  module.exports={createTodo, allTodo, aTodo, updateTodo, deleteTodo};