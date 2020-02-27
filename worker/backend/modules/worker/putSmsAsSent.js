const knex = require('../../config/db').db;

module.exports = function(req, res) {
  knex
    .raw("UPDATE queue SET status = 'DELIVERED' WHERE id = '"+req.params.id+"' ")
    .then(() => {

      console.log(req.params);
      return res.status(200).send();

    })
    .catch((err) => {

      console.log();
      return res.status(500).send();

    });
};
