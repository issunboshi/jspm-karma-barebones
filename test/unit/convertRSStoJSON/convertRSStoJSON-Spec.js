import convertRSStoJSON from 'modules/convertRSStoJSON';
import _ from 'lodash';

describe("convertRSStoJSON", () => {

    it('Given valid XML it should return a JSON object', () => {
        expect(
            //Using lodash's equality checker as an equivalent of deepEquals, equals isn't great for comparing objects
            _.isEqual(convertRSStoJSON('<xml><a>It Works!</a></xml>'), '{"xml":[{"a":[{"text":"It Works!"}]}]}')
        )
        .toBeTruthy();

    });

    it('Given invalid XML it should throw an error', () => {

        expect(
            () => {
                convertRSStoJSON('<xml<a>It Works!</a></xml>')
            }
        )
        .toThrowError('Conversion failed, ensure valid XML is being provided');

    });

});
