'use strict';

const Q = require('@nmq/q/client');
const errorhandler = require('../../middleware/500.js');

module.exports = (request, response) => {
  request.model.put(request.params.id, request.query)
    .then(res => {
      Q.publish('database', 'update', res);
      response.status(200).send(res);
    })
    .catch(errorhandler);
};