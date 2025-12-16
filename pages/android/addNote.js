import { $, driver } from "@wdio/globals"
import data from "/Users/testvagranttechnologies/Desktop/Projects/wdio_appium_mobile/testdata/colornote.json"

 class AddNoteScreen{
     get skipBtn(){
        return $('android.widget.Button')
    }
    get addNote(){
        return $('//*[@text="Add note"]')
    }

    get addTextNote(){
        return $('android=new UiSelector().text("Text")')
    }
    get editTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }
    get editNote(){
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }
    async saveNote(){
        driver.back()
        driver.back()
    }
    get selectNote(){
        console.log("Title is=========>",);
        return $(`//*[@text="${data.title}"]`)
    }
    get moreOptions(){
        return $('//android.widget.ImageButton[@content-desc="More"]')
    }
    get deleteOption(){
        return $('//*[@text="Delete"]')
    }
    get confirmDelete(){
        return $('//*[@resource-id="android:id/button1"]')
    }
    get settingsBtn(){
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }
    get trashCan(){
        return $('//*[@text="Trash Can"]')
    }   

}
//module.exports=new AddNoteScreen()
export default new AddNoteScreen()