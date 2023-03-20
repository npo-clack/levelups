# アロー関数

アロー関数は簡単に言えば　 `function(){}`
という書き方を短縮したもの(ショートハンド)である。JS では関数が引数として扱えたり、返り値として扱えるため、より短くかけてより見やすいアロー関数が好まれる。

```js
// functionの書き方
const sayHello! = function(name){
    console.log("Hello" + name + "!");
}

sayHello('tanaka');

// アロー関数の書き方
const sayGoodBye! = (name) => {
    console.log("GoodBye" + name + "!");
}

sayGoodBye('tanaka');
```

厳密には、function とアロー関数の書き方で、クラスにおける this の挙動が変わるが、クラスを書く機会がない限り、その違いは覚えなくて良い。またイベントリスナーも function を使うより見やすい。

```js
const button = document.getElementById("button");

button.onclick = () => {
  alert("Hello!");
};
```
