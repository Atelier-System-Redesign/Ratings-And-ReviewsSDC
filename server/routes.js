const router = require('express').Router();
const controllers = require('./controllers/controllers');

router.get('/', controllers.getReview);

router.get('/meta', controllers.getMeta);

router.post('', controllers.postReview);

router.put('/:review_id/helpful', controllers.markHelpful);

router.put('/:review_id/report', controllers.reportReview);

module.exports = router;
