import AddJobstoPage from 'modules/AddJobstoPage';

describe("AddJobstoPage", () => {

    var jobListGenerator;

    beforeEach(() => {

        JasminePromiseMatchers.install();

        setFixtures(sandbox({class: 'js-job_listing', id: 'jobListing'}));

        jobListGenerator = new AddJobstoPage('.js-job_listing', [{"id": "1", "title": "Job number 1", "class": "job_listing__item"}, {"id": "2", "title": "Job number 2", "class": "job_listing__item"}]);

    });

    afterEach(() => {

        JasminePromiseMatchers.uninstall();

    });

    describe("AddToDom", () => {

        it('Given a CSS selector and an array containing nodes to be appended, the target node should have that number of child nodes', (done) => {

            jobListGenerator.getTargetEl().clearChildren().createChildren().addChildrenToDom();

            expect($j('js-job_listing > .job_listing__item').length).toEqual(2);

            done();

        });

    });

});
