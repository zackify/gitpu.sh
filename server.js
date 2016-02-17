import express from 'express'
let app = express()

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('gitpu.sh listening on port 3000!');
});