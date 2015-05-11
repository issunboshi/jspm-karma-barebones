import {RssReader} from 'modules/rssReader';

describe("RssReader", () => {

    var customReader = new RssReader("http://fastpshb.appspot.com/feed/1/fastpshb");

    it('Should return a JSON object', () => {

        expect(customReader.getFeed()).toBeTruthy();

    });

});
