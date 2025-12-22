import { $, driver } from "@wdio/globals";

describe('iOS Test Suite', () => {

    it.skip('accessibility id', async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
await expect(await driver.getAlertText()).toContain("A Short Title Is Best");    });


it.skip('by type(tag name)', async () => {
    //getting all static text elements
    const elements = await $$('XCUIElementTypeStaticText');
    console.log("Total Static Text elements: " + elements.length);
    for (const element of elements) {
        console.log(await element.getText());
    }
})

 
it('accessibility id', async () => {
    // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
    // await $('//XCUIElementTypeStaticText[@label="Simple"]').click();

       await $('//*[@name="Alert Views"]').click();
    await $('//*[@label="Simple"]').click();
await expect(await driver.getAlertText()).toContain("A Short Title Is Best");    
    });

    it('by class chain', async () => {
// let alertText='**/XCUIElementTypeStaticText[`name == "Alert Views"`]'
let alertText='**/XCUIElementTypeStaticText[`name CONTAINS "Alert"`]'

await $(`-ios class chain:${alertText}`).click();
let simpleAlert='**/XCUIElementTypeStaticText[`label == "Simple"`]'
await $(`-ios class chain:${simpleAlert}`).click();
await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })

       it('by predicate string', async () => {
//let alertText='name == "Alert Views"'
//let alertText='name CONTAINS "Alert"'
let alertText='label BEGINSWITH[c] "alert"'
await $(`-ios predicate string:${alertText}`).click();
let simpleAlert='**/XCUIElementTypeStaticText[`label == "Simple"`]'
await $(`-ios class chain:${simpleAlert}`).click();
await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })
it('input search', async () => {
await $('~Search').click();
await $('~Default').click()
await $('//XCUIElementTypeSearchField').addValue("Appium");
await expect($('//XCUIElementTypeSearchField')).toHaveAttr("value");
await $('~Clear text').click();
await expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value");
})

// iOS Native Actions like tap, double tap, pinch, zoom, swipe etc can be performed using Wdio TouchAction API or Wdio Mobile Gestures API
it('ios native actions', async () => {
    await $('~Alert Views').click();
    await $('~Okay / Cancel').click();
    await $('~Cancel').waitForDisplayed();
 // await $('~OK').click();
    console.log(await driver.getAlertText());
    await driver.dismissAlert();
     await expect($('~OK')).not.toBeExisting();
    });

    it('scrolling', async () => {
    // await driver.execute('mobile: scroll', {direction: 'down'});
        // await driver.execute('mobile: scroll', {direction: 'up'});

        //Picker view scrolling
        await $('~Picker View').click();
const redPickerWheel = await $('~Red color component value');   
const greenPickerWheel = await $('~Green color component value');
const bluePickerWheel = await $('~Blue color component value');
// await driver.execute('mobile: scroll', {element: redPickerWheel.elementId, direction: 'up'});   
// await driver.execute('mobile: scroll', {element: greenPickerWheel.elementId, direction: 'down'});   
// await driver.execute('mobile: scroll', {element: bluePickerWheel.elementId, direction: 'down'});

//set purple color(125,0,125)
await redPickerWheel.addValue("125");
await greenPickerWheel.addValue("0");
await bluePickerWheel.addValue("125");
await driver.pause(2000);
    })
})