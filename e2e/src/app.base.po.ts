import { browser, by, element } from 'protractor';

export abstract class AppBasePage {

    constructor() {
        browser.driver.manage().window().maximize();
    }

    navigateToHome() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    navigateFromUrl(url: string) {
        return browser.get(url) as Promise<any>;
    }

    getElementByXpath(xpath: string) {
        return element(by.xpath(xpath));
    }

    waitingFor = (milisegundos: number) => {
        browser.sleep(milisegundos);
    }

}
