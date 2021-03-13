exports = module.exports = function(tokenService) {
  var service = require('express')();

  service.use('/token', tokenService);
    
  return service;
}

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  'org.authnomicon/oauth2/http/token/service'
];
