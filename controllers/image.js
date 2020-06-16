const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: '2a7601a0f2b7488189316c04b9738561',

});

const handleApiCall = (req, res) => {
  console.log('mahya',req);
  console.log('amir',res);
  console.log('felfel', data);
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {res.json(data);
  })
  .catch(err => console.log('errorrrr', err))
};

const handleImage = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
      res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'))
  }
  module.exports = {
    handleImage,
    handleApiCall
}


