const {TestRepository} = require('../Repository/TestRepository.js');
const axios = require('axios');
const microservices = require('../../config/microservices.js')
class TestService {

    constructor() {
     
    }
    
     async testService(cep){
   
      return await axios.get(`${microservices.via_cep}/${cep}/json/`)      
      .then(function (response) { 
         return response.data;
      })
      .catch(function (error) {                   
         return error?.response?.data;
      })

   }

}
module.exports.TestService = TestService;