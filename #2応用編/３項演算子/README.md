# ３項演算子

条件に応じて代入するものを変えるときに使う。if 文を使うよりもスッキリしてかける。
これは、多分実際に例をみたほうが早い。

次のように、ログインしているユーザーに対して「ちゃんなかさんこんにちは！」というテキストを表示したいとする。しかし、ユーザー名はログインしていないとわからないため、その場合は「ゲストさんこんにちは！」と表示したい。以下のコードは、それをイメージしてサンプルとして作成した。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input id="userNameInput" />
    <div><span id="userNameDisplay"></span>さんこんにちは！</div>
    <script src="main.js"></script>
  </body>
</html>
```

```js
/* ----- データ ------*/
let userName = null;

/* ----- DOM ------*/
const userNameInput = document.getElementById("userNameInput");
const userNameDisplay = document.getElementById("userNameDisplay");

/* ----- 関数 ------*/
function showUserName() {
  // userNameがnullならゲストという名前にしたい
  userNameDisplay.innerText = userName;
}

console.log(userNameInput);
/*--- イベントリスナー ---- */
userNameInput.onchange = function (event) {
  userName = event.target.value;
  showUserName();
};

/*--- 初期化処理 ---- */
showUserName();
```

このコードは、ユーザー名を入れていなければ「さんこんにちは！」と名前の部分は何も表示されない。そこで`userName` が`null` であればゲストというユーザー名を表示することにした。`showUserName`を書き換えて、以下のようにする。

```js
function showUserName() {
  // userNameがnullならゲストという名前にしたい
  if (userName !== null) {
    userNameDisplay.innerText = userName;
  } else {
    userNameDisplay.innerText = "ゲスト";
  }
}
```

これを３項演算子を使うと次のように書ける。

```js
function showUserName() {
  // userNameがnullならゲストという名前にしたい
  userNameDisplay.innerText = userName !== null ? userName : "ゲスト";
}
```

代入の右側で、?の左が条件を表し、?の右が条件の true、false に応じて代入されるものを表す。:の左が true の場合で、:の右が false の場合に対応する。今回だと、userName が null でなければ　そのまま代入し null であれば　ゲストを代入している。
