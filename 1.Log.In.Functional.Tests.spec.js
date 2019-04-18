describe('Log in Functionality Tests', function() {
    var proExpect = protractor.ExpectedConditions;
    var businessUnit = element(by.model('account'));
    var userName = element(by.model('username'));
    var passWord = element(by.model('password'));
    var enterButton = element(by.id('att-auth'));
    var userDropDown = element(by.className('dropdown-toggle ng-binding'));
    var logOutButton = element(by.className('svg-inline--fa fa-sign-out-alt fa-w-16 fa-lg'));

    beforeEach(function() {
        // Makes sure protractor goes to the log in page URL before each test
        browser.get('http://doa-aldoc.in.lab:8200/app/#/loginBU');
        browser.wait(proExpect.urlContains('loginBU'),5000);
    });

    it('Has correct title', function() {
        //checks the title of the log in  page to make sure that it is on Interaction Analytics Pro
        expect(browser.getTitle()).toEqual('Interaction Analytics Pro');
    });

    it('Log in successful', function() {
        //Does a successful log in
        businessUnit.sendKeys(33);
        userName.sendKeys('blorp');
        passWord.sendKeys(33);
        //Clicks Log in button
        enterButton.click();
        //Checks to make sure that you are on the topic home page
        browser.wait(proExpect.urlContains('home'),5000);
    });

    it('Log out successful', function() {
        // Does a successful Log Out
        businessUnit.sendKeys(33);
        userName.sendKeys('blorp');
        passWord.sendKeys(33);
        //Clicks Log in button
        enterButton.click();
        //Checs to make sure you are on topic home page
        browser.wait(proExpect.urlContains('home'),5000);
        //Clicks on the user drop down button
        userDropDown.click();
        //Clicks Log out button
        logOutButton.click();
        //Makes sure you are on the login page
        browser.wait(proExpect.urlContains('loginBU'),5000);
    });
});