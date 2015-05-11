import {toggleJS} from 'modules/bootstrap';

describe("Bootstrap", function() {
    describe("toggleJS", function () {
        it("should add the .js class to the html element when run for the first time and return that the class is not present", function() {
            expect(toggleJS()).toBe(true);
        });

        it("should remove the .js class from the html element when run for the second time and return that the class is not present", function() {
            expect(toggleJS()).toBe(false);
        });
    })
});