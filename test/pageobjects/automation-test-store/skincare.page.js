import BasePage from "./base.page";
import ItemComponent from "../automation-test-store/components/item.comp"
import HeaderNavComponent from "../automation-test-store/components/header-nav.comp";
import CartPage from "../automation-test-store/cart.page"


class SkinCarePage extends BasePage {
    get itemComponent() {
        return ItemComponent;
    }

    async addSpecificItems_ValidateTotal(item1, item2) {
        const skincareProduct_Header_Link = await ItemComponent.itemHeaderLink;

        const itemPrices = [];

        for (const header of skincareProduct_Header_Link) {
            const tempHeader = await header.getText();
            if (tempHeader.toLowerCase() === item1.toLowerCase() || tempHeader.toLowerCase() === item2.toLowerCase()) {
                const attr = await header.getAttribute("href");

                const itemId = attr.split("id=").pop()
                await $('//a[@data-id="' + itemId + '"]').click();


                itemPrices.push(
                    await $("//a[@data-id='" + itemId + "']/following-sibling::div/div[@class='pricenew']" + "| //a[@data-id='" + itemId + "']/following-sibling::div/div[@class='oneprice']").getText()
                )
            }
            const formattedPrices = [];
            itemPrices.forEach((price) => {
                formattedPrices.push(price.replace("$", ""))
            })

            var itemsTotal = 0;
            formattedPrices.forEach(price => itemsTotal += parseFloat(price))
            console.log(formattedPrices, itemsTotal);
        }
        //await $("//span[text()='Cart']").click();
        await HeaderNavComponent.cartLink.click();
        await expect(browser).toHaveUrlContaining("checkout");


        let tempShippingRate = await CartPage.shippingRate.getText();
        let shipingRate = tempShippingRate.replace("$", "");
        itemsTotal = itemsTotal + parseFloat(shipingRate);
        console.log("Items total + shipping : " + itemsTotal);
    
        let cartTotal = await CartPage.total.getText();
        //cartTotal.replace("$", "");
        await expect(parseFloat(cartTotal.replace("$", ""))).toEqual(itemsTotal)
    }
}

export default new SkinCarePage();