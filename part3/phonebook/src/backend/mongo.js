const mongoose = require('mongoose');
const readline = require('readline');

const url = 'mongodb+srv://radhofanazizi:<IXjFpDR6YPYwBwYx>@cluster0.oykkdka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.set('strictQuery', false);

mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String
});

const PhonebookEntry = mongoose.model('PhonebookEntry', phonebookSchema);
