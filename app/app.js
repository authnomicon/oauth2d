exports = module.exports = function(
  authorizeService,
  tokenService,
  loginService,
  passwordLoginService
) {
  var service = require('express')();

  //service.engine('ejs', require('ejs').__express);
  service.set('view engine', 'ejs');

  // FIXME: Remove this and use a component from bixby-express.
  service.use(require('express-session')({ name: 's', secret: 'keyboard cat', resave: false, saveUninitialized: false }));

  service.use(function(req, res, next) {
    console.log('##: ' + req.method + ' '+ req.url);
    console.log(req.session.id);
    console.log(req.session);
    console.log('--\n\n\n');
    next()
  });
  
  // FIXME: If .env doesn't exist, there's an Error: No credential found: undefined
  //        I believe this is due to the session component
  // it is a result if this login service
  service.use('/login', loginService);
  service.use('/login/password', passwordLoginService);

  service.use('/oauth2/authorize', authorizeService);
  service.use('/oauth2/token', tokenService);
    
  return service;
}

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@require'] = [
  'org.authnomicon/oauth2/http/authorize/service',
  'org.authnomicon/oauth2/http/token/service',
  'org.authnomicon/login/http/service',
  'org.authnomicon/login/password/http/service'
];
