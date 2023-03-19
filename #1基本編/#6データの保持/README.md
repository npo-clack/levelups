# データの保持

## カウントアッププログラム

ボタンをクリックするたびに、プラス１されるアプリを HTML と JS を使って実装してほしい。例えば、以下の HTML で id が`countButton`の button をクリックすると`countDisplay`の数字が 1,2,3,4...と増えていってほしい。みんなならどう実現するだろうか？まずはチャレンジしてみてほしい。かんたんのように見せかけて多分苦戦すると思う。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>データの保持</h1>
    <div id="countDisplay">0</div>
    <button id="countButton">カウントアップ</button>
    <button id="resetButton">リセット</button>
    <script src="main.js"></script>
  </body>
</html>
```

## カウントアッププログラムの答え

答えは、同じレポジトリの`main.js`に書いてある。

## HTML、JS におけるデータの保持の考え方

JS のファイルの書き方を以下のようにするとスッキリする。基本的に、変数の寿命は波括弧の始まり`{`から、終わり`}`まで。つまりイベントリスナー内部で変数を定義すると、すると、毎回クリック処理が終わるたびに、死んでしまい、値が保存されない。値を保存するためには、変数を関数の外で定義しないといけない。そこで、ファイルの先頭に定義しておけば、関数が呼ばれるたびにリセットされることなくデータを保持できるし、頭も整理しやすい。

```js
// データ置き場
let count = 0;

// 関数定義
function countUp() {
  // do
}

// イベントリスナー定義
const button = document.getElementById("button");
button.onclick = countUp;
```

これは HTML、JS でアプリを作るためにはとても重要な考え方で、で、これを派生すればいろんなアプリが作れるようになる。
