import BasePage from "./base.page";
import StoreHeaderComponent from "./components/header-nav.comp"

class CartPage extends BasePage {

get shippingRate(){
    return $("//span[text()='Flat Shipping Rate:']/../following-sibling::td");
}

get total(){
    return $("//span[text()='Total:']/../following-sibling::td");
}


}

export default new CartPage();