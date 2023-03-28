/* ----- データ ------*/
let todoList = [];
let filteredTodoList = [];
const TODO_LIST_KEY = "MY_TODO_LIST";

/* ----- DOM ------*/
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const textInput = document.getElementById("todoInput");
const todoListArea = document.getElementById("todoListArea");
const searchInput = document.getElementById("searchInput");

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

function displayFilteredTodo() {
  // クリア
  todoListArea.innerText = "";

  // 描画
  for (let i = 0; i < filteredTodoList.length; i++) {
    const todo = filteredTodoList[i];

    const todoItem = document.createElement("li");
    todoItem.innerText = todo;
    todoListArea.appendChild(todoItem);
  }
}

function resetCurrentFilter() {
  searchInput.value = "";
  filteredTodoList = todoList;
}

function addTodo() {
  const inputText = textInput.value;
  if (inputText.length <= 0) {
    return;
  }

  todoList.push(inputText);

  resetCurrentFilter();

  // 画面に表示
  displayFilteredTodo();

  // インプットフォームをクリア
  textInput.value = "";

  // ローカルストレージに保存
  saveInLocalStorage();
}

function clearTodo() {
  todoList = [];
  filteredTodoList = [];

  // 画面に表示
  displayFilteredTodo();

  // ローカルストレージを削除
  localStorage.removeItem(TODO_LIST_KEY);
}

function filterListBySearch(event) {
  console.log(todoList);
  filteredTodoList = todoList.filter((todoItem) =>
    todoItem.match(new RegExp(event.target.value))
  );
  displayFilteredTodo();
}

function initFilteredTodoList() {
  // filteredTodoListに詰め替え
  filteredTodoList = todoList;
}

/* ----- イベントリスナー ------*/
addButton.onclick = addTodo;
clearButton.onclick = clearTodo;
searchInput.onchange = filterListBySearch;

// 初回ロード
loadFromLocalStorage();
// 最初はfilteredTodoListにtodoListを入れる
initFilteredTodoList();
// 初回描画
displayFilteredTodo();
