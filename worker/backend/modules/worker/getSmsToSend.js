const knex = require('../../config/db').db;

module.exports = function(req, res) {

  function returnOrError(err) {
    console.log(err);
    return res.status(500);
  };

  knex
    .raw("SELECT * FROM queue WHERE status = 'IN_QUEUE' ORDER BY created_at LIMIT 1;")
    .then((resp) => {

      if (resp.rowCount === 0) {
        return res.status(204).send();
      }

      let data = resp.rows[0];

      knex('queue')
        .where({ id: data['id'] })
        .update({ status: 'RECEIVED_BY_WORKER' })
        .then(() => {

          return res.status(200).send({
            "phone": data.phone,
            "message": data.content,
            "id": data.id,
          });

        })
        .catch((err) => {
          return returnOrError();
        });

    })
    .catch((err) => {

      return returnOrError();

    });
};
