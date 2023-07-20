const express = require("express");
const app = express();
const cors = require("cors");
//const pool = require("./config/db");
const routers=require('./routes/routes');
//const Todos = require("./models/todosSeqtable");

//middleWare cors is a middleware used in Expressjs to connect it with different libraries/cross platform(React)
app.use(cors());
app.use(express.json()); //Method use to convert string from frontend in Json data for DB (req.body)
app.use('/todo',routers);
//ROUTES//

// //create a todo .post method
// app.post('/todo', async(req,res)=>{
//     try{
//         const {description}=req.body;
//         const newtodo=await pool.query(
//             "INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
//         )
//         res.json(newtodo.rows[0]);
//     } catch(err){
//         console.error(err.message);
//     }
// })

// // getting all todos
// app.get('/todo', async (req,res)=>{
//     try {
//         const atodos=await pool.query("SELECT * FROM todo" );
//         res.json(atodos.rows);
//     } catch (error) {
//         console.error(err.message)
// }})

// // getting a single todo
// app.get('/todo/:id', async (req,res)=>{
//     try {
//         const {id}=req.params;
//         const atodo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id] );

//         res.json(atodo.rows[0]);
//     } catch (err) {
//         res.status(404).send(err);
//         console.log(err.message)
// }})

// //updating values in existent todo
// app.put('/todo/:id', async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const{description}=req.body;
//         const utodo=await pool.query("update todo set description=$1 where todo_id=$2 returning *",[description,id] );
//         res.json(utodo.rows[0]);
//     } catch (err) {
//         console.error(err.message)
//     }
// })

// //deleting a todo
// app.delete('/todo/:id',async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const dtodo=await pool.query("delete from todo where todo_id=$1",[id])
//         res.json('todo was deleted!');
//     } catch (err) {
//         console.error(err.message);
//     }
// })
// app.listen(5000,()=>{
//     console.log('listening to port 5000');
// })


// // Using Sequelizing:-////

// //create a todo .post method
// app.post("/todo", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newtodo = await Todos.create({ description });
//     res.json(newtodo);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
// // getting all todos
// app.get("/todo", async (req, res) => {
//   try {
//     const atodos = await Todos.findAll();
//     res.json(atodos);
//   } catch (error) {
//     console.error(err.message);
//   }
// });
// // getting a single todo
// app.get("/todo/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const atodo = await Todos.findAll({
//       where: {
//         todo_id: id,
//       },
//     });
//     res.json(atodo);
//   } catch (err) {
//     res.status(404).send(err);
//     console.log(err.message);
//   }
// });

// //updating values in existent todo
// app.put("/todo/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const utodo = await Todos.update(
//       { description: description },
//       {
//         where: {
//           todo_id: id,
//         },
//       }
//     );
//     res.json(utodo);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
// //deleting a todo
// app.delete("/todo/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const dtodo = await Todos.destroy({
//       where: {
//         todo_id: id,
//       },
//     });
//     res.json("todo was deleted!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.listen(5000, () => {
  console.log("listening to port 5000");
});
