import google from 'vendor/google-jsapi';

class RssReader {

    constructor(feed) {
        this.feed = feed;
    }

    setUpFeeds () {
        return true;
    }

    getFeed() {
        google.feeds = this.setUpFeeds();
        return console.log(google.feeds);
        // return feed = new google.feeds.Feed(this.feed);
    }
}

export {RssReader};
