exports = module.exports = function(store, keyring) {
  var USERS = {
    '1000': {
      id: '1000',
      username: 'alice',
      displayName: 'Alice Smith'
    },
    '1001': {
      id: '1001',
      username: 'bob',
      displayName: 'Bob Smith'
    }
  }
  
  
  var dir = {};
  
  dir.find = function(username, cb) {
    switch (username) {
    case 'alice':
      return cb(null, USERS['1000']);
    case 'bob':
      return cb(null, USERS['1001']);
    }
  }
  
  return dir;
};

exports['@implements'] = 'http://i.authnomicon.org/directory/UserDirectory';
exports['@singleton'] = true;
exports['@require'] = [
];
