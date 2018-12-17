const express = require('express');

const app = express();

app.listen(3000, () => {console.log('app is listening on port 3000')});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
