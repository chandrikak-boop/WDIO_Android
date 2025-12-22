//import data from '/Users/testvagranttechnologies/Desktop/Projects/wdio_appium_mobile/data/listTestdata.json';
import data from '../../data/listTestdata.json'

class ListPage {
    get createListBtn() {
        return $(`//XCUIElementTypeStaticText[@name="Create list"]`);
    }
    get listNameField() {
        return $(`//XCUIElementTypeTextField`);
    }
    get createBtn() {
        return $('~Create');
    }   
    get selectList(){
        return $(`//XCUIElementTypeStaticText[@name="${data.listName}"]`);
    }
    get addItemBtn(){
        return $('//XCUIElementTypeButton[@name="Add"]')
    }
    get itemTitleField(){
        return $('//*[@value="Title"]')
    }
    get dueDateField(){
        return $('//*[@value="Due"]')
    }   
    get selectDate(){
        return $('//XCUIElementTypeStaticText[@name="25"]')
    }
    get createItemBtn(){
        return $('//XCUIElementTypeButton[@name="Create"]')
    }
}
export default new ListPage();