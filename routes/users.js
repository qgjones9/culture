/* eslint-disable no-unused-vars */

const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (_req, _res, _next) => {
  _res.send('respond with a resource');
});

router.get('/cool', (_req, _res, _next) => {
  _res.send('You\'re so cool');
});

module.exports = router;
