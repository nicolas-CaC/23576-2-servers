const express = require('express')
const app = express()
const PORT = 8080

app.get('/pagina', (req, res) => {
    userAgent = req.headers['sec-ch-ua']
    language = req.headers['accept-language']

    res.send('WWW')
})

app.get('/', (req, res) => {
    res.json({ saludo: 'HOla!!!!!' })
})

app.listen(PORT, () => {
    console.log(`listen at ${PORT} - http://localhost:${PORT}`)
})