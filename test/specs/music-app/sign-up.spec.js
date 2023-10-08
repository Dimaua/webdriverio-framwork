import SignUpPage from "../../pageobjects/musicApp/sign-up.page";

describe('muscicApp - sign up page', () => {

    beforeEach(async () => {
		await SignUpPage.open();
		console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
	});

    it('valid submission', async() => {
        
    });
});