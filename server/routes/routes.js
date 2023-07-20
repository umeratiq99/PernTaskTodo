const express=require('express');
const router=express.Router();

const {createTodo, allTodo, aTodo, updateTodo, deleteTodo}=require('../services/conrollers');

router.post('/', createTodo);
router.get('/',allTodo);
router.get('/:id',aTodo);
router.put('/:id',updateTodo);
router.delete('/:id',deleteTodo);

module.exports=router;