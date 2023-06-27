const {TestService} = require('../../Service/TestService.js');

class TestController {
    
    constructor() {
     
    }

    testController() {
        let testService = new TestService();
        return testService.testService();
    }

}
module.exports.TestController = TestController;
