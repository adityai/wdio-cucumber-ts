import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ForgotPasswordPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get email(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#email');
    }

    public get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#form_submit');
    }

    public get h1Text(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('body > h1');
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async retrievePassword (email: string): Promise<void> {
        await this.email.setValue(email);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open(): Promise<string> {
        return super.open('forgot_password');
    }
}

export default new ForgotPasswordPage();
