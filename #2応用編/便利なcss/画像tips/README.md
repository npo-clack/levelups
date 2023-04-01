# 画像 tips

## 幅と高さ

HTML で画像を扱うのは意外と難しい。画像にはそもそもの高さと幅があるので、自分がイメージする場所へきれいに配置しようと思っても、ずれたりしてうまくいかないから。

例えば、単純に画像を配置してみる。するとかなり大きく表示されることがわかる。

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
    <img src="image.jpg" />
  </body>
</html>
```

そこで、基本的には画像は比較的サイズの大きいものを１つ用意して、width か height のどちらかを設定し縮小表示することが多い。片方だけ指定するのは、アスペクト比を維持するため。

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
      .width-fixed-image {
        width: 300px;
      }
      .height-fixed-image {
        height: 300px;
      }
    </style>
    <img src="image.jpg" class="width-fixed-image" />
    <img src="image.jpg" class="height-fixed-image" />
  </body>
</html>
```

## 幅と高さを固定したときにアスペクト比を崩さない。

複数の画像を並べて表示するとき、縦と横を固定して表示したくなる。画像スペースのの大きさを一定にしたほうが、見た目が整然として美しいからだ。そこで、width と height を固定するとアスペクト比が崩れる。この場合どうしたらよいだろうか？

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
      .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .card {
        border-color: gray;
        border-width: 1px;
        border-style: solid;
        width: 500px;
      }
      .card-header {
        width: 500px;
        height: 300px;
      }
      .card-image {
        width: 100%;
        height: 100%;
      }
    </style>
    <div class="gallery">
      <div class="card">
        <div class="card-header">
          <img src="image.jpg" class="card-image" />
        </div>
        <div class="card-body">わんこ１</div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src="image.jpg" class="card-image" />
        </div>
        <div class="card-body">わんこ２</div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src="image.jpg" class="card-image" />
        </div>
        <div class="card-body">わんこ3</div>
      </div>
    </div>
  </body>
</html>
```

この場合、`object-fit`という css が役に立つ。`object-fit: cover`を指定すれば、画像のアスペクト比を維持しつつ、枠に合わせてトリミングしてくれます。

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
      .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .card {
        border-color: gray;
        border-width: 1px;
        border-style: solid;
        width: 500px;
      }
      .card-header {
        width: 500px;
        height: 300px;
      }
      .card-image {
        width: 100%;
        height: 100%;
        /* 以下を追加 */
        object-fit: cover;
      }
    </style>
    <div class="gallery">
      <div class="card">
        <div class="card-header">
          <img src="image.jpg" class="card-image" />
        </div>
        <div class="card-body">わんこ１</div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src="image.jpg" class="card-image" />
        </div>
        <div class="card-body">わんこ２</div>
      </div>
      <div class="card">
        <div class="card-header">
          <img src="image.jpg" class="card-image" />
        </div>
        <div class="card-body">わんこ3</div>
      </div>
    </div>
  </body>
</html>
```

より詳しくはこちらの記事を参照してください。

https://www.webcreatorbox.com/tech/object-fit

## 画像にフィルターをかけて文字を重ねる

画像のフィルターのかけ方は２つ存在する。1 つ目は、半透明な div タグを画像の上に重ねるやり方。2 つ目は css の filter プロパティを使う方法。

１つ目のやり方

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
      .main {
        width: 100vw;
        height: 100vh;
        position: relative;
      }
      .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 30%;
        z-index: 0;
      }
      body {
        margin: 0;
      }
      .overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        z-index: 1;
        opacity: 0.5;
      }
      .main-text {
        position: absolute;
        color: white;
        z-index: 2;

        font-weight: bold;
        font-size: 50px;
        /* position absoluteで中央寄せする */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    </style>
    <div class="main">
      <img src="image.jpg" class="main-image" />
      <div class="overlay"></div>
      <div class="main-text">おやつこそすべて</div>
    </div>
  </body>
</html>
```

２つ目のやり方。filter に関しては以下のリンクを参照。
https://www.asobou.co.jp/blog/web/css-filter

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
      .main {
        width: 100vw;
        height: 100vh;
        position: relative;
      }
      .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 30%;
        z-index: 0;
        filter: grayscale(100%);
      }
      body {
        margin: 0;
      }
      .main-text {
        position: absolute;
        color: white;
        z-index: 2;

        font-weight: bold;
        font-size: 50px;
        /* position absoluteで中央寄せする */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    </style>
    <div class="main">
      <img src="image.jpg" class="main-image" />
      <div class="main-text">おやつこそすべて</div>
    </div>
  </body>
</html>
```
