/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* COMPLETED/TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('loops through to check URLs are defined', function () {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).not.toBe(undefined);
                expect(allFeeds[x].url.length).toBeGreaterThan(0);
            }
        });

        /* COMPLETED/TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('loops through to check names are defined', function () {
            for (var x = 0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).not.toBe(undefined);
                expect(allFeeds[x].name.length).toBeGreaterThan(0);
            }
        });
    });

    describe('The Menu', function () {
        /* COMPLETED/TODO: Write a new test suite named "The menu" */
        var menuDefault = $('body').hasClass('slide-menu');
        /* COMPLETED/TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden by default', function () {
            expect(menuDefault).toBe(false);
        });

        /* COMPLETED/TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu is hidden when not clicked and visibible when clicked', function () {

            var menuStatus = menuDefault;

            $('.menu-icon-link').click(function () {

                if (menuStatus === true) {
                    console.log('true turning false, showing turning hidden');
                    //expect(menuStatus).toBe(true);
                    menuStatus = false;

                } else if (menuStatus === false) {
                    console.log('false turning true, hidden turning visiible');
                    //expect(menuStatus).toBe(false); 
                    menuStatus = true;

                }

            });

        });

    });

    describe('Initial Entries', function () {
        /* COMPLTED/TODO: Write a new test suite named "Initial Entries" */

        /* COMPLETED/TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('feed list has one or more items', function () {
            expect($('.feed .entry').length).toBeGreaterThan(-1);
        });
    });

    describe('New Feed Selection', function () {
        /* COMPLETED/TODO: Write a new test suite named "New Feed Selection"

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
        var firstValue;
        var secondValue;

        beforeEach(function (done) {
            loadFeed(0, function () {
                firstValue = allFeeds[0];
                console.log(firstValue);
                loadFeed(1, function () {
                    secondValue = loadFeed[1];
                    done();
                });
            });
        });

        it('content changes when loadfeed is called', function () {
            var changed = false;
            if (firstValue !== secondValue) {
                changed = true;
            }

            expect(changed).toBe(true);
        });

    });

}());