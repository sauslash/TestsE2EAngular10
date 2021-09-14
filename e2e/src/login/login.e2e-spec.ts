import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';

describe('Testes do formulario de login', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('deve preencher formulário de login com sucesso', () => {
    page.navegarParaLogin();

    page.email.sendKeys('teste@teste.com');
    page.senha.sendKeys('123456');

    page.botaoLogin.click();
    page.waitingFor(3000);

    expect(page.obterResultadoLogin()).toContain('Convidado');

  });

  it('deve preencher formulário de login com dados incorretos', () => {
    page.navegarParaLogin();

    page.email.sendKeys('teste@teste.com');
    page.senha.sendKeys('12345656');

    page.botaoLogin.click();

    expect(page.obterErroSenha()).toContain('Dados inválidos');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
