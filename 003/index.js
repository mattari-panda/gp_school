//nodeのモジュールをインポートする
// fs:File System 
let fs = require('fs');

let d = new Date();
let f = formatDate(d);


// ファイルにフォーマット済み文字列を出力する
// 第一引数　出力するパス, 
// 第二引数　書き込む内容
// 第三引数　処理終了後に呼ばれるコールバック関数
fs.wrieFile('./out.txt', f, (error) => {
	if(error){
		throw error;
	}

	console.log('output success!');
});



function formatDate(date, delimiter = '/'){
    let y = date.getFullYear();  // 四桁の年
    let m = date.getMonth() + 1; // 月（０始まり）
    let d = date.getDate();      // 日
    let h = date.getHours();     // 時
    let i = date.getMinutes();   // 分
    let s = date.getSeconds();   // 秒
    return y + delimiter + m + delimiter + d + ' ' + h + ':' + i + ':' + s;
}