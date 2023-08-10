const {TestService} = require('../../Service/TestService.js');

class TestController {
    
    constructor() {
     
    }

   async testController(city) {
        let testService = new TestService();
        return await testService.testService(city);
    }

}
module.exports.TestController = TestController;
