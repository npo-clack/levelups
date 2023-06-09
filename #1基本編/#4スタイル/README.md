# スタイル

HTML は骨、CSS は見た目、JS は筋肉。見た目を良くするために CSS を学ぶ。

## スタイルの適用方法

HTML タグに対してスタイルを適用する方法は大きく３つある。

1. タグによる指定
2. id による指定
3. class による指定

このうち「タグによる指定」はあまり使われない。なぜなら一度そのタグのスタイルを変えてしまえば、HTML におけるすべてのそのタグに、そのスタイルがあたってしまうからだ。タグにスタイルを当てるときは、逆にデフォルトのの余白などをリセットするときぐらい。

```html
<ul>
  <!-- ここの文字列赤色にしよ！ --->
  <li>りんご</li>
  <li>れもん</li>
  <li>いちご</li>
</ul>

<!-- ~長いHTML~ --->

<!-- ~// あっ、ここにも影響が！！！~ --->
<ul>
  <li>りんご</li>
  <li>れもん</li>
  <li>いちご</li>
</ul>
```

```css
li {
  color: red;
}
```

また、「id による指定」もあまり使わない。というのは、スタイルは基本的には、デザインの一貫性の観点から、繰り返しが発生しやすいため、class を使うことが多いからだ。id はどちらかというと、JS から HTML 上のある特定の要素を取得するのによく使う。

いちおう 3 つのスタイルの当て方を紹介する。このうちよく使うのは class なので覚えておいてほしい。

```css
/* タグは何もつけずにタグの名前を指定する */
li {
  color: red;
}

/* idは頭に#をつける */
#listItem {
  color: red;
}

/* classには頭に.をつける */
.listItem {
  color: red;
}
```

## デザイン基礎

きれいなデザインにするにはデザインの基礎を学ぶ必要がある。しかしこのカリキュラムの範囲外なので、興味がある人は自分で学んでほしい。
「ノンデザイナーズ・デザインブック」という本がおすすめである。

とりあえず、以下のことを覚えておくときれいなデザインになりやすい

- padding を入れる。
- 基本的に margin は使わずに、flex や grid で整列させ gap で間を調整する。
- 原色は使わない。色は基本３色に抑える。色数がほしいときはグレーを使う。
- border-radius で角丸にしたり、box-shadow で影をつけたりすると、モダンっぽい。

多分何言っているかわからないと思う。padding はすぐに使えるから覚えておいてほしい。flex や grid は「＃２応用編」の便利な css で紹介する。色は、このカリキュラムでは扱わない。興味ある人は自分で調べてみてほしい。

Web サイトの配色
https://zero-plus.io/media/color-scheme-tips/

## 余白 padding margin

https://saruwakakun.com/html-css/basic/margin-padding

## 色指定

背景色

```css
background-color: tomato;
```

文字色

```css
color: tomato;
```

## 文字

文字サイズ

```css
font-size: larger;
```

太文字

```css
font-weight: bold;
```

## 整列 flex grid

「＃２応用編」で扱う予定

## 絶対位置・相対位置

「＃２応用編」で扱う予定
