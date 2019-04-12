'use strict';

const Q = require('@nmq/q/client');
const errorhandler = require('../../middleware/500.js');

module.exports = (request, response) => {
  let _id = request.params.id;
  request.model.delete(_id)
    .then( res => {
      Q.publish('database', 'delete', { id:_id});
      response.status(200).send('Deleted.');
    })
    .catch(errorhandler);
};