const express = require('express');
const router = express.Router();
const CV = require('../app/controllers/cv.ctrl');
const Award = require('../app/controllers/award.ctrl');

//CV
router.get('/cv', CV.GetAllCV);
router.get('/cv/:id', CV.GetCVbyID);
router.post('/cv' ,CV.CreateCV);
router.put('/cv/:id', CV.UpdateCV );
router.delete('/cv/:id', CV.RemoveCV);

//Award
router.get('/award/:idcv', Award.GetAllAward);
router.post('/award', Award.CreateAward);
router.put('/award/:id', Award.UpdateAward);
router.delete('/award/:id', Award.RemoveAward);

module.exports = router;
