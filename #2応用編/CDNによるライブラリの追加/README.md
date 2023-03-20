# CDN によるライブラリの追加

ライブラリは協力な武器を提供してくれる。ライブラリをダウンロードする方法は２つある。

- 直接ライブラリのソースコードをダウンロードしてきて、ファイル名を script タグで指定する。
- script タグで直接ライブラリを配信している CDN サーバーのリンクを指定する。

## 直接ライブラリのソースコードをダウンロードしてきて、ファイル名を script タグで指定する方法

     直接ライブラリのソースコードをダウンロードするには、ライブラリのホームページにいきダウンロードリンクを探すことでできる。例えば、アニメーションを強化するライブラリ<a
        href="https://animejs.com/"
        >anime.jsのサイト</a
      >では下の方にダウンロードリンクがある。

## script タグで直接ライブラリを配信している CDN サーバーのリンクを指定する方法

CDN サーバーとは、ContentsDeliveryNetwork(コンテンツデリバリーネットワーク)の略で、世界各地にコンテンツを遅延を少なく配信する役割を持ったサーバーのこと。写真や動画の他に、ライブラリを配信する専用サーバーもあり、開発者はこれを積極的に使っている。例えば、アニメーションを強化するライブラリ[anime.js のサイト](https://animejs.com/)には、CDN リンクは提供されていないが、[「anime.js cdn」と検索すれば、CDN サーバーが見つかる。](https://cdnjs.com/libraries/animejs)

### anime.js の例

anime.js というライブラリを使うと[様々な表現](https://tr.you84815.space/animejs/)もできるようになる。体験してみよう。以下の HTML をコピーして、自分で開いてみよう。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- anime.jsのcdnを指定 -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
      integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </head>
  <body>
    <h1>CDNによるライブラリ追加</h1>
    <div class="stagger-visualizer-wrapper">
      <div class="stagger-visualizer"></div>
    </div>
    <button id="playButton">プレイ</button>
    <button id="pauseButton">ポーズ</button>
    <style>
      .stagger-visualizer-wrapper {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 18rem;
        height: 18rem;
        background-color: gray;
      }
      .stagger-visualizer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 17rem;
        height: 17rem;
      }

      .stagger-visualizer div {
        /*position: absolute;*/
        width: 1rem;
        height: 1rem;
        border: 1px solid red;
        background-color: red;
      }
    </style>
    <script>
      // https://codepen.io/juliangarnier/pen/XvjWvx
      const staggerVisualizerEl =
        document.getElementsByClassName("stagger-visualizer")[0];
      const fragment = document.createDocumentFragment();
      const grid = [15, 15];
      const col = grid[0];
      const row = grid[1];
      const numberOfElements = col * row;

      for (let i = 0; i < numberOfElements; i++) {
        fragment.appendChild(document.createElement("div"));
      }

      staggerVisualizerEl.appendChild(fragment);

      const staggersAnimation = anime({
        targets: ".stagger-visualizer div",
        scale: [
          { value: 0.1, easing: "easeOutSine", duration: 500 },
          { value: 1, easing: "easeInOutQuad", duration: 1200 },
        ],
        delay: anime.stagger(200, { grid: [14, 5], from: "center" }),
        loop: true,
        autoplay: false,
      });

      document.getElementById("playButton").onclick = staggersAnimation.play;
      document.getElementById("pauseButton").onclick = staggersAnimation.pause;
    </script>
  </body>
</html>
```

## ライブラリの種類

- CSS フレームワーク系 ([コリス記事](https://coliss.com/articles/build-websites/operation/css/awesome-css-frameworks.html))
- 便利系([lodash](https://lodash.com/))
- アニメーション系([anime.js](https://animejs.com/))
- クリエイティブ系([ICS メディア記事一覧](https://ics.media/entry/category/creative/))
