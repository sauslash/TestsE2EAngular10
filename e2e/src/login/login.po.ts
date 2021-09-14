import { browser, by, element } from 'protractor';
import { AppBasePage } from '../app.base.po';

export class LoginPage extends AppBasePage {

  constructor() {
    super();
  }

  email = element(by.id('email'));
  senha = element(by.id('password'));
  botaoLogin = element(by.id('btnLogin'));

  navegarParaLogin() {
    this.navigateFromUrl('/login');
  }

  obterTituloLogin() {
    return this.getElementByXpath('/html/body/app-root/app-login/div/header/div[1]/h2').getText();
  }

  obterResultadoLogin() {
    return this.getElementByXpath('/html/body/app-root/app-home/div/div[2]/div[1]/div/div[1]/span').getText();
  }

  obterErroSenha() {
    return this.getElementByXpath('/html/body/app-root/app-login/div/header/div[2]/mat-card/mat-card-content/div/div').getText();
  }

}
