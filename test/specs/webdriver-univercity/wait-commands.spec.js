describe.skip('wait commands - example', () => {
	beforeEach(async () => {
		await browser.url('/Ajax-Loader/index.html');
	});

	it('pause command', async () => {
		const clickmeBtn = await $("//*[text()='CLICK ME!']/..");
		await browser.pause(5000);
		await clickmeBtn.click();
		await browser.pause(2000);
	});

	it('wait for clickable', async () => {
		const clickmeBtn = await $('#button1');
		//await clickmeBtn.waitForClickable({timeout: 3000})
		await clickmeBtn.waitForClickable();
		await clickmeBtn.click();
		await browser.pause(2000);
	});
	it('wait for displayed', async () => {
		const clickmeBtn = await $('#button1');
		await clickmeBtn.waitForDisplayed();
	});
	it('wait for exist', async () => {
		const clickmeBtn = await $('#button1');
		await clickmeBtn.waitForExist();
	});
	it('wait until', async () => {
		await browser.url('/Accordion/index.html');
		const loadingStatus = await $('#text-appear-box');
		await loadingStatus.waitUntil(
			async function () {
				return (await this.getText()) === 'LOADING COMPLETE.';
			},
			{
				timeout: 15000,
				timeoutMsg: 'expected text to be different after 15 sec'
			}
		);
	});
});
