const test = require('./test/index.js');
const permission = require('./permission/index.js');


module.exports = {
  ...test,
  ...permission
}
