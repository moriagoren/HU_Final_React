var express = require('express');
var router = express.Router();
const cards = require('../controllers/cards')
const auth = require('../middleware/auth')

router.get('/', cards.allCards);
router.get('/:id', cards.getOneCard)
router.get('/mycards/:_id', cards.myCards);
router.get("/favorites", auth, cards.getUserFavorites)
router.post('/:id', auth, cards.setFavorite);
router.post('/', auth, cards.add);
router.patch('/:id', auth, cards.edit);
router.delete('/:_id', cards.delete);
module.exports = router;
