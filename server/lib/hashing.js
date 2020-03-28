const bcrypt = require('bcryptjs');
const salt = 10;

const hashPassword = string => (string !== '' ? bcrypt.hashSync(string, salt) : '');
const checkPassword = bcrypt.compareSync;

module.exports = { hashPassword, checkPassword };