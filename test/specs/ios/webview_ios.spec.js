describe('webvioew ios',()=>{
    it('',async()=>{
        await $('~Webview').click()
        await driver.pause(5000)
        //get all contexts
 async () => {
          const contexts = await driver.getContexts()
          return contexts.includes('WEBVIEW')
        },
        { timeout: 20000 }

    })
})