function getRSSFeed(feedUrl) {

    var request = new XMLHttpRequest();

    request.open('GET', '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=' + encodeURIComponent(feedUrl), true);

    request.onload = () => {
        console.log("It's alive!");
        if (request.status >= 200 && request.status < 400) {
            // Success!
            return resp = request.responseText;
        } else {
            return false;
        }
    };

    request.onerror = () => {
        console.log("It's alive!");
        return 'connection error';
    };

    return request.send();
}
export {getRSSFeed};
