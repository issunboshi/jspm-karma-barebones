import {addClass} from 'helpers/addClass';

describe("addClass", () => {
    var htmlEl = document.querySelectorAll('html')[0];

    it("should add a class to the html element and return that the class is present", () => {

        expect(addClass(htmlEl, 'js')).toBeTruthy();

    });

});
