cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.unarin.cordova.beacon.underscorejs",
        "file": "plugins/com.unarin.cordova.beacon/www/lib/underscore-min-1.6.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Q",
        "file": "plugins/com.unarin.cordova.beacon/www/lib/q.min.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.LocationManager",
        "file": "plugins/com.unarin.cordova.beacon/www/LocationManager.js",
        "pluginId": "com.unarin.cordova.beacon",
        "merges": [
            "cordova.plugins"
        ]
    },
    {
        "id": "com.unarin.cordova.beacon.Delegate",
        "file": "plugins/com.unarin.cordova.beacon/www/Delegate.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Region",
        "file": "plugins/com.unarin.cordova.beacon/www/model/Region.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.Regions",
        "file": "plugins/com.unarin.cordova.beacon/www/Regions.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.CircularRegion",
        "file": "plugins/com.unarin.cordova.beacon/www/model/CircularRegion.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "com.unarin.cordova.beacon.BeaconRegion",
        "file": "plugins/com.unarin.cordova.beacon/www/model/BeaconRegion.js",
        "pluginId": "com.unarin.cordova.beacon",
        "runs": true
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-badge.Badge",
        "file": "plugins/cordova-plugin-badge/www/badge.js",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification.Core",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "id": "cordova-plugin-local-notification.LocalNotification.Util",
        "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
        "pluginId": "cordova-plugin-local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.unarin.cordova.beacon": "3.4.1",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-device": "2.0.1",
    "cordova-plugin-badge": "0.8.7",
    "cordova-plugin-local-notification": "0.9.0-beta.2"
};
// BOTTOM OF METADATA
});