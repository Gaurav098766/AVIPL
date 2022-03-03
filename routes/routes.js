const express = require('express');
const router = express.Router();

const liveController = require("../controllers/liveController");

router.post("/create-teacher", liveController.createTeacher)
router.post("/create-rating", liveController.createRating);
router.post("/create-review",liveController.createReview);
router.post("/create-liveclass",liveController.createLiveClass);
router.post("/search-liveclass",liveController.searchliveClass);


module.exports = router;