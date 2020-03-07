import { browser, by, element, protractor } from 'protractor';
module.exports.getText = function (selector) {
    var element = element(by.css(selector));
    return element.getText();
}
