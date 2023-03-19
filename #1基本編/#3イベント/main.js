window.onmousemove = function (mouseEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(mouseEvent)

  const mouseDisplayTag = document.getElementById("mouseMove");
  mouseDisplayTag.innerText = `x: ${mouseEvent.clientX}, y: ${mouseEvent.clientY}`;
};

window.onkeydown = function (keyEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(keyEvent)

  const keyDisplayTag = document.getElementById("keyDown");
  keyDisplayTag.innerText = `key: ${keyEvent.key}, keyCode: ${keyEvent.keyCode}`;
};

window.onclick = function (clickEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(clickEvent)

  const clickDisplayTag = document.getElementById("buttonClick");
  clickDisplayTag.innerText = `clicked! x: ${clickEvent.clientX}, y: ${clickEvent.clientY}`;
};

// 上は、windowというブラウザそのものにイベントリスナーを定義したが、あるdom要素に対して定義することもできる。
const tomatoArea = document.getElementById("area");

tomatoArea.onmousemove = function (mouseEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(mouseEvent)

  const mouseDisplayTag = document.getElementById("tomatoMouseMove");
  mouseDisplayTag.innerText = `x: ${mouseEvent.clientX}, y: ${mouseEvent.clientY}`;
};

// NOTE: divタグには通常キーボードがフォーカスしないのでこれは機能しないが、inputタグがあればキーボードがフォーカスするため機能する。
tomatoArea.onkeydown = function (keyEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(keyEvent)

  const keyDisplayTag = document.getElementById("tomatoKeyDown");
  keyDisplayTag.innerText = `key: ${keyEvent.key}, keyCode: ${keyEvent.keyCode}`;
};

tomatoArea.onclick = function (clickEvent) {
  // これをコメントイン(//を消して実行可能にする)してどんなイベントが渡されるかみてみよう
  // console.log(clickEvent)

  const clickDisplayTag = document.getElementById("tomatoButtonClick");
  clickDisplayTag.innerText = `clicked! x: ${clickEvent.clientX}, y: ${clickEvent.clientY}`;
};
