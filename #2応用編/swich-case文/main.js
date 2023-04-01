/*--- データ --- */
let mode = "standard"; // standard or magic or guard;
let currentHp = 100;

/*--- DOM --- */
const enemyHpDisplay = document.getElementById("enemyHpDisplay");
const actionButton = document.getElementById("actionButton");
const modeSelection = document.getElementById("modeSelection");

/*---関数 --- */
function showCurrentHp() {
  enemyHpDisplay.innerText = currentHp;
}

function attack() {
  switch (mode) {
    case "standard":
      currentHp -= 10;
      break;
    case "magic":
      currentHp -= Math.floor(Math.random() * 20) + 1; // 1 ~ 20でランダム
      break;
    case "guard":
      // 何もしない
      break;
    default:
    // modeが上記以外だった場合
    // 何もしない
  }

  showCurrentHp();
}

/*--- イベントリスナー --- */
modeSelection.onchange = function (event) {
  console.log(event);
  mode = event.target.value;
};

actionButton.onclick = attack;

/*--- 初期化処理 --- */
showCurrentHp();
