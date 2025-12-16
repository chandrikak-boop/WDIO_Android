import { $ } from "@wdio/globals"
import data from "/Users/testvagranttechnologies/Desktop/Projects/wdio_appium_mobile/testdata/colornote.json"
import { driver, expect } from "@wdio/globals"
import AddNoteScreen from "/Users/testvagranttechnologies/Desktop/Projects/wdio_appium_mobile/pages/android/addNote.js"

describe('add a new note', () => {
    it('skip tutorial', async () => {
        driver.pause(3000)
        await AddNoteScreen.skipBtn.click()
       await expect(AddNoteScreen.addNote).toBeDisplayed()
       await expect(AddNoteScreen.addNote).toBeExisting()
    })

    const title=data.title
    const content=data.content
    it('add a text note', async () => {
        await AddNoteScreen.addNote.waitForExist({timeout:5000})
        await AddNoteScreen.addNote.click()
        await AddNoteScreen.addTextNote.click()
        await expect(AddNoteScreen.editTitle).toBeExisting()
        await AddNoteScreen.editTitle.waitForEnabled({timeout:5000})
        await AddNoteScreen.editTitle.setValue(`${title}`)

        await AddNoteScreen.editNote.waitForEnabled({timeout:5000})
        await AddNoteScreen.editNote.setValue(`${content}`)
        driver.waitUntil(async()=>{
            const val=await AddNoteScreen.editNote.getText()
            return val===content
        },{
            timeout:5000,
            timeoutMsg:'note content not entered'
        })
        expect(AddNoteScreen.selectNote).toBeExisting()
        await AddNoteScreen.saveNote()
        await driver.pause(2000)
    })

    it('delete a note', async () => {
        await AddNoteScreen.selectNote.click()
        await AddNoteScreen.moreOptions.click()
        await AddNoteScreen.deleteOption.click()
        await AddNoteScreen.confirmDelete.click()
        await driver.pause(3000)
        await AddNoteScreen.settingsBtn.click()
        await AddNoteScreen.trashCan.click()
        await expect(AddNoteScreen.selectNote).toBeExisting()
    })
})