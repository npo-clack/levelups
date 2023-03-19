console.log("js読み込み start");

const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");
const elements = document.getElementsByClassName("elements");
// getElementsByTagNameはあまり使わない
// const divs = document.getElementsByTagName("div");

element1.innerText = "innerTextで新しくelement1に文字列を代入";
element2.innerHTML = "innerHTMLで新しくelement2に文字列を代入";
element3.innerText = "appendChildを使えば他のタグを子要素として追加できる";

// appendChild用のタグを生成
const newChildTag1 = document.createElement("span");
// 生成したタグに文章追加
newChildTag1.innerText = "追加要素１";
// appendChild用のタグを生成
const newChildTag2 = document.createElement("span");
// 生成したタグに文章追加
newChildTag2.innerText = "追加要素2";
// appendChildで生成したタグを追加
element3.appendChild(newChildTag1);
element3.appendChild(newChildTag2);

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  element.innerText = "クラスで一気にタグを編集できる。";
}

console.log("js読み込み done");
