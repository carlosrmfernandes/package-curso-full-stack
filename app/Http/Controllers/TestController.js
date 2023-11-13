const {TestService} = require('../../Service/TestService.js');

class TestController {
    
    constructor() {
     
    }

   async testController(cep) {
        let testService = new TestService();
        return await testService.testService(cep);
    }

}
module.exports.TestController = TestController;
