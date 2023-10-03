const { addHandler } = require('./handler')
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addHandler,
  },
    
];
  
  module.exports = routes;