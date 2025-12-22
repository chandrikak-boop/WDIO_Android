import { driver } from "@wdio/globals";

describe.skip('iOS Test Suite', () => {

    const listName="Test List"
    let items=["Buy Groceries","Walk the Dog","Read a Book"]
    // const item1="Buy Groceries"
    // const item2="Walk the Dog"
    // const item3="Read a Book"
    it('create list', async () => {
        await $(`//XCUIElementTypeStaticText[@name="Create list"]`).click();
        await $(`//XCUIElementTypeTextField`).addValue(`${listName}`);
        await $('~Create').click();
        await expect($(`//XCUIElementTypeStaticText[@name="${listName}"]`)).toBeExisting();
    })

    it('add items to list', async () => {
        await $(`//XCUIElementTypeStaticText[@name="${listName}"]`).click();
        for(const item of items){
            await $('//XCUIElementTypeButton[@name="Add"]').click();
            await $('//*[@value="Title"]').addValue();
            await $('//*[@value="Due"]').click(); //selecting  date field
            await $('//XCUIElementTypeStaticText[@name="25"]').click(); //selecting date
            await $('//XCUIElementTypeButton[@name="Create"]').click();
            await driver.pause(2000)
        }
    })
});