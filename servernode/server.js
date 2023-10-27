const http = require('http')
const fs = require('fs')

const PORT = 8080

const server = http.createServer((req, res) => {

    const file = fs.readFileSync(__dirname + '/index.html')

    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" })
    res.end(file)
})

server.listen(PORT, () => {
    console.log(`listening at ${PORT} - http://localhost:${PORT}`)
})