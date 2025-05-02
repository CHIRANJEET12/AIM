import express from 'express';
import { pool } from '../db/db';
const router = express.Router();

router.get('/todo',async(req,res)=>{
    const result = await pool.query('SELECT * FROM todo');
    res.json(result.rows);
})
router.get('/todo/:id',async(req,res)=>{
    const {id} = req.params;
    const result = await pool.query('SELECT * FROM todo WHERE id = $1',[id]);
    res.json(result.rows);
})

router.post('/todo',async(req,res)=>{
    const {title, description} = req.body;
    const result = await pool.query('INSERT INTO todo (title,description) VALUES ($1,$2)  RETURNING *',[title,description]);
    res.json(result.rows);
})
router.delete('/todo/:id',async(req,res)=>{
    const {id} = req.params;
    const result = await pool.query('DELETE FROM todo WHERE id = $1 RETURNING * ',[id]);
    res.json(result.rows);
})
export default router;