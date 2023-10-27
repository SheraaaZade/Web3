const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())

const password = process.argv[2]

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url =
`mongodb+srv://chehrazadouazzani:${password}@helloworld.atoynja.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
  date: {
    type: Date,
    default: Date.now
  }
})

const Note = mongoose.model('Note', noteSchema)

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes);
  }).catch(error => {
    console.error('Error fetching notes:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  });
});

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


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})