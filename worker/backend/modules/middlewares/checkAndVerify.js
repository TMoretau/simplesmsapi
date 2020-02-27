const knex = require('../../config/db').db;
const parsePhoneNumber = require('libphonenumber-js').parsePhoneNumber;
const countries = require('./countries.json');

module.exports = function(req, res, next) {
  
  knex('clients')
    .select('credits')
    .where({ api_key: req.body.apiKey })
    .then(rows => {

      if (rows.length === 0) {
        return res.status(403).send({
          'success': false,
          'error': 'You need to provide a valid api key',
        });
      }
      const currentCredits = rows[0].credits;

      // checking for phone number country
      const phoneCountry = parsePhoneNumber(req.body.phone).country;
      const price = countries[phoneCountry];

      // checking user have enough credit
      if (currentCredits < price) {
        return res.status(402).send({
          'success': false,
          'error': 'Insuficient credit funds on account.',
        });
      } else {
        // updating user's credits
        knex('clients')
          .update({ credits: currentCredits - price })
          .where({ api_key: req.body.apiKey })
          .returning('credits')
          .then((data) => {

            req.remainingCredits = data[0];
            //console.log('data:', data[0]);
            // and inserting in queue
            next();

          })
          .catch((err) => {
            console.log('Error updating user credits :', err);
            return res.status(500).send();
          })
      }
    
    })
    .catch((err) => {
    
      console.log('Error on adding SMS to queue :', err);
      return res.status(500).send();
    
    });
};
