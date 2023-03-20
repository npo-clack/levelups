/* ----- データ ------*/
let todoList = [];
const TODO_LIST_KEY = "MY_TODO_LIST";

/* ----- DOM ------*/
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const textInput = document.getElementById("todoInput");
const todoListArea = document.getElementById("todoListArea");

/* ----- 関数　------*/
function saveInLocalStorage() {
  // ローカルストレージにいれるには、一旦文字列にしないといけない。
  // そこでJSON.stringify()をつかって、構造を保ったまま文字列化する。
  // JSON.parse()でもとのオブジェクトおよび配列として取り出せる。
  const textTodoList = JSON.stringify(todoList);
  localStorage.setItem(TODO_LIST_KEY, textTodoList);
}

function loadFromLocalStorage() {
  const textTodoList = localStorage.getItem(TODO_LIST_KEY);
  // まだ何も保存されていなければ何もしない。
  if (!textTodoList) {
    return;
  }

  // todoListを更新する。
  todoList = JSON.parse(textTodoList);
}

function clearLocalStorage() {
  localStorage.removeItem(TODO_LIST_KEY);
}

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

  // ローカルストレージに保存
  saveInLocalStorage();
}

function clearTodo() {
  todoList = [];

  // 画面に表示
  displayTodo();

  // ローカルストレージを削除
  clearLocalStorage();
}

/* ----- イベントリスナー ------*/
addButton.onclick = addTodo;
clearButton.onclick = clearTodo;

// 初回ロード
loadFromLocalStorage();
// 初回描画
displayTodo();
