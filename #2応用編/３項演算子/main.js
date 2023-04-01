/* ----- データ ------*/
let userName = null;

/* ----- DOM ------*/
const userNameInput = document.getElementById("userNameInput");
const userNameDisplay = document.getElementById("userNameDisplay");

/* ----- 関数 ------*/
function showUserName() {
  // userNameがnullならゲストという名前にしたい
  userNameDisplay.innerText = userName;
}

console.log(userNameInput);
/*--- イベントリスナー ---- */
userNameInput.onchange = function (event) {
  userName = event.target.value;
  showUserName();
};

/*--- 初期化処理 ---- */
showUserName();
