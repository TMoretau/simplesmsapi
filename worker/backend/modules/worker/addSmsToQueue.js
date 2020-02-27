const knex = require('../../config/db').db;

module.exports = function(req, res) {

  if (req.body.message === null || req.body.phone === null ||
    req.body.message === '' || req.body.phone === '' ||
    req.body.message === undefined || req.body.phone === undefined) {
    return res.status(403).send({
      success: 'false',
      error: 'missing required body parameter(s)',
    });
  }
  
  knex('queue')
    .returning('id')
    .insert({content: req.body.message, phone: req.body.phone, status: 'IN_QUEUE'})
    .then((data) => {
      
      return res.status(200).send({
        'success': true,
        'id': data[0],
        'remainingCredits': req.remainingCredits
      });
    
    })
    .catch((err) => {
    
      console.log('Error on adding SMS to queue :', err);
      return res.status(500).send();
    
    });
};
