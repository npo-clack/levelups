# 動的クラス変更

クラスを JS で付け加えたり、消したりできるとできると一気に表現が広がる。例えば、クイズアプリで、正解すれば「正解！」という文字列を画面に表示したいとする。いろいろ実現方法はあると思うが、１つの方法としては、最初に「正解」という文字列を書いたタグを隠しておいて、正解したとき画面に表示すればよい。これを css で実現するには、適当なクラス名(ここでは hidden)に`display:none;`を設定して、「正解！」という文字列のあるタグ(ここでは div)で設定しておく。そして、正解したときに JS で`hidden`クラスを取り除けば良い。

```html
// 正解時は
<div class="hidden">正解！</div>
```

```css
.hidden {
  display: none;
}
```

他にも、ボタンを押すと押すとそのボタンの色に背景を設定できたりする。

```html
<div id="colorPlace" class="color-gray"></div>
<button id="redButton">赤</button>
<button id="greenButton">緑</button>
<button id="blueButton">青</button>
```

```css
#colorPlace {
  width: 500px;
  height: 500px;
}

.color-gray {
  background-color: gray;
}

.color-red {
  background-color: red;
}
.color-green {
  background-color: green;
}
.color-blue {
  background-color: blue;
}
```

今回は、これを実現してみよう。まずは、HTML を用意する。

```Html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>動的クラス変更</h1>
    <div id="colorPlace" class="color-gray"></div>
    <button id="redButton">赤</button>
    <button id="greenButton">緑</button>
    <button id="blueButton">青</button>
    <script src="main.js"></script>
  </body>
</html>
```

つぎに CSS を用意する。

```css
#colorPlace {
  width: 500px;
  height: 500px;
}

.color-gray {
  background-color: gray;
}

.color-red {
  background-color: red;
}
.color-green {
  background-color: green;
}
.color-blue {
  background-color: blue;
}
```

さて問題は JS。先に完成形を見せておく。

```js
const colorPlace = document.getElementById("colorPlace");

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");

redButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-green");
  colorPlace.classList.remove("color-blue");
  colorPlace.classList.add("color-red");
};

greenButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-red");
  colorPlace.classList.remove("color-blue");
  colorPlace.classList.add("color-green");
};

blueButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-green");
  colorPlace.classList.remove("color-red");
  colorPlace.classList.add("color-blue");
};

/* ---------------*/
// 上級者向けの場合  //
/* ---------------*/

// redButton.onclick = function(){
//   colorPlace.classList.forEach(function(className){
//     if(className.startsWith('color')){
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add("color-red");
// }

// greenButton.onclick = function(){
//   colorPlace.classList.forEach(function(className){
//     if(className.startsWith('color')){
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add("color-green");
// }

// blueButton.onclick = function(){
//   colorPlace.classList.forEach(function(className){
//     if(className.startsWith('color')){
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add("color-blue);
// }

/* ---------------*/
// 最上級者向けの場合  //
/* ---------------*/

// function changeColor(className) {
//   colorPlace.classList.forEach(function (className) {
//     if (className.startsWith("color")) {
//       colorPlace.classList.remove(className);
//     }
//   });
//   colorPlace.classList.add(className);
// }

// redButton.onclick = function () {
//   changeColor("color-red");
// };
// greenButton.onclick = function () {
//   changeColor("color-green");
// };
// blueButton.onclick = function () {
//   changeColor("color-blue");
// };
```

まずは、それぞれの DOM を取得し、

```js
const colorPlace = document.getElementById("colorPlace");

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");
```

各ボタンにイベントリスナーを設定する。

```js
redButton.onclick = function () {
  // クラス付け替え
};

greenButton.onclick = function () {
  // クラス付け替え
};

blueButton.onclick = function () {
  // クラス付け替え
};
```

ここで、赤ボタンが押されたら、colorPlace という id がついた div タグの背景色を赤色にするために、`color-gray`クラスと`color-blue`クラスと`color-green`クラスを取り除いて`color-red`クラスをつけなければいけない。

クラスの付け方と取り除き方は意外とかんたん。

クラスの付け方

```js
// DOMを取得
const colorPlace = document.getElementById("colorPlace");

// classList.add()でクラス名を指定
colorPlace.classList.add("class-name");
```

クラスの取り除き方

```js
// DOMを取得
const colorPlace = document.getElementById("colorPlace");

// classList.remove()でクラス名を指定
colorPlace.classList.remove("class-name");
```

これを使えば、最終的にこうなる。

```js
const colorPlace = document.getElementById("colorPlace");

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");

redButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-green");
  colorPlace.classList.remove("color-blue");
  colorPlace.classList.add("color-red");
};

greenButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-red");
  colorPlace.classList.remove("color-blue");
  colorPlace.classList.add("color-green");
};

blueButton.onclick = function () {
  colorPlace.classList.remove("color-gray");
  colorPlace.classList.remove("color-green");
  colorPlace.classList.remove("color-red");
  colorPlace.classList.add("color-blue");
};
```

今回は以上。
