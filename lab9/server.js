const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Lab9, Oleksii Myndar, s21068, 17c')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

app.post('/math', express.json(), (req, res) => {
    const x = +req.body.x
    const y = +req.body.y
    const operation = req.body.operation

    
    switch (operation) {
        case 'add':
            res.json({
                result: x + y
            })
            break
        case 'subtract': 
            res.json({
                result: x - y
            })
            break
        case 'multiply':
            res.json({
                result: x * y
            })
            break
        case 'divide':
            res.json({
                result: x / y
            })
            break
    }

    res.status(400)
    res.json({
        error: 'Invalid operation'
    })
})