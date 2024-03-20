// const express = require('express');
// const morgan = require('morgan');
// const app = express();
// const cors = require('cors')

// app.use(cors())
// app.use(express.json());
// app.use(morgan((tokens, req, res) => {
//     return [
//         tokens.method(req, res),
//         tokens.url(req, res),
//         tokens.status(req, res),
//         tokens.res(req, res, 'content-length'), '-',
//         tokens['response-time'](req, res), 'ms',
//         JSON.stringify(req.body) 
//     ].join(' ');
// }));

// let data = [
//     { 
//         "id": 1,
//         "name": "Arto Hellas", 
//         "number": "040-123456"
//     },
//     { 
//         "id": 2,
//         "name": "Ada Lovelace", 
//         "number": "39-44-5323523"
//     },
//     { 
//         "id": 3,
//         "name": "Dan Abramov", 
//         "number": "12-43-234345"
//     },
//     {  
//         "id": 4,
//         "name": "Mary Poppendieck", 
//         "number": "39-23-6423122"
//     }
// ];

// //////////////////////////////////////////////////
// app.get('/', (request, response) => {
//     response.send('<h1>Hello World!</h1>');
// });

// //////////////////////////////////////////////////
// app.get('/persons', (request, response) => {
//     response.json(data);
// });

// //////////////////////////////////////////////////
// app.post('/persons', (request, response) => {
//     const body = request.body;

//     if (!body.name || !body.number) {
//         return response.status(400).json({ error: 'Name or number is missing' });
//     }

//     const newPerson = {
//         id: generateId(),
//         name: body.name,
//         number: body.number
//     };

//     data = data.concat(newPerson);
//     response.json(newPerson);
// });

// //////////////////////////////////////////////////
// const generateId = () => {
//     const maxId = data.length > 0 ? Math.max(...data.map(person => person.id)) : 0;
//     return maxId + 1;
// };

// //////////////////////////////////////////////////
// app.get('/info', (request, response) => {
//     const totalPeople = data.length;
//     const currentTime = new Date().toString();
//     response.send(`Total people: ${totalPeople}<br>Current time: ${currentTime}`);
// });

// //////////////////////////////////////////////////
// app.get('/persons/:id', (request, response) => {
//     const id = parseInt(request.params.id);
//     const person = data.find(entry => entry.id === id);
//     if (person) {
//         response.json(person);
//     } else {
//         response.status(404).json({ error: "Person not found" });
//     }
// });

// //////////////////////////////////////////////////
// app.post('/addPerson', (request, response) => { 
//     const body = request.body;

//     if (!body.name || !body.number) {
//         return response.status(400).json({ error: 'Name or number is missing' });
//     }

//     const newPerson = {
//         id: generateId(),
//         name: body.name,
//         number: body.number
//     };

//     data = data.concat(newPerson);
//     response.json(newPerson);
// });

// //////////////////////////////////////////////////
// app.delete('/deletePerson/:id', (request, response) => {
//     const id = parseInt(request.params.id);
//     const index = data.findIndex(entry => entry.id === id);
//     if (index !== -1) {
//         data.splice(index, 1);
//         response.status(204).end(); 
//     } else {
//         response.status(404).json({ error: "Person not found" });
//     }
// });

// //////////////////////////////////////////////////
// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })


const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://radhofanazizi:<IXjFpDR6YPYwBwYx>@cluster0.oykkdka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB database');
});

// Define schema
const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String
});

// Define model
const PhonebookEntry = mongoose.model('PhonebookEntry', phonebookSchema);

// GET all phonebook entries
app.get('/persons', async (req, res) => {
  try {
    const data = await PhonebookEntry.find({});
    res.json(data);
  } catch (error) {
    console.error('Error fetching phonebook entries:', error);
    res.status(500).json({ error: 'Failed to fetch phonebook entries' });
  }
});

// POST a new phonebook entry
app.post('/persons', async (req, res) => {
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'Name or number is missing' });
  }

  try {
    const newPerson = await PhonebookEntry.create({
      name: body.name,
      number: body.number
    });
    res.status(201).json(newPerson);
  } catch (error) {
    console.error('Error creating phonebook entry:', error);
    res.status(500).json({ error: 'Failed to create phonebook entry' });
  }
});

// DELETE a phonebook entry by ID
app.delete('/persons/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedEntry = await PhonebookEntry.findByIdAndDelete(id);
    if (deletedEntry) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Phonebook entry not found' });
    }
  } catch (error) {
    console.error('Error deleting phonebook entry:', error);
    res.status(500).json({ error: 'Failed to delete phonebook entry' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

