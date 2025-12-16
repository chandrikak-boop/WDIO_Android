import { $, expect } from '@wdio/globals';
import fs from 'fs';
import path from 'path';
describe('Android Locators',()=>{
    it('App Package abd App Activity', async()=>{
        await driver.startActivity('io.appium.android.apis',"io.appium.android.apis.app.AlertDialogSamples")
        await expect($('//*[@content-desc="Progress dialog"]')).toBeExisting()
       })
    
    it.skip('dialogs',async()=>{
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()
        await expect($('//*[@resource-id="android:id/alertTitle"]')).toBeExisting()
        //await driver.acceptAlert()
        await driver.dismissAlert()

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toBeExisting()
    })
    it('dialogs 2',async()=>{
        await $('//android.widget.Button[@content-desc="OK Cancel dialog with a long message"]').click()
        await expect($('//*[@text="Header title"]')).toBeExisting()
        console.log("Alert Text: "+await driver.getAlertText());
        await $('//*[@resource-id="android:id/button1"]').click()
        await expect($('//*[@text="Header title"]')).not.toBeExisting()
    })

    it('vertical scroll',async()=>{   
        await $('~App').click()
        await $('~Activity').click()
       //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()
    //   await $('~Secure Surfaces').click()
       await expect($('~Secure Dialog')).toBeExisting()

    })

    it('horizontal scroll',async()=>{   
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")
        await driver.pause(2000)
        //horizontal scroll
       // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollToEnd(1,5)')
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward() ')
    })

    it('date picker',async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")
       const currentDate= await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()
       console.log("Current Date is --->"+currentDate);
       await $('~change the date').click()
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
       await $('//android.view.View[@content-desc="10 January 2026"]').click()
       await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
       await driver.pause(2000)
        const updatedDate= await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText()
       console.log("Updated Date is --->"+updatedDate);
       await expect($('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')).toHaveText("1-10-2026 01:02")
        await expect(updatedDate).not.toEqual(currentDate)
    })

    it('checkbox demo',async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Controls2")
        const checkbox1= await $('//*[@text="Checkbox 1"]')
        await checkbox1.click()
        await expect(checkbox1).toHaveAttribute("checked","true")
      //  await browser.saveScreenshot("ss.png")
    })

    it('switch demo',async()=>{       
    await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Switches")
    await $('//*[@text="Standard switch"]').click()
    })

    it.only('drag and drop demo',async()=>{       
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DragAndDropDemo")
        const source=  await $('//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_1"]')
        const target=  await $('//android.view.View[@resource-id="io.appium.android.apis:id/drag_dot_2"]')
        //await source.dragAndDrop(destination)

await source.waitForDisplayed();
await target.waitForDisplayed();
await source.waitForDisplayed({ timeout: 5000 });

const src = await driver.getElementRect(source.elementId);
await target.waitForDisplayed({ timeout: 5000 });

const trg = await driver.getElementRect(target.elementId);

await driver.performActions([{
    type: 'pointer',
    id: 'finger1',
    parameters: { pointerType: 'touch' },
    actions: [
        { type: 'pointerMove', duration: 0, x: src.x + src.width / 2, y: src.y + src.height / 2 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 300 },
        { type: 'pointerMove', duration: 800, x: trg.x + trg.width / 2, y: trg.y + trg.height / 2 },
        { type: 'pointerUp', button: 0 }
    ]
}]);

await driver.releaseActions();
        await driver.pause(2000)
    })
})