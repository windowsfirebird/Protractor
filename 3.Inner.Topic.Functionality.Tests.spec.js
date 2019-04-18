//INFO: These tests are made to prevent repetition for the topic functionality tests
describe('Inner Topic Functionality Tests', function(){
    var proExpect = protractor.ExpectedConditions;
    var openTopic = element.all(by.className('att-topic-name ng-binding')).first();
    var businessUnit = element(by.model('account'));
    var userName = element(by.model('username'));
    var passWord = element(by.model('password'));
    var enterButton = element(by.id('att-auth'));

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

    it('Opens Filter Drawer Successfully', function () {
        //Finds the filter drawer button and clicks it
        var openFilters = element.all(by.css('[ng-click="toggleFilters()"]')).first();
        browser.wait(proExpect.elementToBeClickable(openFilters), 10000);
        browser.ignoreSynchronization = true;
        openFilters.click();
        //Makes sure that the 'Filters' title is present which confirms that the filter drawer was opened
        expect(element(by.className('att-filter-panel-title')).isPresent()).toBe(true);
    });

    it('Opens Topic Definition Link Successfully', function(){
        //Finds the Topic Definition Link and clicks on it
        var openTopicDefinition = element.all(by.className('att-topic-definition-link')).first();
        browser.wait(proExpect.elementToBeClickable(openTopicDefinition), 10000);
        browser.ignoreSynchronization = true;
        openTopicDefinition.click();
        //Makes sure that the definition section is present, confirming that the link was opened
        expect(element(by.className('att-definition-section ng-scope')).isPresent()).toBe(true);
    });

    it('Opens Dashboard Drawer Successfully', function(){
        //Finds the dashboard list button and clicks it
        var openDashboardList = element(by.className('att-dashboardLabel__title ng-binding dropdown-toggle'));
        browser.wait(proExpect.elementToBeClickable(openDashboardList), 10000);
        browser.ignoreSynchronization = true;
        openDashboardList.click();
        //Checks to make sure the 'New Workspace' button is present, confirming the list opened
        expect(element(by.css('[ng-click="confirmAddDashboard()"]')).isPresent()).toBe(true);
    });
});


