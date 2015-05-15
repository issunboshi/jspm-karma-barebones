import getData from 'modules/getData';

describe("getData", () => {

    beforeEach(() => {
        JasminePromiseMatchers.install();
    });

    afterEach(() => {
        JasminePromiseMatchers.uninstall();
    });

    it('The promise should come back as resolved given a valid resource URL', (done) => {

        expect(getData('http://ws.audioscrobbler.com/2.0/?method=chart.gethypedartists&api_key=f57cd961b1a7c4edad1ea8d270d06ae6&format=json')).toBeResolved(done);

    });

    it('The promise should reject given an invalid resource URL', (done) => {

        expect(getData('/hello.json')).toBeRejected(done);

    });

});
