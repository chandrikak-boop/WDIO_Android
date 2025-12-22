import {config} from './wdio.shared.conf.js';
  // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    config.port=4723,
    config.specs = [
            'test/specs/android/addNote.spec.spec.js'
        ]
    config.capabilities = [ {
        // capabilities for local Appium web tests on an Android Emulator
        'appium:platformName': process.env.PLATFORM_NAME,
        'appium:deviceName': process.env.DEVICE_NAME,
       'appium:platformVersion': process.env.PLATFORM_VERSION,
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.APP_PATH,
        "appium:autoGrantPermissions": true
    }]

exports.config = config;