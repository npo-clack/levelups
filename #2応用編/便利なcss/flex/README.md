# flex

最近のブラウザで使えるようになった。要素を整列させるなら、flex か grid を使う。基本的に flex のほうが覚えやすく使いやすいので、flex を使いこなそう！

迷ったときは「flex 　チートシート」と調べるとわかりやすいサイトが出てくる。

こんなやつ
https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet

## 代表的な属性

### flex-direction

並べる方向を指定する。`flex-direction: row`で横向きに、`flex-direction: column`で縦向きに並べられる。`display:flex`を定義するだけで、デフォルトで`flex-direction: row`が指定されるため、基本的には縦向きにしたいときにしか書かない。

```html
<style>
  .box {
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-width: 1px;
    border-color: gray;
    border-style: solid;
  }
</style>
<h2>flex-direction: row</h2>
<div style="display: flex;  background-color: slategray">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<h2>flex-direction: column</h2>
<div
  style="display: flex; flex-direction: column;  background-color: slategray"
>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

### justify-content

要素の並べる間隔や位置を指定する。
https://developer.mozilla.org/ja/docs/Web/CSS/justify-content

以下の`justify-content: start`の値を`justify-content: center`や`justify-content: space-between`にしてみよう

```html
<style>
  .box {
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-width: 1px;
    border-color: gray;
    border-style: solid;
  }
</style>
<div style="display: flex; justify-content: start; background-color: slategray">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

### gap

要素間の隙間の長さを定義する。これでもう margin はいらなくなる。

```html
<style>
  .box {
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-width: 1px;
    border-color: gray;
    border-style: solid;
  }
</style>
<div style="display: flex; gap: 8px;  background-color: slategray">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

### align-items

要素の軸を揃える。`justify-content: center`と`align-items: center`を組み合わせれば、すべての要素が上下左右真ん中によってくれる。

https://developer.mozilla.org/ja/docs/Web/CSS/align-items

````html
<style>
  .box {
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-width: 1px;
    border-color: gray;
    border-style: solid;
  }
  .short-box {
    width: 50px;
    height: 25px;
    background-color: aqua;
    border-width: 1px;
    border-color: gray;
    border-style: solid;
  }
  .long-box {
    width: 50px;
    height: 150px;
    background-color: aqua;
    border-width: 1px;
    border-color: gray;
    border-style: solid;
  }
</style>
<div style="display: flex; align-items: center; background-color: slategray">
  <div class="box"></div>
  <div class="short-box"></div>
  <div class="long-box"></div>
</div>
```
````
