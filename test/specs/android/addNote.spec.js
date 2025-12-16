import { $ } from "@wdio/globals"

describe('add a new note', () => {
    it('skip tutorial', async () => {
        await $('android.widget.Button').click()    
       // await expect($('android.widget.ImageView')).toBeDisplayed()
       await expect($('//*[@text="Add note"]')).toBeExisting()
    })
    const title="Test Note"
    it('add a text note', async () => {
        await $('//*[@text="Add note"]').click()
        await $('android=new UiSelector().text("Text")').click()
        await expect($('//*[@text="Editing"]')).toBeExisting()
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').setValue(`${title}`)
        await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').setValue("This is a sample note")
        await driver.back()
        await driver.back()
        expect(`//*[@text="${title}"]`).toBeExisting()
        await driver.pause(2000)
    })

    it('delete a note', async () => {
        await $(`//*[@text="${title}"]`).click()
        await $('//android.widget.ImageButton[@content-desc="More"]').click()
        await $('//*[@text="Delete"]').click()
        await $('//*[@resource-id="android:id/button1"]').click()
        await driver.pause(3000)
        await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
        await $('//*[@text="Trash Can"]').click()
        await expect($(`//*[@text="${title}"]`)).toBeExisting()
    })


})