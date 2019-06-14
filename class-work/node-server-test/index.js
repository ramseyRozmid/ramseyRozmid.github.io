//express way of making a server
const express = require('express')
const app = express()
const port = 3000
const users = [
  {id: 1, name: 'Aaron'},
  {id: 2, name: 'Billy'},
  {id: 3, name: 'David'}
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/users/:id', (req,res) => {
  var user = users.find(user => user.id === parseInt(req.params.id))
  if (!user) res.status(404).send('no user')
  res.send(user)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// //node way of making a server
// const http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);
//
// console.log('listening on port')
