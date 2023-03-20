# HTML タグ

## h タグ

見出し。数字は見出しのレベルを示す。h1 タグは 1 つの HTML に１つしか書いてはいけないルールがある。

```html
<h1>ヘッダー1</h1>
<h2>ヘッダー2</h1>
<h3>ヘッダー3</h1>
<h4>ヘッダー4</h1>
```

## div(ディブ)タグ

div タグはタグをとりあえずまとめるときに使う。何使えばいいかわからないときはとりあえず div タグで。なんの変哲もないタグだけど css 加えたら最強。その範囲に対してスタイルをあてることができる。

```html
<div>
  <div>あいうえお</div>
  <div>かきくけこ</div>
</div>
```

## span(スパン)タグ

div タグがタグをまとめるときに使うのに対し、span タグはある範囲のテキストにスタイルを当てるときに使う。

```html
<p><span class="important">大事なこと</span>は強調したい</p>
```

```css
.important {
  color: red;
  font-weight: bold;
}
```

## table(テーブル)タグ

テーブルとは日本語で表のこと。表を作るのに使われるが、最近は使われなくなっている。なぜなら、スマホだと見にくいから。レスポンシブデザイン(横幅に応じてデザインを柔軟に変えるデザイン)と相性が悪い。現代では、表を作成ｓるうときは table の代わりに flex や grid で表を組む。

```html
<table>
  <thead>
    <tr>
      <th colspan="2">The table header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The table body</td>
      <td>with two columns</td>
    </tr>
  </tbody>
</table>
```

## ul,ol,li,dl,dt.dd タグ

リストタグは箇条書きのときや、順番を示すときに使う。ul は UnorderList(順番なしリスト)で ol は OrderList(順番ありリスト)。dt や dd は情報を列挙するときに使う。

```html
<ul>
  <li>りんご</li>
  <li>ばなな</li>
  <li>みかん</li>
</ul>

<ol>
  <li>りんご</li>
  <li>ばなな</li>
  <li>みかん</li>
</ol>

<dl>
  <dt>戦闘力:</dt>
  <dd>5</dd>
  <dt>名前:</dt>
  <dd>たろう</dd>
</dl>
```

## フォーム系

ユーザーからの入力は基本的にフォーム系で受け付ける。input タグの type にいろいろ指定すれば、いろんなフォームを扱えるようになる。ここで紹介している以外にもいろんな type があるから調べてみてほしい。実務では良く扱うが、一番面倒くさい。

```html
<form>
  <label>
    テキストインプット
    <input type="text" /><br />
  </label>
  <label>
    数字インプット
    <input type="number" /><br />
  </label>
  <label>
    日付インプット
    <input type="date" /><br />
  </label>
  <label>
    レンジインプット
    <input type="range" /><br />
  </label>
  <label>
    ファイルインプット
    <input type="file" /><br />
  </label>
  <label>
    チェックボックスインプット
    <input type="checkbox" /><br />
  </label>
  <label>
    ラジオインプット
    <input type="radio" /><br />
  </label>
  <label>
    ドロップダウン
    <select>
      <option>選択肢１</option>
      <option>選択肢2</option>
      <option>選択肢３</option>
    </select>
  </label>
</form>
```

## テキスト系

テキスト系は色々種類があるが、span タグと css でより汎用性の高いスタイルをあてることができるため、あまり使うことはない。ここでは small のみ紹介する。

```html
<p>
  50<small>%</small>のように単位を小さくしたり、サブテキストとして表示するのに使う。
</p>
```

## img(イメージ)タグ

画像を表示するのに使う。

```html
<img
  src="ここに画像のパスを入れる。ローカルファイルでもリモート(インターネット上)のファイルでもOK"
  alt="これは画像が見えないとき(人)用の補助テキスト。画像の代わりに画像の説明文をいれる。"
/>
```

## a(アンカー)タグ

他のページや、同じページのある見出しにリンクする。

```html
<a href="https://www.google.com">googleへのリンク</a>
<a href="#div-header">divタグ見出しへのページ内リンク</a>
```
