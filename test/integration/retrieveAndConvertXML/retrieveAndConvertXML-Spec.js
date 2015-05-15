import retrieveAndConvertXML from 'modules/retrieveAndConvertXML';

describe("retrieveAndConvertXML", () => {

    beforeEach(() => {
        JasminePromiseMatchers.install();
    });

    afterEach(() => {
        JasminePromiseMatchers.uninstall();
    });

    it('Given a valid URL containing valid XML it should return a resolved promise', (done) => {

        expect(retrieveAndConvertXML('http://ws.audioscrobbler.com/2.0/?method=chart.gethypedartists&api_key=f57cd961b1a7c4edad1ea8d270d06ae6'))
        .toBeResolved(done)

    });

    it('Given an invalid URL containing valid XML it should return a rejected promise', (done) => {

        expect(retrieveAndConvertXML('http://ws.audioscrobbler.com/2.0/?method=chart.gethypedartists'))
        .toBeRejected(done)

    });

});
