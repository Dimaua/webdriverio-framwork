describe('adv elem interactions', () => {
	
	it('inputs', async () => {
		await browser.url('/Contact-Us/contactus.html');
		const firstName = $('[name="first_name"]');
		await firstName.addValue('Add your text ');
		await firstName.addValue('My added text');
		//await browser.pause(2000)

		await firstName.setValue('Hello');
		//await browser.pause(2000)

		await firstName.clearValue();
		//wait browser.pause(2000)
	});

	it.only('dropdowns', async () => {
		await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
		const progLang = await $('#dropdowm-menu-1');
		console.log(`result tttttttt ${await progLang.getValue()}`);
		await progLang.selectByAttribute('value', 'python');
		await expect(progLang).toHaveValueContaining('python');
		//console.log('=====>' + JSON.stringify(progLang));

		await browser.pause(2000);

		const tech = await $('#dropdowm-menu-2');
		tech.selectByIndex(2);
		await expect(tech).toHaveValueContaining('TestNG', {
			ignoreCase: true
		});
		await browser.pause(2000);

		const frontendLang = await $('#dropdowm-menu-3');
		await frontendLang.selectByVisibleText('CSS');
		await expect(frontendLang).toHaveValueContaining('CSS', {
			ignoreCase: true
		});
		await browser.pause(2000);
	});
	it('state commands', async () => {
		await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
		const lettuceRadioBtn = await $('[value="lettuce"]');
		const lettuceRadioBtn_isDisplayed = await lettuceRadioBtn.isDisplayed();
		await expect(lettuceRadioBtn_isDisplayed).toEqual(true);
		await expect(lettuceRadioBtn).toBeEnabled();
		const lettuceRadioBtn_isClickable = await lettuceRadioBtn.isClickable();
		await expect(lettuceRadioBtn_isClickable).toEqual(true);

		const cabbageRadioBtn = await $('[value="cabbage"]');
		const cabbageRadioBtn_isEnabled = await cabbageRadioBtn.isEnabled();
		await expect(cabbageRadioBtn_isEnabled).toEqual(false);

		await expect(cabbageRadioBtn).toBeDisabled();
	});

	it('actions', async () => {
		await browser.url('/Actions/index.html#');
		//drag and drop
		const elem = await $('#draggable');
		const target = await $('#droppable');
		await elem.dragAndDrop(target);
		//await browser.pause(2000);

		//double click
		const doubleClickBtn = await $('#double-click');
		await doubleClickBtn.doubleClick();
		//await browser.pause(2000);

		//mouse over
		//button[text()='Hover Over Me First!']
		await $("//button[text()='Hover Over Me First!']").moveTo();

		const firstLink = await $('(//*[text()="Link 1"])[1]');
		await firstLink.waitForClickable();
		await firstLink.click();
		//await browser.pause(2000);
	});

	it('handling windows', async () => {
		await browser.url('https://www.webdriveruniversity.com/');
		await browser.newWindow('https://www.automationteststore.com/');
		let currentWindow = await browser.getTitle();
		console.log(`>>Current window title: ${currentWindow}`);
		await expect(browser).toHaveUrlContaining('automationteststore');
		await browser.pause(2000);

		await browser.switchWindow('webdriveruniversity.com');
		let currentWindow2 = await browser.getTitle();
		console.log(`>>Current window 2 title: ${currentWindow2}`);
		await expect(browser).toHaveUrlContaining('webdriveruniversity.com');
		await browser.pause(2000);

		await $('#contact-us').click();
		await browser.pause(2000);
		await browser.switchWindow('automationteststore.com');
		await browser.closeWindow();
		await browser.pause(2000);
		await browser.switchWindow('contactus');
		await browser.closeWindow();
		await browser.switchWindow('webdriveruniversity.com');
		console.log(await browser.getTitle());
		await browser.pause(2000);
	});

	it('iframes', async () => {
		await browser.url('/IFrame/index.html');
		const iframe = await $('#frame');
		await browser.switchToFrame(iframe);
		await $("//a[text()='Our Products']").click();
		await browser.switchToParentFrame();
		await browser.pause(2000);
	});

	it('alerts', async () => {
		await browser.url('/Popup-Alerts/index.html');
		await $('#button1').click();
		await browser.acceptAlert();

		await $('#button4').click();
		const alertText = await browser.getAlertText();
		await expect(alertText).toEqual('Press a button!');

		await browser.acceptAlert();
		await expect($('#confirm-alert-text')).toHaveText('You pressed OK!');
		
        await $('#button4').click();
        await browser.dismissAlert()
        await expect($('#confirm-alert-text')).toHaveText('You pressed Cancel!');
	});

    it('file upload', async() => {
        await browser.url('/File-Upload/index.html');
        await $('#myFile').addValue(`${process.cwd()}\\data\\dummy.txt`);
        await browser.pause(2000);
        await $('#submit-button').click();
        await browser.pause(2000);
    });

    it('JS execute', async() => {
        await browser.url('/Hidden-Elements/index.html');
        await browser.execute(()=>{
            return document.getElementById('not-displayed').setAttribute('id','')
        })
        await browser.execute(()=>{
            return document.body.style.backgroundColor = 'silver'
        })
        
    });
});
