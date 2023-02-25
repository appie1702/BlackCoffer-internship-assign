const express = require("express");
const router = express.Router();
const {fullDataList, datalistfilter, datalistsort} = require('../controllers/datalistController')

router.route('/').get(fullDataList);
router.route('/filter').post(datalistfilter);
router.route('/sort').post(datalistsort);
module.exports = router;