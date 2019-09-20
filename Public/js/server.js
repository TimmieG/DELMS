server.use(jsonServer.rewriter({
    '/api/requests': '/request'
  }));
  var db = require('./db.json');
