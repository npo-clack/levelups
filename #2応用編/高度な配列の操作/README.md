# 高度な配列の操作

今夏は HTML は特に使わない。記事中のコードは[paiza.io](https://paiza.io/ja/projects/new)で JavaScript を選択して実行してみよう。

## for ループを使わず配列を操作する

JavaScript の配列には便利な標準の関数がいくつもある。それらをうまく使えば、for ループを自分で実装しなくてもよい。例えば次の関数。

- includes
- map
- filter
- reduce
  このうち、map filter reduce find の４つは関数を引数にとる関数(高階関数)であり、後半で紹介する。

### includes

配列にある要素が入っているかどうかチェックする。入っていれば true を入ってなければ false を返す。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
```

## 高階関数 map filter reduce

高階関数を使えば、少ないコード量で for ループの代わりを実現できる。モダン開発において、for ループを使うことは基本的に少なく、高階関数とよばれる関数を使う。ここでは代表的な高階関数を ３ つ紹介する。ちなみに、高階関数は関数を引数にとったり、関数を返り値としてもつ関数のこと。自分で実装することは少ないが、使うことは多い。

```js
// 関数を引数にとる。
function sayHelloSandwich(someFunction) {
  console.log("Hello!");
  someFunction();
  console.log("Hello!");
}

function sayYourName(name) {
  console.log(`My name is ${name}.`);
}

sayHelloSandwich(sayYourName("太郎"));
// Hello!
// My name is 太郎.
// Hello!
```

### map

配列から、特定の条件を適用した新しい配列を作るときに使う。特定の条件は関数を渡すことで実現する。例えば、次の数字の配列をすべて２倍にした配列を作ってみてほしい。

```js
const numbers = [1, 4, 9, 16];
```

for ループなら、次のように実現するかな？

```js
const numbers = [1, 4, 9, 16];
const twiceNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  twiceNumbers.push(2 * number);
}
```

これを map を使うと次のようになる。

```js
const numbers = [1, 4, 9, 16];
const twiceNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(twiceNumbers);
// [2, 8, 18, 32]
// アロー関数を使った書き方
// const twiceNumbers = numbers.map((number) => number * 2);
```

まず、`numbers`という「配列」自体がそもそも`map`という関数を使える。これは、数字の配列だけでなく、どんな配列でもよい。

例えば以下のサンプルは文字列に対して `map` を実行している。

```js
const names = ["田中", "山田", "佐藤"];
const taroNames = names.map(function (name) {
  return name + "太郎";
});
console.log(taroNames);
// ["田中太郎", "山田太郎", "佐藤太郎"]
```

`map`には、配列の１つ１つの要素を引数にもち、その要素をどう変形するかを定義する関数を渡す。すると、`map`がそれぞれの要素ごとにその関数を実行してくれて、最終的に全要素にその関数を提供した配列を返してくれる。

最初は、難しいと思うかもしれないが、使いこなしだすと、for ループには戻れなくなる。

### filter

配列から、特定の条件を満たす要素だけ抽出するときに使う。例えば、次の数字の配列から 2 の倍数の数字だけ取り出して新しく配列を作ってみてほしい。

```js
const numbers = [1, 4, 9, 16];
```

for ループなら、次のように実現するかな？

```js
const numbers = [1, 4, 9, 16];
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
```

これを filter を使うと次のようになる。

```js
const numbers = [1, 4, 9, 16];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
// [2, 8, 18, 32]
// アロー関数を使った書き方
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
```

まず、`numbers`という「配列」自体がそもそも`filter`という関数を使える。これは、数字の配列だけでなく、どんな配列でもよい。

例えば以下のサンプルは文字列に対して `filter` を実行している。

```js
const names = ["田中", "山田", "佐藤"];
// 田という文字を含んでいる名前だけ抽出
const taNames = names.filter(function (name) {
  return name.includes("田");
});
console.log(taNames);
// ["田中", "山田"]
```

`filter`には、配列の１つ１つの要素を引数にもち、抽出の条件を記述した関数を渡す。すると、`filter`がそれぞれの要素ごとにその関数を実行してくれて、結果が true の要素のみを持った配列を返してくれる。

最初は、難しいと思うかもしれないが、使いこなしだすと、for ループには戻れなくなる。

### reduce

配列から、１つの値を集計するのに使う。例えば、次の数字の配列の合計値を計算してほしい。

```js
const numbers = [1, 4, 9, 16];
```

for ループなら、次のように実現するかな？

```js
const numbers = [1, 4, 9, 16];

// 合計を計算
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum += number;
}
console.log(sum);
// 30
```

これを reduce を使うと次のようになる。

```js
const numbers = [1, 4, 9, 16];
const sum = numbers.reduce(function (accumulate, currentValue) {
  accumulate += currentValue;
  return accumulate;
}, 0);
console.log(sum);
// 30

// アロー関数を使った書き方
// const sum = numbers.reduce((accumulate, currentValue) => {
//   accumulate += currentValue;
//   return accumulate;
// }, 0);
```

まず、`numbers`という「配列」自体がそもそも`reduce`という関数を使える。これは、数字の配列だけでなく、どんな配列でもよい。

例えば以下のサンプルは文字列に対して `reduce` を実行している。

```js
const names = ["田中", "山田", "佐藤"];
// 名前を合体させる
const sumNames = names.reduce(function (accumulate, current) {
  accumulate += current;
  return accumulate;
});
console.log(sumNames);
// "田中山田佐藤"
```

`reduce`は`map`や`filter`よりも扱いが少し難しい。まず、２つ引数を持つ。１つ目は集計する関数で、２つ目は初期値だ。例えば今回の場合は、数字の合計を計算するので、第 2 引数である初期値は 0 だった。

```js
const numbers = [1, 4, 9, 16];
const sum = numbers.reduce(function (accumulate, currentValue) {
  accumulate += currentValue;
  return accumulate;
}, 0); // 初期値は0
```

集計関数は２つの引数を持つ。1 つ目が前回からの累計値で 2 つ目が現在の要素の値である。これは、`console.log`でそれぞれの引数を出力してみるとわかりやすい。

```js
const numbers = [1, 4, 9, 16];
const sum = numbers.reduce(function (accumulate, currentValue) {
  console.log("累計値:", accumulate, "現在値:", current);
  accumulate += currentValue;
  return accumulate;
}, 0);

// 累計値: 0 現在値: 1  累計値に0が入っているのは、第２引数に０を渡しているから
// 累計値: １ 現在値: ４
// 累計値: 5 現在値: 9
// 累計値: 14 現在値: 16
```

`reduce` は使いこなせるとかなり配列を自由に操れる様になる。

### map filter reduce の合体技

以下の配列で、偶数の値のみを取り出して、２倍して合計してください。

```js
const numbers = [1, 4, 9, 16];
```

答え

```js
const numbers = [1, 4, 9, 16];
const sum = numbers
  .filter(function (number) {
    return number % 2 === 0;
  })
  .map(function (number) {
    return number * 2;
  })
  .reduce(function (accumulate, current) {
    accumulate += current;
    return accumulate;
  }, 0);

// アロー関数を使った場合
// const sum = numbers
//   .filter((number) => return number % 2 === 0)
//   .map((number) => number * 2)
//   .reduce((accumulate, current) => {
//     accumulate += current;
//     return accumulate;
//   }, 0);
```
