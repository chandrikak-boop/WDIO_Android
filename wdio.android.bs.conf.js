import {config} from './wdio.shared.conf.js';
// ====================
    // BrowserStack Configuration
    // ====================
 config.user=process.env.BROWSERSTACK_USER
 config.key=process.env.BROWSERSTACK_KEY
    config.specs = [
            'test/specs/android/addNote.spec.js'
        ]
   
    config.capabilities= [{
  platformName: 'Android',            // ✅ NO appium:
  'appium:deviceName': 'Google Pixel 7',
  'appium:platformVersion': '13.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': 'bs://4fe1d5e9fd8d4313fbff5653be21d9142bc67b96',
  'appium:autoGrantPermissions': true
}]


       //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.

   config.services= ['browserstack']

export { config };