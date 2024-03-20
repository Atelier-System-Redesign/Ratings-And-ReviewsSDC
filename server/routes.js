const router = require('express').Router();
const controller = require('./controllers');

router.get('/', controller.);

router.get('/meta', controller.);

router.post('', controller.);

router.put('/:review_id/helpful', controller.);

router.put('/:review_id/report', controller.)

module.exports = router;
