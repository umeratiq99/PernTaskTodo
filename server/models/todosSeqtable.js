const sq=require('../config/dbseq');
const {DataTypes}=require('sequelize');

//Creating Table in DB
const Todos = sq.define("todos", {    //first arguement todo is the table name
    todo_id: {                        // todo_id here is the name of column
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  
    description: {
      type: DataTypes.STRING,
    },
  });

  Todos.sync();

  module.exports=Todos;