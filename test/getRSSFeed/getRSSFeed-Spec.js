import {getRSSFeed} from 'modules/getRSSFeed';

describe("getRSSFeed", () => {

    it('Should return a JSON object', (done) => {

        expect(getRSSFeed('http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml')).toBeTruthy();
        done();
    });

});
