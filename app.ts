import express from 'express'
import { addAbortSignal } from 'stream'
const app = express()

app.get('/', function (req, res) {
  console.log(req)

  res.send('Hello World')
})

app.listen(3700)
