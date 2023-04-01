/*----  データ置き場 ------*/
let currentBoard = [null, null, null, null, null, null, null, null, null]; // 3x3の配列を一次元で表現。
let currentPlayerTurn = "X"; // "X" or "O"

/*----  DOM　 ------*/
const button1_1 = document.getElementById("1_1");
const button1_2 = document.getElementById("1_2");
const button1_3 = document.getElementById("1_3");
const button2_1 = document.getElementById("2_1");
const button2_2 = document.getElementById("2_2");
const button2_3 = document.getElementById("2_3");
const button3_1 = document.getElementById("3_1");
const button3_2 = document.getElementById("3_2");
const button3_3 = document.getElementById("3_3");
const statusText = document.getElementById("statusText");
const resetButton = document.getElementById("resetButton");

/*----  関数 ------*/
function clearAllButtonClickListener() {
  button1_1.onclick = undefined;
  button1_2.onclick = undefined;
  button1_3.onclick = undefined;
  button2_1.onclick = undefined;
  button2_2.onclick = undefined;
  button2_3.onclick = undefined;
  button3_1.onclick = undefined;
  button3_2.onclick = undefined;
  button3_3.onclick = undefined;
}

function judge() {
  // アルゴリズム:
  // 縦横斜めの連続した組み合わせをすべてリストとして保持する。
  const lines = [
    [0, 1, 2], // 1段目横
    [3, 4, 5], // 2段目横
    [6, 7, 8], // 3段目横
    [0, 3, 6], // \　右下ななめ
    [1, 4, 7], // 中央縦
    [2, 5, 8], // /　左下ななめ
    [0, 4, 8], // 左縦
    [2, 4, 6], // 右縦
  ];
  // 組み合わせ候補をループで回し、１つ１つの場合でマークが一致しているかどうかチェックする。
  // 例えば0と1と2が同じマークであれば、そのプレイヤーの勝ち。
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const a = line[0];
    const b = line[1];
    const c = line[2];

    // a == b かつ b == c であれば　 a == c なので２つだけ比較すればOK!
    // ただし最初はすべてnullが入っているため、null出ない場合のみのみチェックする。でないとすべてnullなら a==bかつb==cを満たしてしまうため、勝利してしまう。
    if (
      currentBoard[a] !== null &&
      currentBoard[b] !== null &&
      currentBoard[c] !== null &&
      currentBoard[a] === currentBoard[b] &&
      currentBoard[b] === currentBoard[c]
    ) {
      // 勝利条件に一致すれば結果を表示
      resultText.innerText = `プレイヤー: ${currentPlayerTurn}の勝ち　!`;

      // これ以上操作できないように、クリックリスナーを削除する。
      clearAllButtonClickListener();

      // リセットボタンを表示
      resetButton.hidden = false;
    }
  }
  // 勝利条件に一致しなければ　なにもしない
  return null;
}

function showBoard() {
  statusText.innerText = `現在のプレイヤー: ${currentPlayerTurn}`;

  // ３項演算子使えるならきれいにかける。これを機会に学んでみるのもあり
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  button1_1.innerText = currentBoard[0] !== null ? currentBoard[0] : "";
  button1_2.innerText = currentBoard[1] !== null ? currentBoard[1] : "";
  button1_3.innerText = currentBoard[2] !== null ? currentBoard[2] : "";
  button2_1.innerText = currentBoard[3] !== null ? currentBoard[3] : "";
  button2_2.innerText = currentBoard[4] !== null ? currentBoard[4] : "";
  button2_3.innerText = currentBoard[5] !== null ? currentBoard[5] : "";
  button3_1.innerText = currentBoard[6] !== null ? currentBoard[6] : "";
  button3_2.innerText = currentBoard[7] !== null ? currentBoard[7] : "";
  button3_3.innerText = currentBoard[8] !== null ? currentBoard[8] : "";

  // 3高演算子使わない場合はifを使う
  // if (currentBoard[0] !== null) {
  //   button1_1.innerText = currentBoard[0];
  // } else {
  //   button1_1.innerText = "";
  // }
  // if (currentBoard[1] !== null) {
  //   button1_2.innerText = currentBoard[1];
  // } else {
  //   button1_2.innerText = "";
  // }
  // if (currentBoard[2] !== null) {
  //   button1_3.innerText = currentBoard[2];
  // } else {
  //   button1_3.innerText = "";
  // }
  // if (currentBoard[3] !== null) {
  //   button2_1.innerText = currentBoard[3];
  // } else {
  //   button2_1.innerText = "";
  // }
  // if (currentBoard[4] !== null) {
  //   button2_2.innerText = currentBoard[4];
  // } else {
  //   button2_2.innerText = "";
  // }
  // if (currentBoard[5] !== null) {
  //   button2_3.innerText = currentBoard[5];
  // } else {
  //   button2_3.innerText = "";
  // }
  // if (currentBoard[6] !== null) {
  //   button3_1.innerText = currentBoard[6];
  // } else {
  //   button3_1.innerText = "";
  // }
  // if (currentBoard[7] !== null) {
  //   button3_2.innerText = currentBoard[7];
  // } else {
  //   button3_2.innerText = "";
  // }
  // if (currentBoard[8] !== null) {
  //   button3_3.innerText = currentBoard[8];
  // } else {
  //   button3_3.innerText = "";
  // }
}

function check(boardIndex, player) {
  currentBoard[boardIndex] = player;

  judge();

  // プレイヤー交代
  // ３項演算子使えるときれいに書ける
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  currentPlayerTurn = currentPlayerTurn === "X" ? "O" : "X";

  // 3高演算子使わない場合はifを使う
  // if (currentPlayerTurn === "X") {
  //   currentPlayerTurn = "O";
  // } else {
  //   currentPlayerTurn = "X";
  // }
  showBoard();
}

function reload() {
  // 画面のリロード
  window.location.reload();
}

/*----  イベントリスナー設定 ------*/
button1_1.onclick = function () {
  check(0, currentPlayerTurn);
};
button1_2.onclick = function () {
  check(1, currentPlayerTurn);
};
button1_3.onclick = function () {
  check(2, currentPlayerTurn);
};
button2_1.onclick = function () {
  check(3, currentPlayerTurn);
};
button2_2.onclick = function () {
  check(4, currentPlayerTurn);
};
button2_3.onclick = function () {
  check(5, currentPlayerTurn);
};
button3_1.onclick = function () {
  check(6, currentPlayerTurn);
};
button3_2.onclick = function () {
  check(7, currentPlayerTurn);
};
button3_3.onclick = function () {
  check(8, currentPlayerTurn);
};

resetButton.onclick = reload;

/*----  初期化処理 ------*/
showBoard();
