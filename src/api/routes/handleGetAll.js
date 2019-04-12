'use strict';

const Q = require('@nmq/q/client');
const errorHandler = require('../../middleware/500.js');

module.exports = (request, response) => {
  console.log('inside get all function.');
  request.model.get()
    .then(results => {
      Q.publish('database', 'read', results);
      response.status(200).send(results);
    })
    .catch(errorHandler);
};
