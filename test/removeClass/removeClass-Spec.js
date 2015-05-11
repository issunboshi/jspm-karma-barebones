import {removeClass} from 'helpers/removeClass';

describe("removeClass", function () {
    var htmlEl = document.querySelectorAll('html')[0];

    it("should remove a class from the html element and return that the class is not present", function () {

        expect(removeClass(htmlEl, 'js')).not.toBeTruthy();

    });

});
