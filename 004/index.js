let fs   = require('fs');
let path = require('path');

let d = new Date();
let f = formatDate(d);

//__dirname 実行中のスクリプトの絶対パス
//出力させたいパスとファイル名を設定
let p = path.join(__dirname, 'out.txt');

fs.writeFile(p, f, (error) => {
	if(error != null){
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