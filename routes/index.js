var express = require('express');
var router = express.Router();
const userCont = require('../server/controllers/userController')


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/api/stat', userCont.blackpinkStat);

module.exports = router;