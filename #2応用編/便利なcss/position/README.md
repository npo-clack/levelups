# position

css には position という属性がある。

https://saruwakakun.com/html-css/basic/relative-absolute-fixed

position の設定の値によって、HTML タグの要素を重ねたり、画面上に固定したりすることができる。

以下の HTML を作成してみよう。その HTML を開いて、それぞれの position を確認しよう。

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
    <style>
      .box {
        width: 500px;
        height: 500px;
      }
      .small-box {
        width: 100px;
        height: 100px;
      }
      .tomato-color {
        background-color: tomato;
      }
      .green-color {
        background-color: green;
      }
      .footer {
        background-color: slategray;
      }
    </style>
    <h1>position</h1>
    <h2>position: sticky</h2>
    <p>
      その場にいるが、画面外になりそうになると、ついてくる。ヘッダーとかフッダーとかに使える。
    </p>
    <div class="footer" style="position: sticky; top: 0">position: sticky</div>
  </body>
  <h2>position: absolute</h2>
  <p>
    親要素にposition:relativeを指定して使う。topやleftと合わせて指定することで、絶対位置に配置できる。これを利用すれば、例えば画像の上に文字を並べたり、ボタンを重ねたりできる。
  </p>
  <h3>まずは通常の配置</h3>
  縦に順番に配置されている。
  <div>
    <div class="box tomato-color">通常位置1 幅:500px 高さ:500px</div>
    <div class="small-box green-color">通常位置2 幅:500px 高さ:500px</div>
  </div>
  <h3>次に絶対配置</h3>
  <div style="position: relative">
    <div class="box tomato-color">通常位置1 幅:500px 高さ:500px</div>
    <div
      class="small-box green-color"
      style="position: absolute; top: 250px; left: 50px"
    >
      position: absolute;
    </div>
  </div>
  <h2>position: fixed</h2>
  <p>
    スクロールしてもしなくても、画面上ずっと同じ位置にいる。Twitterで常にツイートボタンが画面上にあるように、画面から隠れてほしくない、アクションボタンとかに使う。
  </p>
  <div
    class="small-box tomato-color"
    style="position: fixed; bottom: 50px; right: 50px"
  >
    position: fixed
  </div>
</html>
```

## position:sticky

sticky とは粘着しているイメージ。
その場にいるが、画面外になりそうになると、ついてくる。ヘッダーとかフッダーとかに使える。

```html
<div class="footer" style="position: sticky; top: 0">position: sticky</div>
```

## position: fixed

スクロールしてもしなくても、画面上ずっと同じ位置にいる。Twitter で常にツイートボタンが画面上にあるように、画面から隠れてほしくない、アクションボタンとかに使う。

```html
<div
  class="small-box tomato-color"
  style="position: fixed; bottom: 50px; right: 50px"
>
  position: fixed
</div>
```

## position:absolute

親要素に position:relative を指定して使う。top や left と合わせて指定することで、絶対位置に配置できる。これを利用すれば、例えば画像の上に文字を並べたり、ボタンを重ねたりできる。

```html
<h3>まずは通常の配置</h3>
縦に順番に配置されている。
<div>
  <div class="box tomato-color">通常位置1 幅:500px 高さ:500px</div>
  <div class="small-box green-color">通常位置2 幅:500px 高さ:500px</div>
</div>
<h3>次に絶対配置</h3>
<div style="position: relative">
  <div class="box tomato-color">通常位置1 幅:500px 高さ:500px</div>
  <div
    class="small-box green-color"
    style="position: absolute; top: 250px; left: 50px"
  >
    position: absolute;
  </div>
</div>
```
