'use strict';

const Q = require('@nmq/q/client');
const errorhandler = require('../../middleware/500.js');

module.exports = (request, response) => {
  console.log(request.query);
  request.model.post(request.query)
    .then(res => {
      Q.publish('database', 'create', {res});
      response.status(200).send(res);
    })
    .catch(errorhandler);
};