var express = require('express');
var router = express.Router();
const userCont = require('../server/controllers/userController');
const { catchErrors } = require('../server/handlers/errorHandlers');


/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.get('/api/stat',
    catchErrors(userCont.blackpinkStat)
);

module.exports = router;