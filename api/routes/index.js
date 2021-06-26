const express = require("express");
const _gameController = require("../controllers/gamesController");

const router = express.Router();

router.route("/games")
    .get(_gameController.getAllGames)
    .post(_gameController.addOneGame);

router.route("/games/:gameId")
    .get(_gameController.getOneGame)
    .put(_gameController.fullUpdateGame)
    .patch(_gameController.partialUpdateGame)
    .delete(_gameController.deleteOneGame);


module.exports = router;