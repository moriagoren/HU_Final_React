var express = require('express');
var router = express.Router();
const cards = require('../controllers/cards')
const auth = require('../middleware/auth')

router.get('/', cards.allCards);
router.post('/', auth, cards.add);
router.post('/', auth, cards.edit);
router.delete('/:id', cards.delete);
module.exports = router;
