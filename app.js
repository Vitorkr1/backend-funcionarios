const express = require('express')
const pool = require('./db/db.js')
const app = express()
app.use(express.json())


app.get('/funcionarios', async (req,res) => {
  try{
    let [funcionario] = await pool.query(`SELECT * FROM funcionarios`)
    res.status(200).json({funcionarios:funcionario})

  }catch (erro){
    res.status(500).json({message:erro})
  }
  
})

app.get('/funcionarios/:id', async (req,res) => {
  let {id} = req.params
  try{
    let [rows] = await pool.query(`SELECT * FROM funcionarios WHERE id = ?`, [id])
    if (rows.length === 0) {
     return res.status(404).json({message:"funcionario nao encontrado"})
   }  
   res.status(200).json(rows[0])
  }catch (error){
  console.error("ERRO REAL:", error)
  res.status(500).json({ message: error.message })

}
})

app.post('/funcionarios', async (req,res) => {
  const {nome,cargo,salario} = req.body
  if(!nome || !cargo || !salario){
    return res.status(400).json({message:"todos os dados presição ser preenchidos"})
  }
  try{
    let [cadastro] = await pool.query(`INSERT INTO funcionarios (nome, cargo, salario) VALUES (?,?,?)`,[nome,cargo,salario])
    res.status(201).json({message:`funcionario cadastrado!`})
  }catch (error){
    res.status(500).json({message:"error no servidor"})
  }
})

app.put('/funcionarios/:id', async (req,res) => {
  const {id} = req.params
  const {nome,cargo,salario} = req.body
  if(!nome || !cargo || !salario){
    return res.status(400).json({message:"todos os dados precisão estar preenchidos!!!!!"})
  }
  try{
    let [funcionario] = await pool.query(`UPDATE funcionarios SET nome=?, cargo=?, salario=? WHERE id=?`, [nome,cargo,salario,id])
    if(funcionario.affectedRows === 0){
      return res.status(404).json({message:"usuario nao encontrado!"})
    }
    res.status(200).json({message:"usuario atualizado"})
  }catch (erro){
    res.status(500).json({message:"error no servidor"})
  }
})

app.delete('/funcionarios/:id', async (req,res) => {
  const {id} = req.params
  try{
    let [del] = await pool.query(`DELETE FROM funcionarios WHERE id=?`, [id])
    if(del.affectedRows === 0){
      return res.status(404).json({message:"funcionario nao encontrado!!"})
    }
    res.status(200).json({message:"funcionario deletado!"})

  }catch (error){
    res.status(500).json({message:'erro no servidor', error})
  }
})

app.listen(3000)