/*----  データ置き場 ------*/
let achieverPoint = 0;
let explorerPoint = 0;
let socializerPoint = 0;
let killerPoint = 0;

/*----  DOM　 ------*/
// idがqから始まるDOMをすべて取得する
// https://1-notes.com/javascript-wildcard-with-queryselectorall/
const allRadioInputs = document.querySelectorAll(`[id^='q']`);
const submitButton = document.getElementById("submitButton");
const questionPage = document.getElementById("questionPage");
const resultPage = document.getElementById("resultPage");
const resultText = document.getElementById("resultText");

/*----  関数 ------*/
function showResult() {
  questionPage.hidden = true;
  resultPage.hidden = false;

  // achieverPoint と explorerPoint　と socializerPoint と killerPointから一番ポイントが高いものを判別する。
  const typePointList = [
    { type: "achiever", point: achieverPoint },
    { type: "explorer", point: explorerPoint },
    { type: "socializer", point: socializerPoint },
    { type: "killer", point: killerPoint },
  ];
  // Arrayのもつsort関数を使って順番に並べる。これは破壊的関数なので、直接もとの配列が変更される。
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  typePointList.sort(function (a, b) {
    return b.point - a.point;
  });
  // 日本語変換オブジェクト
  const typeJp = {
    achiever: "アチーバー",
    explorer: "エクスプローラー",
    socializer: "ソーシャライザー",
    killer: "キラー",
  };

  resultText.innerText = `あなたのプレイヤータイプは${
    typeJp[typePointList[0].type]
  }です。`;

  console.log(typePointList);
}

function judge() {
  for (let i = 0; i < allRadioInputs.length; i++) {
    const radio = allRadioInputs[i];

    // ラジオボタンDOMにはcheckedという特殊な属性があり、これがtrueならチェックされている状態
    if (radio.checked) {
      // input系のDOMはvalueという属性を持ちそこにinputタグのvalueで指定した値が入る

      // switch case文を習っている人はこちら。
      switch (radio.value) {
        case "s":
          socializerPoint += 1; // socializerPoint++でも可
          break;
        case "k":
          killerPoint += 1;
          break;
        case "e":
          explorerPoint += 1;
          break;
        case "a":
          achieverPoint += 1;
          break;
        default:
          // ここに来るのはありえないはず。エラー文出しとく。
          console.error(
            `radio.valueがが範囲外の値です。 radio.value: ${radio.value}`
          );
      }

      // switch case文を習っていない人はこちら
      // if (radio.value === "s") {
      //   socializerPoint += 1;
      // } else if (radio.value === "k") {
      //   killerPoint += 1;
      // } else if (radio.value === "e") {
      //   explorerPoint += 1;
      // } else if (radio.value === "a") {
      //   achieverPoint += 1;
      // } else {
      //   // ここに来るのはありえないはず。エラー文出しとく。
      //   console.error(
      //     `radio.valueがが範囲外の値です。 radio.value: ${radio.value}`
      //   );
      // }
    }
  }

  showResult();
}

/*----  イベントリスナー設定 ------*/
submitButton.onclick = judge;

/*----  初期化処理 ------*/
// 今回は特になし
