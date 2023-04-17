const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 let arr=email.split("@")
 let str=[...arr[arr.length-1]]
 str =str.join('');
 return str
}

module.exports = {
  getEmailDomain
};
