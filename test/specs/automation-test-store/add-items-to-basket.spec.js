import CartPage from "../../pageobjects/automation-test-store/cart.page";
import HomePage from "../../pageobjects/automation-test-store/home.page";
import SkinCarePage from "../../pageobjects/automation-test-store/skincare.page";

describe('add items to basket', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('https://automationteststore.com/');
    })

    it('add specific skinkare product to basket& validate cart total', async () => {
        //await browser.url('https://automationteststore.com/');

        await HomePage.open();




        await HomePage.categoryMenuComponent.categoryMenuLink('Skincare')[1].click();



        await SkinCarePage.addSpecificItems_ValidateTotal("creme precieuse nuit 50ml", "total moisture facial cream");

        //await CartPage.storeHeaderComponent.cartLink.click()

    });
    it.only('add specific skinkare product to basket& validate cart total', async () => {
        const skincareLink = await $$("//a[contains(text(),'Skincare')]");
        await skincareLink[1].click();
        //console.log((skincareLink[1]));
        const skincareProduct_Header_Link = await $$('.fixed_wrapper .prdocutname');
        const chosenSong = [];

        for (const header of skincareProduct_Header_Link) {
            const headerText = await header.getText();
            if (headerText.toLowerCase() === 'creme precieuse nuit 50ml' || headerText.toLowerCase() === 'total moisture facial cream') {
                
                chosenSong.push(headerText);
                const attr = await header.getAttribute('href');
                //https://automationteststore.com/index.php?rt=product/product&path=43&product_id=93
                // https://automationteststore.com/index.php?rt=product/product&path=43&product_id=66
                const itemId = attr.split("id=").pop()
                //a[@data-id="66"]
                //a[@data-id="93"]/following-sibling::div/div[@class = "pricenew"]
                //a[@data-id="93"]/following-sibling::div/div[@class = "oneprice"]
                await $(`//a[@data-id="${itemId}"]`).click()
                chosenSong.push(
                    await $(`//a[@data-id="${itemId}"]/following-sibling::div/div[@class = "pricenew"] | //a[@data-id="${itemId}"]/following-sibling::div/div[@class = "oneprice"]`).getText()
                )
            }
            console.log(chosenSong);
        }
       
        await browser.pause(5000);

    });
});