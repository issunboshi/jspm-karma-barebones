import toggleClass from 'helpers/toggleClass';

describe("toggleClass", function () {
    var htmlEl = document.querySelectorAll('html')[0];

    it("should remove the .js class from the html element when run for the second time and return that the class is not present", function () {

        expect(toggleClass(htmlEl, 'js')).toBeTruthy();

        expect(toggleClass(htmlEl, 'js')).not.toBeTruthy();

    });

    it("Given an element which doesn't exist it should throw an error", () => {

        expect(
            () => {
                toggleClass(document.querySelectorAll('.hello')[0], 'js')
            }
        )
        .toThrowError('Invalid parameters, expected valid DOM object and class string');

    });

    it("Given too few parameters should throw an error", () => {

        expect(
            () => {
                toggleClass('hello')
            }
        )
        .toThrowError('Invalid parameters, expected valid DOM object and class string');

    });

});
