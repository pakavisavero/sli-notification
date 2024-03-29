const {
    ONE_SIGNAL_CONFIG
} = require("../config/app.config");

const pushNotificationService = require("../services/push-notification.services")

exports.SendNotification = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        contents: {
            en: "Notifikasi SLI Tracking"
        },
        included_segments: ["semua"],
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM NOTIFICATION"
        }
    }

    pushNotificationService.SendNotification(message, (error, results) => {
        if (error) {
            return next(error)
        }
        return res.status(200).send({
            message: "Success",
            data: results
        })
    })
}

exports.SendNotificationToDevice = (req, res, next) => {
    var message = {
        app_id: ONE_SIGNAL_CONFIG.APP_ID,
        headings: {
            en: "An Important Message"
        },
        contents: {
            en: req.body.title,
        },
        include_external_user_ids: req.body.devices,
        channel_for_external_user_ids: "push",
        content_available: true,
        small_icon: "ic_notification_icon",
        data: {
            PushTitle: "CUSTOM NOTIFICATION"
        }
    }

    pushNotificationService.SendNotification(message, (error, results) => {
        if (error) {
            return next(error)
        }
        return res.status(200).send({
            message: "Success",
            data: results
        })
    })
}

//http: //localhost:8300/api/SendNotificationToDevice
//https://sli-notif.gudang.technology/api/SendNotificationToDevice