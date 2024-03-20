const router = require('express').Router();
const controllers = require('./controllers/controllers');

// router.get('/', controller.);

// router.get('/meta', controller.);

router.post('', controllers.postReview);

// router.put('/:review_id/helpful', controller.);

// router.put('/:review_id/report', controller.)

module.exports = router;
