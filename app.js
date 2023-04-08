'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama : Frederica Rolanda Phoandy NIM : 51020006 Jurusan : Sistem Informasi\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
