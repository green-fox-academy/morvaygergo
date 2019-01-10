'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('yondu endpoint without query', (t) => {
  request(app)
    .get('/yondu')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { error: "no time and speed"  }, 'without query test');
      t.end();
    });
});


test('yondu endpoint with query', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { distance: "100.0", time: "10.0", speed: "10" }, 'with query test');
      t.end();
    });
});
