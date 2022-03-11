// Plik centralny API - tu importujemy enpointy (index.js) z poszczegolnych katalogow
const {Router} = require('express');
const products = require('./products')
const categories = require('./categories')


// Routing
const router = Router();
router.use('/products', products );
router.use('/categories', categories)

// Inny routing idzie tutaj


module.exports = router;


