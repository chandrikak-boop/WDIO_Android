import {$,$$,expect,driver} from "@wdio/globals";

import data from '../../../data/listTestdata.json';
import ListPage  from '../../../pages/ios/list.page.js';
describe('Todo List App - iOS', () => {

    it('should create a new todo list', async () => {
        await ListPage.createListBtn.waitForExist({
        timeout: 10000,
        timeoutMsg: 'Login button did not appear'
        });
        await ListPage.createListBtn.click();

        await ListPage.listNameField.waitForDisplayed({
        timeout: 10000
        });
        await ListPage.listNameField.addValue(`${data.listName}`);

        await ListPage.createBtn.waitForEnabled({
        timeout: 10000
        });
        await ListPage.createBtn.click();

        await ListPage.selectList.click();
        await ListPage.addItemBtn.click();
        await ListPage.itemTitleField.addValue(`${data.items}`);
        await ListPage.dueDateField.click();
        await ListPage.selectDate.click();
        await ListPage.createItemBtn.click();
        await driver.pause(2000)
    });

    
});