var express = require('express');
var router = express.Router();
var SurveyCtrl = require('../survey/survey.controller');
var UserCtrl = require('../user/user.controller');

// ProTip Routes
router.get('/protip', ProtipCtrl.get);
router.get('/protip/:id', ProtipCtrl.getOne);
router.post('/protip', ProtipCtrl.post);
router.post('/protip/upvote', ProtipCtrl.upvote);

// User Routes
router.post('/users/signup', UserCtrl.signup);
router.post('/users/signin', UserCtrl.signin);
router.get('/users/signout', UserCtrl.signout);
router.get('/users/getUserDetail', UserCtrl.getUserDetail);

module.exports = router;