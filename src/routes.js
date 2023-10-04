const { addNoteHandler,getAllNotesHandler } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  //MENDAPATKAN CATATAN
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
 },
    
];
  
  module.exports = routes;
