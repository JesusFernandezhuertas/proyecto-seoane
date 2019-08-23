const express = require('express')
const router = express.Router()

const conexion = require('../database')

router.get('/docentes/listar', (req, res) => {
    conexion.query('SELECT * FROM docentes', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})

router.get('/docentes/:id', (req, res) => {
    const  id  = req.params.id
    conexion.query('SELECT * FROM docentes where id = ?', id, (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err)
        }
    })
})

router.post('/docentes/agregar', (req, res) => {
    conexion.query('INSERT INTO docentes SET ? ', req.body, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Docente agregado' })
        } else {
            console.log(err)
        }
    })  
})

router.put('/docentes/actualizar/:id', (req, res) => {
    conexion.query('UPDATE docentes SET ? WHERE id = ?', [req.body, req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Datos del docente actualizados' })
        } else {
            console.log(err)
        }
    })
})

router.delete('/docentes/eliminar/:id', (req, res) => {
    conexion.query('DELETE FROM docentes WHERE id = ?', req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Docente eliminado' })
        } else {
            console.log(err)
        }
    })
})

module.exports = router