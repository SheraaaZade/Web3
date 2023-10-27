require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const Note = require('./models/note')

app.use(express.json())

const mongodbUri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})

// const Note = mongoose.model('Note', noteSchema)

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  }).catch(error => {
    console.error('Error fetching notes:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  });
});

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})

app.post('/api/notes', (request, response) => {
  const body = request.body;

  if (!body.content || body.content.trim() === '') {
    return response.status(400).json({ error: 'Content is required' });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note.save().then(savedNote => {
    response.json(savedNote);
  }).catch(error => {
    console.error('Error saving note:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})