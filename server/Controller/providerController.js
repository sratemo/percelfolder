const Provider = require('../Models/providerModel');

module.exports = {
  getAllProviders: (req, res) => {
    Provider.find({}, (err, providers) => {
      if (err) {
        res.status(500).send(err);
      }
      res.set('content-type', 'application/json');
      res.send(providers);
    });
  },
  addProvider: (req, res) => {
    const provider = new Provider({
      businessName: req.body.businessName,
      description: req.body.description,
      email: req.body.email,
      address: req.body.address,
      userName: req.body.userName,
      password: req.body.password,
      reviews: req.body.reviews,

    });
    provider.save((err, provider) => {
      if (err) {
        res.status(500).send(err);
      }
      res.send(provider);
    });
  },
  login: (req, res) => {
    Provider.findOne({ userName: req.body.userName, password: req.body.password }, (err, provider) => {
      if (err || provider === null) {
        return res.status(400).json(err);
      } 
      res.send(true);
    });
  },
  getProvider: (req, res) => {
    
    Provider.findOne({ businessName: req.params.name}, (err, business) => {
      if (err || business === null) {
        return res.status(400).json(err);
      } 
      res.send(business);
    });
  },
  updateReview: (req, res) => {
    const businessName = req.params.name;

    Provider.findOneAndUpdate({businessName}, {$push: {reviews: req.body.review}})
    .then(data => console.log('update successful'))
    .catch((err) => {
      res.sendStatus(404);
    })
    
  }
};
