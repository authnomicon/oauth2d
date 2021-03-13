exports = module.exports = function(
  authorizeService,
  tokenService
) {
  var service = require('express')();

  service.use('/authorize', authorizeService);
  service.use('/token', tokenService);
    
  return service;
}

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  'org.authnomicon/oauth2/http/authorize/service',
  'org.authnomicon/oauth2/http/token/service'
];
