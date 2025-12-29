describe('web view',()=>{
    it('skip tutorial', async () => {
            await $('android.widget.Button').click()    
           // await expect($('android.widget.ImageView')).toBeDisplayed()
           //await expect($('//*[@text="Add note"]')).toBeExisting()
        })
    it('web',async()=>{
        await driver.pause(2000)
        await $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/main_btn3']").click()
        await $("//*[@text='Settings']").click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("About")').click()
        await $('(//android.widget.TextView[@resource-id="android:id/title"])[14]').click()
        await $('//*[@text="Privacy Policy"]').click()

        //get current context
        console.log(await driver.getContext());
        //get all contexts
        console.log(await driver.getContexts());

        //switch to webview chrome context
        await browser.waitUntil(
        async () => {
          const contexts = await driver.getContexts()
          return contexts.includes('WEBVIEW_chrome')
        },
        { timeout: 20000 }
      )

      // give WebView time to attach
      await driver.pause(3000)
      console.log('Current activity------->', await driver.getCurrentActivity())

      await driver.switchContext('WEBVIEW_chrome')
      await expect($('//*[@text="Privacy Policy"]')).toBeDisplayed()
      //asset the switch is done to chrome
      const activity = await driver.getCurrentActivity()
      expect(activity).toContain('chrome')
      await driver.back()
        
    })

    it.skip('webview',async()=>{
      await $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
      await $('//*[@text="Like us on Facebook"]').click()
      await driver.getContexts()
        const contexts = await driver.getContexts();

      const webviewContext = contexts.find(context => context.includes('WEBVIEW'));

  if (webviewContext) {
    // Switch to the found webview context
    await driver.pause(3000)
    await driver.switchContext(webviewContext,);
    console.log(`Switched to context==========> ${webviewContext}`);
  } else {
    throw new Error('No WebView context found');
  }
      await driver.back()
      

          //asset the switch is done to chrome
    
    driver.pause(1000)
    })
})