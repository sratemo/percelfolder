const express = require('express');

const app = express();

const mongoose = require('mongoose');

const URI = 'mongodb://dbmoto:root123@ds125453.mlab.com:25453/dbmoto';
mongoose.connect(URI);
const bodyParser = require('body-parser');
const providerController = require('./Controller/providerController');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.post('/signup', providerController.addProvider);
app.get('/home', providerController.getAllProviders);
app.post('/login', providerController.login);
app.get('/profile/:name', providerController.getProvider);
app.post('/profile/:name', providerController.updateReview);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
