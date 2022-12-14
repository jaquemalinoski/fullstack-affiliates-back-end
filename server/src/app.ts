const express = require('express')
import "dotenv/config"
import 'reflect-metadata'
import cors from 'cors'

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(require('./routes'))

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});

export default app