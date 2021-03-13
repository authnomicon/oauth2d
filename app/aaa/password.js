exports = module.exports = function(store, keyring) {
  var svc = {};
  
  
  svc.verify = function(username, password, cb) {
    process.nextTick(function() {
      return cb(null, true);
    });
  }
  
  
  return svc;
};

exports['@implements'] = 'http://i.authnomicon.org/credentials/PasswordService';
exports['@singleton'] = true;
exports['@require'] = [
];
