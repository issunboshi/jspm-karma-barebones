import {destroyJS} from 'modules/bootstrap';

describe("Bootstrap", function() {
    describe("destroyJS", function () {
        it("should remove the .js class from the html element and return that the class is not present", function() {
            expect(destroyJS()).toBe(false);
        });
    })
});