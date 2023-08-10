const configServer = require('./config/app-server.js');
const test = require('./app/routes/api/test.js');

configServer.use(test);

configServer.listen(8025,()=> console.log('servidor rodando'));



