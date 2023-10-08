describe('locating el', () => {
	beforeEach(async () => {
		await browser.url('https://selectors.webdriveruniversity.com/');
	});
	it('$ - locate element', async () => {
		await browser.$("//a[@href='#portfolio']").click();
		//await browser.pause(3000);

		const webdriverioBtn = await $('[data-target="#portfolioModal1"]');
		await webdriverioBtn.click();
		//await browser.$('[data-target="#portfolioModal1"]').click();
		//await browser.pause(3000);
	});

	it('$$ - locate elements', async () => {
		const expectedTitles = [
			'#',
			'First',
			'Last',
			'Handle',
			'1',
			'2',
			'3',
			'Firstname',
			'Lastname',
			'Age'
		];
		const actualTitles = [];
		const tebleHeaderTitles = await $$('//table//th');
		for (const title of tebleHeaderTitles) {
			console.log(await title.getText());
			actualTitles.push(await title.getText());
		}
		expect(expectedTitles).toEqual(actualTitles);
	});
});
