const {TestRepository} = require('../Repository/TestRepository.js');

class TestService {

    constructor() {
     
    }
    
    testService(){
        let testRepository = new TestRepository();
        return testRepository.testRepository();

   }

}
module.exports.TestService = TestService;