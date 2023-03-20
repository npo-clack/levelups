# DOM 操作

## DOM(ドム) について

HTML のそれぞれのタグはブラウザに読み込まれて解釈されて、それぞれオブジェクトとしてツリー構造で保持される。
[参考記事](https://www.javadrive.jp/javascript/dom/index1.html)

僕らは、JavaScript からそれら DOM を取得して、操作している。

```js
const dom = document.getElementById("id");
dom.innerText = "こんにちは！";
```

とりあえず、HTML タグが実体をもって、ブラウザの中に存在しており、それらを僕らプログラマは DOM(ドム)とよんでいることをなんとなく理解しておいてほしい。

## DOM を操作してみよう

JS の世界で DOM を読み込む方法はいくつかあります。代表的なものを以下にあげた。

- document.querySelector()を使うつかう
- document.querySelectorAll()を使うつかう
- document.getElementById()
- document.getElementByClassName()
- document.getElementByTagName()

`querySelector()`と`querySelectorAll`はここでは扱いませんが、覚えるとかなり汎用性が高い。`getElementById()`と`getElementByClassName`が一番良く使う。タグを直接指定する`getElementByTagName()`は影響範囲が広すぎるためあまりつかわれない(css でタグに直接スタイルを当てるよりも class を通してスタイルを当てるのと同じ理由)。今回は、`getElementById()`と`getElementByClassName`の２つを覚えよう。

いかの`index.html`に対して、DOM 操作をする。

```html: index.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <h1>dom操作</h1>
    <div id="element1">element1</div>
    <div id="element2">element2</div>
    <div id="element3">element3</div>
    <div class="elements">elements</div>
    <div class="elements">elements</div>
    <div class="elements">elements</div>
    <script src="main.js"></script>
  </body>
</html>
```

先に完成品の`main.js`を見せておく。

```js:main.js
console.log("js読み込み start");

const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");
const elements = document.getElementsByClassName("elements");
// getElementsByTagNameはあまり使わない
// const divs = document.getElementsByTagName("div");

element1.innerText = "innerTextで新しくelement1に文字列を代入";
element2.innerHTML = "innerHTMLで新しくelement2に文字列を代入";
element3.innerText = "appendChildを使えば他のタグを子要素として追加できる";

// appendChild用のタグを生成
const newChildTag1 = document.createElement("span");
// 生成したタグに文章追加
newChildTag1.innerText = "追加要素１";
// appendChild用のタグを生成
const newChildTag2 = document.createElement("span");
// 生成したタグに文章追加
newChildTag2.innerText = "追加要素2";
// appendChildで生成したタグを追加
element3.appendChild(newChildTag1);
element3.appendChild(newChildTag2);

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  element.innerText = "クラスで一気にタグを編集できる。";
}

console.log("js読み込み done");
```

まずは、それぞれ id と class の DOM を取得する。

```js: main.js
const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");
const elements = document.getElementsByClassName("elements");
```

次に id で取得したそれぞれの DOM に文字列を代入してみる。

```js: main.js
element1.innerText = "innerTextで新しくelement1に文字列を代入";
element2.innerHTML = "innerHTMLで新しくelement2に文字列を代入";
element3.innerText = "appendChildを使えば他のタグを子要素として追加できる";
```

すると、HTML を開くと、`element1`と`element2`と`element3`の文字が、それぞれ上書きされていることがわかる。

次に、`appendChild()`を使ってみる。これは DOM に子要素を追加するする関数。

```js: main.js
// appendChild用のタグを生成
const newChildTag1 = document.createElement("span");
// 生成したタグに文章追加
newChildTag1.innerText = "追加要素１";
// appendChild用のタグを生成
const newChildTag2 = document.createElement("span");
// 生成したタグに文章追加
newChildTag2.innerText = "追加要素2";
// appendChildで生成したタグを追加
element3.appendChild(newChildTag1);
element3.appendChild(newChildTag2);
```

この状態で、先程の HTML をリロードすると、id が`element3`のタグの下に２つの`span`タグが追加されていることがわかる。

次に、class 名が`elements`のタグに対して、それぞれ文字列を追加してみる。通常 class は id とは違い複数のタグに同じ名前がつけられる。そこで、`getElementsByClassName()`は配列が返り値。それをループ野中で１つ１つの DOM 要素に対して文字列を追加したいいと思う。

```js: main.js
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  element.innerText = "クラスで一気にタグを編集できる。";
}
```

これで完成。
