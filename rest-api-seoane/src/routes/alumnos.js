const express = require('express')
const router = express.Router()

const conexion = require('../database')

router.get('/alumnos/listar', (req, res) => {
    conexion.query('SELECT * FROM alumnos', (err, rows, fields) => {
        if (!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    })
})

router.get('/alumnos/:id', (req, res) => {
    const  id  = req.params.id
    conexion.query('SELECT * FROM alumnos where id = ?', id, (err, rows, fields) => {
        if (!err) {
            res.json(rows[0])
        } else {
            console.log(err)
        }
    })
})

router.post('/alumnos/agregar', (req, res) => {
    conexion.query('INSERT INTO alumnos SET ? ', req.body, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Alumno agregado' })
        } else {
            console.log(err)
        }
    })  
})

router.put('/alumnos/actualizar/:id', (req, res) => {
    conexion.query('UPDATE alumnos SET ? WHERE id = ?', [req.body, req.params.id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Datos del alumno actualizados' })
        } else {
            console.log(err)
        }
    })
})

router.delete('/alumnos/eliminar/:id', (req, res) => {
    conexion.query('DELETE FROM alumnos WHERE id = ?', req.params.id, (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Alumno eliminado' })
        } else {
            console.log(err)
        }
    })
})

module.exports = router