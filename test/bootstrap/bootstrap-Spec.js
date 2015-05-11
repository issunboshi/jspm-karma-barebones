import {initiateJS, destroyJS, toggleJS} from 'modules/bootstrap';

describe("Bootstrap", function () {

    describe("initiateJS", function () {

        it("should add a class to the html element and return that the class is present", function () {

            expect(initiateJS()).toBeTruthy();

        });

    });

    describe("destroyJS", function () {

        it("should remove the .js class from the html element and return that the class is not present", function () {

            expect(initiateJS()).toBeTruthy();

            expect(destroyJS()).not.toBeTruthy();

        });

    })

    describe("toggleJS", function () {

        it("should add the .js class to the html element when run for the first time and return that the class is not present", function () {

            expect(toggleJS()).toBeTruthy();

        });

        it("should remove the .js class from the html element when run for the second time and return that the class is not present", function () {

            expect(toggleJS()).not.toBeTruthy();

        });

    });

});
