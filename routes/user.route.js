const express = require("express");
const router = express.Router();
const multer = require("multer");

const userController = require("../controllers/user.controller");
const awsConfig = require("../configs/aws.config");
const authToken = require("../middlewares/authToken.middleware");

const upload = multer({ dest: awsConfig.AWS_BUCKET });

// GET Routes
router.get("/:findUserId", authToken, userController.getUserProfile);

// POST Routes
router.post("/", userController.createUser);

// PUT Routes
// router.put("/addMedia", upload.single("file"), userController.addMedia);

// DELETE Routes

module.exports = router;
