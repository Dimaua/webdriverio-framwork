//import allureReporter from "@wdio/allure-reporter";
import ContactUsPage from "../../pageobjects/webdriver-univercity/contact-us.page"
import contactUsPage from "../../pageobjects/webdriver-univercity/contact-us.page";

describe('webdriverunivercity - contact us page', function () {
	//this.retries(1);

	beforeEach(async () => {
		await ContactUsPage.open();
		console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
	});
	it('valid submission - submit all info', async function () {
		//this.retries(2);
		allureReporter.addFeature("Contact us Page - valid submission");
		allureReporter.addDescription("Validate contact us page by submitting all data")
		allureReporter.addSeverity("critical");
		/* const firstName = await $('//*[@name="first_name"]');
		const lastName = await $('//*[@name="last_name"]');
		const email = await $('//*[@name="email"]');
		const message = await $('//*[@name="message"]');

		const submitBtn = await $('//input[@value="SUBMIT"]');

		await firstName.setValue('Dima');
		await lastName.setValue('Mishch');
		await email.setValue('dim@ukr.net');
		await message.setValue('Hello wdio'); */

		ContactUsPage.submitForm_RandData('Dima', 'Mishch')

		//await browser.debug()
		//await submitBtn.click();
		//await browser.waitThenClick(submitBtn);
		//const successfullSubmitionHeader = $('#contact_reply > h1');

		await expect(ContactUsPage.successfullSubmitionHeader).toHaveText('Thank You for your Message!');
		/* const successfullSubmitionHeader2 = await $(
			'#contact_reply > h1'
		).getText();
		await expect(successfullSubmitionHeader2).toEqual(
			'Thank You for your Message!'
		); */
	});

	it('invalid submission - not all info', async () => {
		/* const firstName = await $('//*[@name="first_name"]');
		const lastName = await $('//*[@name="last_name"]');
		const message = await $('//*[@name="message"]');
		const submitBtn = await $('//input[@value="SUBMIT"]');

		await firstName.setValue('Vasia');
		await lastName.setValue('Pupkin');
		await message.setValue('Hello Pupkin');
		await submitBtn.click(); */

contactUsPage.submitForm('Vasia','Pupkin',"",'Hello Pupkin')


		//const unsuccessfullSubmitHeader = $('body');
		await expect(ContactUsPage.unsuccessfullSubmitHeader).toHaveTextContaining([
			'Error: all fields are required',
			'Error: Invalid email address'
		]);
	});
});
