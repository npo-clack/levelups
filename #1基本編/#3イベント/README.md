# イベント操作

ブラウザはつねに、ブラウザに対するユーザーの挙動(マウスの動きや、キーボード操作など)を監視している。そしてそれらがなにかしら変化したらイベントを発火する。
それぞれのイベントには名前がついている。例えば、マウスの動きだけでもクリックイベントや、マウスムーブイベントなどがある。僕らは、それらイベントが発火されたときに、実行される命令を定義できる。これをイベントリスナーと呼ぶ。

たとえば、ブラウザでコンソールを開き、次のコードを貼り付けてみよう。

```js
window.onclick = function () {
  alert("Hi!");
};
```

すると、画面をクリックするたびに、アラートが表示されるはずである。これは、ブラウザ全体のクリックイベントが発火したら、`function () {alert("Hi!");};`関数が実行されるようにイベントリスナーを定義したからだ。
イベントリスナは画面全体単位だけでなく、特定の HTML タグ要素に対しても設定可能である。例えば、以下のようにボタンタグがあった場合、ボタン要素を取得して、それに対してイベントリスナーを設定する。

```html
<button id="button">Click me!</button>
```

```js
const button = document.getElementById("button");
button.onclick = function () {
  alert("Hi!");
};
```

では、代表的な３つのイベントをここではやってもらう。

- マウス移動イベント
- キーボード押下イベント
- マウスクリックイベント

これ以外にブラウザが司るイベントは次のページを参考にしてほしい。
https://developer.mozilla.org/ja/docs/Web/Events

## HTML 準備

まずは、以下の HTML をコピペして、表示してみる。

```html:index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>イベント</h1>
    <div><span>マウス移動:</span><span id="mouseMove"></span></div>
    <div><span>キーボード押下:</span><span id="keyDown"></span></div>
    <div><span>ボタンクリック:</span><span id="buttonClick"></span></div>
    <div
      id="area"
      style="
        width: 50%;
        margin-right: auto;
        margin-left: auto;
        background-color: tomato;
        height: 300px;
      "
    >
      <div><span>マウス移動:</span><span id="tomatoMouseMove"></span></div>
      <div><span>キーボード押下:</span><span id="tomatoKeyDown"></span></div>
      <input placeholder="なにか入力してみて..." />
      <div>
        <span>ボタンクリック:</span><span id="tomatoButtonClick"></span>
      </div>
    </div>
    <script src="main.js"></script>
  </body>
</html>

```

## main.js の完成

さきに、main.js の完成品を見せておく。

```js
window.onmousemove = function (mouseEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(mouseEvent)

  const mouseDisplayTag = document.getElementById("mouseMove");
  mouseDisplayTag.innerText = `x: ${mouseEvent.clientX}, y: ${mouseEvent.clientY}`;
};

window.onkeydown = function (keyEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(keyEvent)

  const keyDisplayTag = document.getElementById("keyDown");
  keyDisplayTag.innerText = `key: ${keyEvent.key}, keyCode: ${keyEvent.keyCode}`;
};

window.onclick = function (clickEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(clickEvent)

  const clickDisplayTag = document.getElementById("buttonClick");
  clickDisplayTag.innerText = `clicked! x: ${clickEvent.clientX}, y: ${clickEvent.clientY}`;
};

// 上は、windowというブラウザそのものにイベントリスナーを定義したが、あるdom要素に対して定義することもできる。
const tomatoArea = document.getElementById("area");

tomatoArea.onmousemove = function (mouseEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(mouseEvent)

  const mouseDisplayTag = document.getElementById("tomatoMouseMove");
  mouseDisplayTag.innerText = `x: ${mouseEvent.clientX}, y: ${mouseEvent.clientY}`;
};

// NOTE: divタグには通常キーボードがフォーカスしないのでこれは機能しないが、inputタグがあればキーボードがフォーカスするため機能する。
tomatoArea.onkeydown = function (keyEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(keyEvent)

  const keyDisplayTag = document.getElementById("tomatoKeyDown");
  keyDisplayTag.innerText = `key: ${keyEvent.key}, keyCode: ${keyEvent.keyCode}`;
};

tomatoArea.onclick = function (clickEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(clickEvent)

  const clickDisplayTag = document.getElementById("tomatoButtonClick");
  clickDisplayTag.innerText = `clicked! x: ${clickEvent.clientX}, y: ${clickEvent.clientY}`;
};
```

## マウス移動イベント

ブラウザ全体にマウスムーブイベントリスナーを設定

```js:main.js
window.onmousemove = function (mouseEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(mouseEvent)

  const mouseDisplayTag = document.getElementById("mouseMove");
  mouseDisplayTag.innerText = `x: ${mouseEvent.clientX}, y: ${mouseEvent.clientY}`;
};
```

id が`area`の div タグに対してマウスムーブイベントを設定

```js: main.js

const tomatoArea = document.getElementById("area");

tomatoArea.onmousemove = function (mouseEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(mouseEvent)

  const mouseDisplayTag = document.getElementById("tomatoMouseMove");
  mouseDisplayTag.innerText = `x: ${mouseEvent.clientX}, y: ${mouseEvent.clientY}`;
};
```

すると、画面上のマウスの座標が表示されるはず。

## キーボード押下イベント

ブラウザ全体にキーボードダウンリスナーを設定

```js:main.js
window.onkeydown = function (keyEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(keyEvent)

  const keyDisplayTag = document.getElementById("keyDown");
  keyDisplayTag.innerText = `key: ${keyEvent.key}, keyCode: ${keyEvent.keyCode}`;
};
```

id が`area`の div タグに対してキーボードダウンイベントを設定

```js: main.js
// NOTE: divタグには通常キーボードがフォーカスしないのでこれは機能しないが、inputタグがあればキーボードがフォーカスするため機能する。
tomatoArea.onkeydown = function (keyEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(keyEvent)

  const keyDisplayTag = document.getElementById("tomatoKeyDown");
  keyDisplayTag.innerText = `key: ${keyEvent.key}, keyCode: ${keyEvent.keyCode}`;
};
```

すると、タイプしたキーボードの情報が表示されるはず。

## マウスクリックイベント

ブラウザ全体にクリックリスナーを設定

```js:main.js
window.onclick = function (clickEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(clickEvent)

  const clickDisplayTag = document.getElementById("buttonClick");
  clickDisplayTag.innerText = `clicked! x: ${clickEvent.clientX}, y: ${clickEvent.clientY}`;
};
```

id が`area`の div タグに対してクリックイベントを設定

```js: main.js
tomatoArea.onclick = function (clickEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(clickEvent)

  const clickDisplayTag = document.getElementById("tomatoButtonClick");
  clickDisplayTag.innerText = `clicked! x: ${clickEvent.clientX}, y: ${clickEvent.clientY}`;
};splayTag.innerText = `x: ${mouseEvent.clientX}, y: ${mouseEvent.clientY}`;
};
```

すると、画面上のマウスでクリックした座標が表示されるはず。

今回は以上。
