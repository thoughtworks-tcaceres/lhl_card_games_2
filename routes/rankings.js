const express = require('express');
const router = express.Router();
const {isLoggedIn} = require('../bin/helpers/middleware');
const {getPlayerRankingsByGameType, getArchivedGames} = require('../bin/helpers/dbHelpers');
const db = require('../db/db');

router.get('/', isLoggedIn, (req, res) => {
  res.render('results');
});

router.get('/allusers', isLoggedIn, (req, res) => {
  getArchivedGames()
    .then((results) => res.json(results))
    .catch((err) => res.json({err: err.message}));
});

module.exports = router;
