const countDisplay = document.getElementById("countDisplay");
const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");

// 関数の外で変数を定義することで、変数の寿命が伸びる。
// なぜなら、関数の中で定義された変数は関数ブロック(波括弧{}の中の範囲)が終われば捨てられるから
// このcountのように一番外で定義すれば　寿命はブラウザが閉じられるまで延長される。
// この仕組をうまく使えば、ブラウザ内部で一時的にデータを保管するのに使える。(ブラウザを閉じたら消えるが)
// データをブラウザがとじても消えないようにするにはLocalStorageを使ったり、もしくはサーバーサイドを実装してDBとつなげる。
// データをファイルとして出力する方法もあるが、ブラウザはセキュリティの問題上PC上のファイルを扱うのは得意ではない。
let count = 0;

countButton.onclick = function () {
  count++;
  countDisplay.innerText = count;
};

resetButton.onclick = function () {
  count = 0;
  countDisplay.innerText = count;
};
