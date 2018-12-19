const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

let untilSum = n => {
  if (n === 1) {
    return 1;
  } else {
    return n + untilSum(n - 1);
  }
}

let untilFact = n => {
  if (n === 1) {
    return 1;
  } else {
    return n * untilFact(n - 1);
  }
}

let arraySum = array => {
  let n = 0;

  for (let i = 0; i < array.length; i++) {
    n += array[i];
  }

  return n;
}

let arrayMultiply = array => {
  let n = 1;

  for (let i = 0; i < array.length; i++) {
    n *= array[i];
  }

  return n;
}

let arrayDouble = array => {
  let a = [];

  for (let i = 0; i < array.length; i++) {
    a.push(array[i] * 2);
  }

  return a;
}

app.use(express.json());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    res.json({
      "received": input,
      "result": input * 2
    });
  } else {
    res.json({
      "error": "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  const { name } = req.query;
  const { title } = req.query;

  if (name && title) {
    res.json({
      "welcome_message": "Oh, hi there " + name + ", my dear " + title + "!"
    });
  } else if (name) {
    res.json({
      "error": "Please provide a title!"
    });
  } else if (title) {
    res.json({
      "error": "Please provide a name!"
    });
  }
});

app.get('/appenda/:append', (req, res) => {
  if (req.params.append) {
    res.json({
      'appended': req.params.append.concat('a')
    });
  } else {
    res.status(404).send;
  }
});

app.post('/dountil/:action', (req, res) => {
  if (req.params.action === 'sum') {
    res.json({
      "result": untilSum(req.body.until)
    });
  } else if (req.params.action === 'factor') {
    res.json({
      "result": untilFact(req.body.until)
    });
  } else {
    res.json({
      "error": "Please provide a number!"
    });
  }
});

app.post('/arrays', (req, res) => {
  const { what } = req.body;
  const { numbers } = req.body;

  if (what === 'sum') {
    res.json({
      "result": arraySum(numbers)
    });
  } else if (what === 'multiply') {
    res.json({
      "result": arrayMultiply(numbers)
    });
  } else if (what === 'double') {
    res.json({
      "result": arrayDouble(numbers)
    });
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});