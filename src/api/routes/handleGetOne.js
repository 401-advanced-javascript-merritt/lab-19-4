'use strict';
const errorhandler = require('../../middleware/500.js');
const Q = require('@nmq/q/client');


module.exports = (request, response) => {
  let id = [request.params.id];
  request.model.get(id)
    .then(res => {
      Q.publish('database', 'read', {id});
      response.status(200).send(res);
    })
    .catch(errorhandler);
};