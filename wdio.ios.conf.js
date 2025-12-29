import {config} from './wdio.shared.conf.js';
  // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    config.port=4723,
    config.specs = [
            './test/specs/ios/web**.spec.js'
        ]
    config.capabilities = [{ // capabilities for local Appium web tests on an iOS Emulator
        'appium:platformName': "ios",
    //     'appium:deviceName': "iPhone 14 Plus",
    //    'appium:platformVersion': "16.0",
        'appium:deviceName': "iPhone 16",
        'appium:platformVersion': "26.2",
        'appium:automationName': 'XCUITest',
        'appium:app': "./app/ios/wdiodemoapp.app",
        //'appium:app': "/Users/testvagranttechnologies/Desktop/Projects/wdio_appium_mobile/app/ios/UIKitCatalog.app",
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:useNewWDA': true,
    },

]
   //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.

   config.services= [
  ['appium', {
    command: 'appium',
    args: {
      port: 4723,
      relaxedSecurity: true,
      sessionOverride: true
    }
  }]
]

  

export { config };