import {config} from './wdio.shared.conf.js';
  // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    config.port=4723,
    config.specs = [
            './test/specs/ios/POM_todoList.spec.js'
        ]
    config.capabilities = [{ // capabilities for local Appium web tests on an iOS Emulator
        'appium:platformName': "ios",
    //     'appium:deviceName': "iPhone 14 Plus",
    //    'appium:platformVersion': "16.0",
        'appium:deviceName': "iPhone 16",
        'appium:platformVersion': "26.0",
        'appium:automationName': 'XCUITest',
        'appium:app': "./app/ios/MVCTodo.app",
        //'appium:app': "/Users/testvagranttechnologies/Desktop/Projects/wdio_appium_mobile/app/ios/UIKitCatalog.app",
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:useNewWDA': true
    }]

export { config };