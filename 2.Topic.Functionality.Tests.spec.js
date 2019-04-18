describe('Topic Functionality Tests', function() {
    var businessUnit = element(by.model('account'));
    var userName = element(by.model('username'));
    var passWord = element(by.model('password'));
    var enterButton = element(by.id('att-auth'));
    var openTopic = element.all(by.className('att-topic-name ng-binding')).first();
    var openSecondTopic = element.all(by.className('att-topic-name ng-binding')).last();
    var proExpect = protractor.ExpectedConditions;



    beforeEach(function() {
        //Logs you into the application before starting the tests
        browser.get('http://doa-aldoc.in.lab:8200/app/#/loginBU');
        browser.wait(proExpect.urlContains('loginBU'),5000);
        browser.driver.manage().window().setSize(1280, 1024);

        businessUnit.sendKeys(33);
        userName.sendKeys('blorp');
        passWord.sendKeys(33);

        enterButton.click();

        browser.wait(proExpect.urlContains('home'),5000);
    });

    it('Opens Topic Successfully', function() {
        //opens the first available topic
        openTopic.click();
        //checks that you are on a topic page
        browser.wait(proExpect.urlContains('topics'), 5000);
    });

    it('Closes Topic Successfully', function(){
        //opens the first available topic
        openTopic.click();

        //checks that you are on a topic page
        browser.wait(proExpect.urlContains('topics'), 5000);

        //Clicks the Close Topic Button and makes sure you are returned to the topic home page
        var closeTopic = element(by.css('[ng-click="removeTopic(currentTopic.id)"]'));
        browser.wait(proExpect.elementToBeClickable(closeTopic), 10000);
        browser.ignoreSynchronization = true;
        closeTopic.click();
        browser.wait(proExpect.urlContains('home'), 5000);
    });

    it('Opens Multiple Topics', function () {
        //opens the first available topic
        openTopic.click();
        //checks that the URL contains 'topics' after 5 seconds
        browser.wait(proExpect.urlContains('topics'), 5000);

        //'My Topics' button is clicked
        var topicHomePage = element.all(by.css('[ui-sref="app.home"]')).first();
        browser.wait(proExpect.elementToBeClickable(topicHomePage));
        browser.ignoreSynchronization = true;
        topicHomePage.click();

        //Checks to make sure you are on the topic home page
        browser.wait(proExpect.urlContains('home'), 5000);

        //opens second topic and makes sure the first topic's tab is present
        openSecondTopic.click();
        browser.wait(proExpect.urlContains('topics'), 5000);
        expect(element(by.css('[ng-class="{selected:topic.id===currentTopic.id}"]')).isPresent()).toBe(true);
    });
});