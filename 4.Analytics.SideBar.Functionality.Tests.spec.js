describe('Analytics Sidebar Functionality Tests', function(){

    var proExpect = protractor.ExpectedConditions;
    var openTopic = element.all(by.className('att-topic-name ng-binding')).first();
    var businessUnit = element(by.model('account'));
    var userName = element(by.model('username'));
    var passWord = element(by.model('password'));
    var enterButton = element(by.id('att-auth'));
    var settingsDropdown = element(by.css('[ng-class="{\'menu-open\': sidebar.navExpand === \'settings\'}"]'));
    var templatesDropdown = element(by.css('[ng-class="{\'menu-open\': sidebar.navExpand === \'templates\'}"]'));
    var recordsDropdown = element(by.css('[ng-class="{\'menu-open\': sidebar.navExpand === \'records\'}"]'));
    var contactRoutingDropdown = element(by.css('[ng-class="{\'menu-open\': sidebar.navExpand === ' +
                                         '\'contact routing\'}"]'));

    beforeEach(function() {
        //Logs you into the application and opens a topic before each test
        browser.get('http://doa-aldoc.in.lab:8200/app/#/loginBU');
        browser.driver.manage().window().setSize(1280, 1024);
        //Puts in the current user credentials
        businessUnit.sendKeys(33);
        userName.sendKeys('blorp');
        passWord.sendKeys(33);
        //Clicks Log in button
        enterButton.click();
        //Checks to make sure you are on the topic home page
        browser.wait(proExpect.urlContains('home'),5000);

        //opens the first available topic
        openTopic.click();
        //checks that the URL contains 'topics' after 5 seconds
        browser.wait(proExpect.urlContains('topics'), 5000);
    });

    //----------------------------------SETTINGS DROPDOWN TESTS----------------------------------//

    it('Goes to Settings -> Company Profile', function () {
       //Declares company profile button
        var CPLink = element(by.css('[ui-sref="app.settings.company"]'));
        //Clicks on Settings dropdown then company profile button
        browser.wait(proExpect.elementToBeClickable(settingsDropdown), 10000);
        browser.ignoreSynchronization = true;
        settingsDropdown.click();
        browser.wait(proExpect.elementToBeClickable(CPLink), 10000);
        CPLink.click();
        //Checks that you are on the company profile page
        browser.wait(proExpect.urlContains('companyprofile'), 5000);
    });

    it('Goes to Settings -> Corrections', function () {
        //declares corrections button
        var correctionsLink = element.all(by.css('[ui-sref="app.settings.corrections"]')).first();
        //Clicks on Settings dropdown then corrections button
        browser.wait(proExpect.elementToBeClickable(settingsDropdown), 10000);
        browser.ignoreSynchronization = true;
        settingsDropdown.click();
        browser.wait(proExpect.elementToBeClickable(correctionsLink), 10000);
        correctionsLink.click();
        //Checks that you are on the corrections page
        browser.wait(proExpect.urlContains('corrections'), 5000);
    });

    it('Goes to Settings -> Custom Sentiment', function () {
        //declares custom sentiment button
        var customSentimentLink = element(by.css('[ui-sref="app.settings.custom-sentiment"]'));
        //Clicks on settings dropdown then custom sentiment button
        browser.wait(proExpect.elementToBeClickable(settingsDropdown), 10000);
        browser.ignoreSynchronization = true;
        settingsDropdown.click();
        browser.wait(proExpect.elementToBeClickable(customSentimentLink), 10000);
        customSentimentLink.click();
        //Checks that you are on the custom sentiment page
        browser.wait(proExpect.urlContains('custom-sentiment'), 5000);
    });

    it('Goes to Settings -> Ignored Phrases', function () {
        //declares ignored phrases button
        var ignoredPhrasesLink = element.all(by.css('[ui-sref="app.settings.boilerplate"]')).first();
        //Clicks on settings dropdown then ignored phrases button
        browser.wait(proExpect.elementToBeClickable(settingsDropdown), 10000);
        browser.ignoreSynchronization = true;
        settingsDropdown.click();
        browser.wait(proExpect.elementToBeClickable(ignoredPhrasesLink), 10000);
        ignoredPhrasesLink.click();
        //Checks that you are on Ignored Phrases page
        browser.wait(proExpect.urlContains('boilerplate'), 5000);
    });

    //----------------------------------TEMPLATES DROPDOWN TESTS----------------------------------//

    it('Goes to Templates -> Category Templates', function () {
        //Declares Category Templates button
        var categoryTemplatesLink = element(by.css('[ui-sref="app.settings.categorization"]'));
        //Clicks on Templates dropdown then category templates button
        browser.wait(proExpect.elementToBeClickable(templatesDropdown), 10000);
        browser.ignoreSynchronization = true;
        templatesDropdown.click();
        browser.wait(proExpect.elementToBeClickable(categoryTemplatesLink), 10000);
        categoryTemplatesLink.click();
        //Makes sure you are on Category Templates page
        browser.wait(proExpect.urlContains('categorization'), 5000);
    });

    it('Goes to Templates -> Workspace Templates', function () {
        //Declares Workspace Templates button
        var workspaceTemplatesLink = element(by.css('[ui-sref="app.settings.dashboard"]'));
        //Clicks Templates dropdown then Workspace Templates Button
        browser.wait(proExpect.elementToBeClickable(templatesDropdown), 10000);
        browser.ignoreSynchronization = true;
        templatesDropdown.click();
        browser.wait(proExpect.elementToBeClickable(workspaceTemplatesLink), 10000);
        workspaceTemplatesLink.click();
        //Makes sure you are on the workspace templates page
        browser.wait(proExpect.urlContains('dashboards'), 5000);
    });

    //----------------------------------RECORDS DROPDOWN TESTS----------------------------------//

    it('Goes to Records -> Data Retention', function () {
        //Declares Data Retention Button
        var dataRetentionLink = element(by.css('[ui-sref="app.settings.dataRetention"]'));
        //Clicks Records dropdown then Data Retention button
        browser.wait(proExpect.elementToBeClickable(recordsDropdown), 10000);
        browser.ignoreSynchronization = true;
        recordsDropdown.click();
        browser.wait(proExpect.elementToBeClickable(dataRetentionLink), 10000);
        dataRetentionLink.click();
        //Makes sure you are on the data retention page
        browser.wait(proExpect.urlContains('dataRetention'), 5000);
    });

    it('Goes to Records -> Ingest', function () {
        //Declares Ingest button
        var ingestLink = element(by.css('[ui-sref="app.settings.ingest"]'));
        //Clicks Records dropdown and then Ingest button
        browser.wait(proExpect.elementToBeClickable(recordsDropdown), 10000);
        browser.ignoreSynchronization = true;
        recordsDropdown.click();
        browser.wait(proExpect.elementToBeClickable(ingestLink), 10000);
        ingestLink.click();
        //Makes sure you are on the Ingest page
        browser.wait(proExpect.urlContains('ingest'), 5000);
    });

    //----------------------------------CONTACT ROUTING DROPDOWN TESTS----------------------------------//

    it('Goes to Contact Routing -> Categories', function () {
        //Declares Categories button
        var categoriesLink = element(by.css('[ui-sref="app.contactRouting.categorization"]'));
        //Clicks Contact Routing dropdown and then Categories button
        browser.wait(proExpect.elementToBeClickable(contactRoutingDropdown), 10000);
        browser.ignoreSynchronization = true;
        contactRoutingDropdown.click();
        browser.wait(proExpect.elementToBeClickable(categoriesLink), 10000);
        categoriesLink.click();
        //Makes sure you are on the categories page
        browser.wait(proExpect.urlContains('contact-routing'), 5000);
        browser.wait(proExpect.urlContains('categorization'), 5000);
    });

    it('Goes to Contact Routing -> Routing Profile', function () {
        //Declares Routing Profile button
        var routingProfLink = element(by.css('[ui-sref="app.contactRouting.profile"]'));
        //Clicks Contact Routing dropdown and then Routing Profile button
        browser.wait(proExpect.elementToBeClickable(contactRoutingDropdown), 10000);
        browser.ignoreSynchronization = true;
        contactRoutingDropdown.click();
        browser.wait(proExpect.elementToBeClickable(routingProfLink), 10000);
        routingProfLink.click();
        //Makes sure you are on the routing profile page
        browser.wait(proExpect.urlContains('routingprofile'), 5000);
    });
});