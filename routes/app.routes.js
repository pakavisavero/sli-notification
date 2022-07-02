const pushNotificationController = require("../controller/push-notification.controllers");

const express = require("express");
const {
    route
} = require("express/lib/application");
const router = express.Router()

router.get("/SendNotification", pushNotificationController.SendNotification)
router.post("/SendNotificationToDevice", pushNotificationController.SendNotificationToDevice)

module.exports = router