const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj= {};

	for (let key of domains) {
		let arr = key.split('.').reverse();
		arr.forEach((el, index) => {
			let i = `.${arr.slice(0, index + 1).join('.')}`;
			obj[i] ? obj[i]++ : obj[i] = 1;
		});
	}
	return obj;

}

module.exports = {
  getDNSStats
};
