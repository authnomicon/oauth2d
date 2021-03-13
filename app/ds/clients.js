exports = module.exports = function() {
  var dir = {};
  
  dir.read = function(id, cb) {
    switch (id) {
    case 's6BhdRkqt3':
      return cb(null, {
        id: 's6BhdRkqt3',
        name: 'My Example Client',
        redirectURIs: [ 'http://localhost:8080/callback' ]
      });
    }
  }
  
  
  return dir;
};

exports['@implements'] = 'http://i.authnomicon.org/oauth2/ClientDirectory';
exports['@singleton'] = true;
exports['@require'] = [
];
