const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = process.env.ENV || 8090

function divideArrayIntoNEqualParts(arr, n) {
  const returnValue = [];
  const numberOfSubArrs = Math.ceil(arr.length / n);
  if (n <= 0) return { result: "Please provide valid N value" }
  for (let i = 0; i < n; i++) {
    var subArr = [];
    for (let j = 0; j < numberOfSubArrs; j++) {
      var z = arr[j + i * numberOfSubArrs];
      if (z !== undefined) {
        subArr.push(z);
      }
    }
    returnValue.push(subArr);
  }
  return returnValue;

}
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
    var body = req.body;
    res.send(divideArrayIntoNEqualParts(body.Arr, body.N))

  })

app.listen(port, () => console.log(`Server listening on port ${port}!`))