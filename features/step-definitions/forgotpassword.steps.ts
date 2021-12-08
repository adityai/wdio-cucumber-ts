import { Given, When, Then } from '@wdio/cucumber-framework';

import ForgotPasswordPage from '../pageobjects/forgotpassword.page';

const pages = {
    forgot_password: ForgotPasswordPage
}

When(/^I enter (\w+) in the email textbox and click retrieve password$/, async (email) => {
    await ForgotPasswordPage.retrievePassword(email);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(ForgotPasswordPage.h1Text.getText()).toEqual(message);
});

