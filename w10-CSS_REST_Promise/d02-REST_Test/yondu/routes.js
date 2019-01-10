'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/yondu', (req, res) => {
  const { distance, time } = req.query;
  const speed = (distance / time).toString();
  if (distance && time) {
    res.status(200).json({ 
      distance: distance,
      time: time,
      speed: speed
    });
  } else {
    res.status(400).json({ 
      error: "no time and speed" 
    });
  }

});

module.exports = app;
