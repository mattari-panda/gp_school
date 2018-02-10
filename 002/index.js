let d = new Date();

console.log(formatDate(d));

/**
* Date型のデータをフォーマットして返す
* @param  {Date} date - フォーマットするDate型のデータ
* @param  {string} [delimiter='/'] - 年月日の区切り文字
* @return {string} 整形済みの文字列
*/

function formatDate(date, delimiter = '/'){
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	let h = date.getHours();
	let i = date.getMinutes();
	let s = date.getSeconds();
	return y + delimiter + m + delimiter + d + ' ' + h + ':' + i + ':' + s;
}