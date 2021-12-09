const express = require('express')
const bodyParser = require('body-parser');
const divideArrayIntoNEqualParts = require('./divide')
const app = express()
const port = process.env.ENV || 8090

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
  .get("/", (req, res) => {
    res.send({ "result": "Hello from Nodejs server" })
  })
  .post("/divideArrayToNParts", (req, res) => {
    const body = req.body;
    const result = divideArrayIntoNEqualParts(body.Arr, body.N);
    res.send({result})

  })

app.listen(port, () => console.log(`Server listening on port ${port}!`))