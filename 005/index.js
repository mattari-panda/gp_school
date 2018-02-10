//ポートを設定
const PORT = 8866;

//httpモジュールを読み込む（サーバーを起動できる）
let http = require('http');

//サーバーのインスタンスを生成
let server = http.createServer();

//サーバーのonイベント
server.on('request', (request, response) => {
	//200はリクエストが成功したということ
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//レスポンスは必ずendで閉じる
	response.end(formatDate(new Date()));
});

server.listen(PORT);

console.log('server running!');
console.log('http://localhost:'+PORT);

function formatDate(date, delimiter = '/'){
    let y = date.getFullYear();  // 四桁の年
    let m = date.getMonth() + 1; // 月（０始まり）
    let d = date.getDate();      // 日
    let h = date.getHours();     // 時
    let i = date.getMinutes();   // 分
    let s = date.getSeconds();   // 秒
    return y + delimiter + m + delimiter + d + ' ' + h + ':' + i + ':' + s;
}