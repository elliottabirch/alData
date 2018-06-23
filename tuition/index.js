const hl = require('highland');

const { streamData } = require('../util');
const { endPoints: { product: { tuition } } } = require('../constants');


module.exports = ({ sessionIds }) => {
  if (!sessionIds) return hl.fromError(new Error('SessionIds is required'));
  return streamData({ sessionIds }, tuition);
};
