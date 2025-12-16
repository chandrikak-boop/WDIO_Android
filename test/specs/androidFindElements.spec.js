import { driver, expect } from '@wdio/globals'
import { click } from 'appium-uiautomator2-driver/build/lib/commands/element'
describe('Android Locators',()=>{
    it('Locators by Accessibility ID', async()=>{
        //find an eleement by Accessibility ID and click on it
        const app=await $('~App')
        await app.click()
        await driver.pause(2000)
        const actionBar=await $('~Action Bar')
        await expect(actionBar).toBeExisting()
        })
    it ('find elements by class name',async ()=>{
        const className=await $('android.widget.TextView')
        console.log(await className.getText());

        //asserton

        await expect(className).toHaveText('API Demos')
    })
    it('find elements by xpath', async()=>{
        await $('//android.widget.TextView[@content-desc="App"]').click()
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()
        await $('//android.widget.TextView[@text="Command two"]').click()
        await expect($('//android.widget.TextView[@text="You selected: 1 , Command two"]')).toBeExisting()
    })

    it('by UiSelector', async()=>{
        await $('android=new UiSelector().text("App")').click()
        await $('android=new UiSelector().textContains("Device")').click()
        await $('android=new UiSelector().resourceId("android:id/title").textContains("Lock")').click()
    })

    it('multiple elements',async()=>{
        const actualList=[]
        const expectedList=['API Demos',     "Access'ibility",
            'Accessibility', 'Animation',
            'App',           'Content',
            'Graphics',      'Media',
            'NFC',           'OS',
            'Preference',    'Text',
            'Views'
        ]
        const list=await $$('android=new UiSelector().className("android.widget.TextView")')
        for(let val of list){
         // console.log(await val.getText());
         actualList.push(await val.getText())
        }
        console.log(actualList);
        await expect(actualList).toEqual(expectedList)
        await expect(list).toHaveLength(13)
        await expect(list[2]).toHaveText('Accessibility')
    })

    it.only('input fields', async()=>{
        await $('~Views').click()
        await $('~Auto Complete').click()
        await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click()
        await $('android=new UiSelector().className("android.widget.AutoCompleteTextView")').setValue('Canada')
        await expect($('android=new UiSelector().className("android.widget.AutoCompleteTextView")')).toHaveText('Canada')
    })
})