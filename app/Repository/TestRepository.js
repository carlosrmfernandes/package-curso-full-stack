const { Test } = require('../Models/Test.js');
const axios = require('axios');
const https = require('https')
class TestRepository {

   endPoint = 'https://api.hgbrasil.com/weather';
   citySp = 455827;

   constructor() {

   }

   async testRepository(city) {
      const agent = new https.Agent({
         rejectUnauthorized: false,
      })
      return await axios.get(`${this.endPoint}?woeid=` + city ?? this.citySp,
         {
            httpsAgent: agent,
         })
         .then(function (response) {            
            return response.data;
         })
         .catch(function (error) {            
            return error?.response?.data;
         })

   }


}
module.exports.TestRepository = TestRepository;