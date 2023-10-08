import BasePage from "./base.page";

class SignUpPage extends BasePage{
open(){
    return super.open('signup')
}
}

export default new SignUpPage();