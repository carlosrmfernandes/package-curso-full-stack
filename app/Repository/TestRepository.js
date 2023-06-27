const {Test} = require('../Models/Test.js');

class TestRepository{
    
   constructor() {
     
   }
   
     testRepository() {
        let test = new Test();
       return test.test();
    }
}
module.exports.TestRepository = TestRepository;