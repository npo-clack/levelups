# Switch 文

if 文の代わりに使う。使う場面としては、ある値が複数の状態になるとき、状態に応じて処理を変える場面。これも実際に例を見るほうが早い。敵を倒すゲームで、モードに応じて攻撃力が変わるとする。`attack`関数で実際に switch を使って処理を分岐させている。if 文を使うこともできる。

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
    <div>敵のHP</div>
    <div id="enemyHpDisplay">0</div>
    <select id="modeSelection">
      <option value="standard" selected>通常攻撃</option>
      <option value="magic">魔法攻撃</option>
      <option value="guard">防御</option>
    </select>
    <button id="actionButton">アクション実行</button>
    <script src="main.js"></script>
  </body>
</html>
```

```js
/*--- データ --- */
let mode = "standard"; // standard or magic or guard;
let currentHp = 100;

/*--- DOM --- */
const enemyHpDisplay = document.getElementById("enemyHpDisplay");
const actionButton = document.getElementById("actionButton");
const modeSelection = document.getElementById("modeSelection");

/*---関数 --- */
function showCurrentHp() {
  enemyHpDisplay.innerText = currentHp;
}

function attack() {
  switch (mode) {
    case "standard":
      currentHp -= 10;
      break;
    case "magic":
      currentHp -= Math.floor(Math.random() * 20) + 1; // 1 ~ 20でランダム
      break;
    case "guard":
      // 何もしない
      break;
    default:
    // modeが上記以外だった場合
    // 何もしない
  }

  showCurrentHp();
}

/*--- イベントリスナー --- */
modeSelection.onchange = function (event) {
  console.log(event);
  mode = event.target.value;
};

actionButton.onclick = attack;

/*--- 初期化処理 --- */
showCurrentHp();
```

より詳しい switch 文の使い方はこちら

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/switch
https://www.javadrive.jp/javascript/if/index4.html
