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
 //melakukan perubahan berdasarkan id
 {
  method: 'PUT',
  path: '/notes/{id}',
  handler: editNoteByIdHandler,
  },
    
];
  
  module.exports = routes;
