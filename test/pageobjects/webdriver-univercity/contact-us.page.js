import BasePage from "./base.page";

class ContactUsPage extends BasePage {
open(){
    return super.open("Contact-Us/contactus.html")
}
get inputFirstName(){
    return $('//*[@name="first_name"]')
}
get inputLastName(){
    return $('//*[@name="last_name"]')
}
get inputEmailAdress(){
    return $('//*[@name="email"]')
}
get inpetComments(){
    return $('//*[@name="message"]')
}
get submitBtn(){
    return $('//input[@value="SUBMIT"]')
}

get successfullSubmitionHeader(){
    return $('#contact_reply > h1')
}
get unsuccessfullSubmitHeader(){
    return $('body');
};

async submitForm(firstName,lastName,emailAddress,message){
await this.inputFirstName.setValue(firstName);
await this.inputLastName.setValue(lastName);
await this.inputEmailAdress.setValue(emailAddress);
await this.inpetComments.setValue(message);
await this.submitBtn.click();
}

async submitForm_RandData(firstName,lastName){
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputEmailAdress.setValue("AutoEmail_"+ DataGenerator.generateRandString() + "@gmail.com");
    await this.inpetComments.setValue("Random Message"+ DataGenerator.generateRandString());
    await this.submitBtn.click();
    }


}

export default new ContactUsPage();