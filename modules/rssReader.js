import google from 'vendor/google-jsapi';

class RssReader {

    constructor(feed) {
        this.feed = feed;
    }

    setUpFeeds () {
        return google.load("feeds", "1");
    }

    getFeed() {
        google.feeds = this.setUpFeeds();
        return console.log(google.feeds);
        // return feed = new google.feeds.Feed(this.feed);
    }
}

export {RssReader};
