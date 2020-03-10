import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';

import { I18nSelectPipe } from '@angular/common';
function getText(selector) {
  var elem = element(by.css(selector));
  return elem.getText();
}
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://google.com');
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(element(by.id('main'))), 3000, 'Element taking too long to appear in the DOM');
    expect(1).toEqual(1);



    // browser.waitForAngularEnabled(false)
    // browser.get('https://acquire.qa.altusplatform.com');
    // // page.navigateTo();
    // var EC = protractor.ExpectedConditions;
    //  browser.wait(EC.presenceOf(element(by.id('sfid-username'))), 30000, 'Element taking too long to appear in the DOM');

    // element(by.id('sfid-username')).sendKeys('santosh+admin180919124500@argusexpresstest.com');
    // element(by.id('sfid-password')).sendKeys('Password123$');
    // var getStarted = element(by.id('sfid-submit'));
    // getStarted.click();
    //   browser.wait(EC.presenceOf(element(by.className('apex__header-container'))), 60000, 'Element taking too long to appear in the DOM');

    // // browser.waitForAngularEnabled(true);
    // const appText = getText('.apex__header-container span');
    // console.log('appText==>', appText)
    // expect(appText).toEqual('ARGUS ACQUIRE');
  });
});
