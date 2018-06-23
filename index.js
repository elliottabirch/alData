

const person = require('./person');
const answer = require('./answer');
const family = require('./family');
const registration = require('./registration');
const season = require('./season');
const session = require('./session');
const sessionOption = require('./sessionOption');
const tuition = require('./tuition');

const functionMap = {
  person,
  answer,
  family,
  registration,
  season,
  session,
  sessionOption,
  tuition,
};

exports.handler = (event, context, cb) => {
  const { queryStringParameters } = event;
  const { functionName } = context;
  functionMap[functionName](queryStringParameters)
    .stopOnError(err => cb(null, { statusCode: '400', body: err.message, headers: { 'Content-Type': 'application/json' } }))
    .toArray(data => cb(null, { statusCode: '200', body: { data }, headers: { 'Content-Type': 'application/json' } }));
};
