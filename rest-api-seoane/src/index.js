const express = require('express')
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middelwares
app.use(express.json())

// Routes
app.use(require('./routes/alumnos'))
app.use(require('./routes/docentes'))

// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})