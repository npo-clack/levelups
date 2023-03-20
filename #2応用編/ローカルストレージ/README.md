# ローカルストレージ

ローカルストレージとは、Web ブラウザの簡易的なデータベースのこと。通常 JS 上の変数はブラウザが閉じたら消えてしまうが、ローカルストレージを使えば、ブラウザにデータを保存することができる。ブラウザ単位の保存なので、残念ながら PC の Chrome ブラウザで保存した値は、Safari や Edge ブラウザでは使えないし、スマホでも使えない。あくまで、PC のブラウザに保存するための機能である。もし、他の端末でもでも保存したデータを使いたいのであれば、サーバーサイドを実装する必要がある。

## ローカルストレージ入門

ブラウザの開発者ツール(検証ツール)を開いてコンソールを表示させよう。ローカルストレージは組み込み組み込みで提供されているので、ライブラリをインストールする必要はない。以下のプログラムをコンソールに打ち込んで見よう。

```js
localStorage.setItem("猫の名前", "たま");
```

これでローカルストレージにデータが保存できた。１つ目の引数はキー、２つ目の引数は保存したい値。キーはデータを取得するときに使う。保存したい値の注意点としては、文字列しか受け付けてないこと。数字は`数字.toString()`で文字列化し、オブジェクトや配列は`JSON.stringify(オブジェクト)`で文字列化するとよい。

次に以下のプログラムを打ち込んでみてほしい

```js
const item = localStorage.getItem("猫の名前");
console.log(item);
```

`getItem()`に先程のキーを渡せば、ローカルストレージにそのキー名で保存されている値を取得できる。もしそのキー名で何も保存されていない場合は`null`が返ってくる。

ここで注意点としては、ローカルストレージに保存されている値はすべて文字列化されているので、数字であれば`Number.parseInt(値)`で、オブジェクトや配列であれば`JSON.parse(値)`で変換しないといけない。

## TODO アプリを作ってみる

以下の HTML と JS を移して、TODO アプリを作ってみよう。

```html
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
    <h1>TODOアプリ</h1>
    <ul id="todoListArea"></ul>
    <div>
      <input type="text" id="todoInput" />
      <button id="addButton">追加</button>
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

```js
/* ----- データ ------*/
const todoList = [];

/* ----- DOM ------*/
const addButton = document.getElementById("addButton");
const textInput = document.getElementById("todoInput");
const todoListArea = document.getElementById("todoListArea");

/* ----- 関数　------*/

function displayTodo() {
  // クリア
  todoListArea.innerText = "";

  // 描画
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const todoItem = document.createElement("li");
    todoItem.innerText = todo;
    todoListArea.appendChild(todoItem);
  }
}

function addTodo() {
  const inputText = textInput.value;
  if (inputText.length <= 0) {
    return;
  }
  todoList.push(inputText);

  // 画面に表示
  displayTodo();

  // インプットフォームをクリア
  textInput.value = "";
}

/* ----- イベントリスナー ------*/
addButton.onclick = addTodo;
```

作ったら動作を確認してみよう。ちゃんと追加できるかな？

動作確認したら、ブラウザをリロードしてみよう。画面から表示が消えるはず。
ブラウザをリロードすると、JS の変数はリセットされるため、データが消えてしまう。消えないようにローカルストレージを使ってみよう。

### ローカルストレージをつかうように改善

まず、ローカルストレージのキーを定義する。これは todoList の定義の次くらいに書いておく。

```js
const TODO_LIST_KEY = "MY_TODO_LIST";
```

次に、TODO が追加されたら、ローカルストレージに保存したいので、保存関数`saveInLocalStorage`を実装する。これは`displayTodo`関数の前くらいに書いておく。

```js
function saveInLocalStorage() {
  // ローカルストレージにいれるには、一旦文字列にしないといけない。
  // そこでJSON.stringify()をつかって、構造を保ったまま文字列化する。
  // JSON.parse()でもとのオブジェクトおよび配列として取り出せる。
  const textTodoList = JSON.stringify(todoList);
  localStorage.setItem(TODO_LIST_KEY, textTodoList);
}
```

次に、`addTodo`関数で`saveInLocalStorage`を呼び出すように編集する。

```js
function addTodo() {
  const inputText = textInput.value;
  if (inputText.length <= 0) {
    return;
  }
  todoList.push(inputText);

  // 画面に表示
  displayTodo();

  // インプットフォームをクリア
  textInput.value = "";

  // ローカルストレージに保存
  saveInLocalStorage();
}
```

これで、todo が追加されるたびにローカルストレージに値を保存できる。しかし、このままではローカルストレージに保存されるだけなので、画面をリロードしたときに、真っ白のままである。画面をリロードしたときに、ローカルストレージから値を取得して、表示するようにしたい。そこで`loadFromLocalStorage`関数を実装する。これは、`saveInLocalStorage`の次くらいに書いておく。

```js
function loadFromLocalStorage() {
  const textTodoList = localStorage.getItem(TODO_LIST_KEY);
  // まだ何も保存されていなければ何もしない。
  if (!textTodoList) {
    return;
  }

  // todoListを更新する。
  todoList = JSON.parse(textTodoList);
}
```
