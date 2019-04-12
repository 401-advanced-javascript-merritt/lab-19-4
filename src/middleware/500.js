'use strict';
const Q = require('@nmq/q/client');

/**
 * If the server runs into an error, throw a 500 status.
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{console.log('ServerError'
 * @param  {} err
 * @param  {};res.status(500} ;leterror={error
 */
module.exports = (err, req, res, next) => {
  console.log('Server Error', err);
  let error = { error: err.message || err };
  Q.publish('database', 'error', {error});
  res.status(500).json(error);
};
