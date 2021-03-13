exports = module.exports = function() {
  
  var authorize = function(req, res) {
    if (!req.user) {
      return res.prompt('login', { maxAttempts: 3 });
    }
    
    res.permit(['profile', 'email'])
  }
  
  
  return authorize;
};

exports['@implements'] = 'http://i.authnomicon.org/oauth2/Listener';
exports['@singleton'] = true;
exports['@require'] = [
];
