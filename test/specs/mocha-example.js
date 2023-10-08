describe.skip('Description of test suite', () => {
    before(() => {
        console.log("run once before the first test in this block");
    });

    after(() => {
        console.log("run once after the last test in this block");
    });

    beforeEach(() => {
        console.log("run before each test in this block");
    });

    afterEach(() => {
        console.log("run after each test in this block");
    });
    it('Individual test 1', () => {
        console.log("Execute code:Individual test 1");
    });

    it('Individual test 2', () => {
        console.log("Execute code:Individual test 2");
    });
});