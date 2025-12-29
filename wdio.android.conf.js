import {config} from './wdio.shared.conf.js';
  // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    config.port=4723,
    config.specs = [
            'test/specs/android/webview.spec.js'
        ]
    config.capabilities = [ {
        // capabilities for local Appium web tests on an Android Emulator
        'appium:platformName': "android",
        'appium:deviceName': "Pixel 9",
       'appium:platformVersion': "16.0",
        'appium:automationName': 'UiAutomator2',
        'appium:app': "app/android/ColorNote_Notepad.apk",
        "appium:autoGrantPermissions": true
    }]
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

export {config};