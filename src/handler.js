/* eslint-disable linebreak-style */
const nanoid = require('nanoid');
const notes = require('./notes');

const addHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createAt = new Date().toISOString();
  const updateAt = createAt;

  const newNote = {
    title, tags, body, id, createAt, updateAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(404);
  return response;
};

//mendapatkan catatan
const getAllNotesHandler = ()=>({
  status : 'berhasil',
  data: {
    notes,
  },
});

module.exports = { addHandler };
