const {TestRepository} = require('../Repository/TestRepository.js');

class TestService {

    constructor() {
     
    }
    
     async testService(city){
        let testRepository = new TestRepository();    
        return  await testRepository.testRepository(city);

   }

}
module.exports.TestService = TestService;