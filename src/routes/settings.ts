import  addSettings, { getSettings }  from '../controller/settings.js';
import express from 'express';


const router = express.Router();

router
  .route('/').get(getSettings)
  .post(addSettings);


  module.exports = router;
