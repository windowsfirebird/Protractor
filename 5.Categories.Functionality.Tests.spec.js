describe('Categories Functionality Tests', function(){
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

    it('Goes to Edit Categories', function(){
        //Clicks on Edit Categories button from the Topic page
        var editCategoriesButton = element.all(by.className("edit btn btn-default")).first();
        browser.wait(proExpect.elementToBeClickable(editCategoriesButton), 10000);
        browser.ignoreSynchronization = true;
        editCategoriesButton.click();
        //Makes sure you are on the categories page
        browser.wait(proExpect.urlContains('category'),5000);
    });

    it('Creates a Category Node NO RESAMPLING', function() {
        //Clicks on Edit Categories button from the Topic page
        var editCategoriesButton = element.all(by.className("edit btn btn-default")).first();
        browser.wait(proExpect.elementToBeClickable(editCategoriesButton), 10000);
        browser.ignoreSynchronization = true;
        editCategoriesButton.click();
        //Makes sure you are on the categories page
        browser.wait(proExpect.urlContains('category'),5000);

        //Clicks Edit Categories from the category page to edit
        var editCategoriesMode = element(by.css('[ng-click="updateEditMode()"]'));
        browser.wait(proExpect.elementToBeClickable(editCategoriesMode), 10000);
        editCategoriesMode.click();

        //Clicks the "Categories" mega group to select it
        var categoriesGroup = element(by.className('att-cat-label-div ng-scope'));
        browser.wait(proExpect.elementToBeClickable(categoriesGroup), 10000);
        categoriesGroup.click();

        //Clicks the "New" dropdown
        var newButton = element(by.className('btn-group ng-scope dropdown'));
        browser.wait(proExpect.elementToBeClickable(newButton), 10000);
        newButton.click();

        //Clicks the new "Category" button
        var newCategoryNodeButton = element.all(by.css('[ng-class="{\'disabled\':focusIdDepth==10 || !focusIdIsGroup}"]')).first();
        browser.wait(proExpect.elementToBeClickable(newCategoryNodeButton), 10000);
        newCategoryNodeButton.click();

        //Gives the new category node the name "ProtractorTest"
        var newName = element(by.model('popoverNewNode.newNode.title'));
        newName.sendKeys('ProtractorTest');
        var confirmButton = element(by.buttonText('OK'));
        browser.wait(proExpect.elementToBeClickable(confirmButton), 10000);
        confirmButton.click();
        //Checks to make sure the category was saved
        expect(element(by.css('[value="ProtractorTest"]')).isPresent()).toBe(true);
    });
});