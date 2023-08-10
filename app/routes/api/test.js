const {TestController} = require('../../Http/Controllers/TestController');
const configRoute = require('../../../config/app-route.js');
const TestTypeScript = require('../../Http/Controllers/TestTypeScript.ts');

configRoute.get('/weather/:city*?', async (req, res)=>{
    
    let testController = new TestController();
    
    res.send(await testController.testController(req.params.city));
});

configRoute.get('/api-ts', (req, res)=>{
    
    let testTypeScript = new TestTypeScript();
    res.send(testTypeScript.test());
})

module.exports = configRoute;