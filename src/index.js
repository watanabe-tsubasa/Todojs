import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById("complete-list").appendChild(completeTarget);
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    div.appendChild(returnButton);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // button(戻す)タグ生成
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    // 押されたボタンの親タグ(div)を未完了リストに追加
    const returnTarget = returnButton.parentNode;
    document.getElementById("incomplete-list").appendChild(returnTarget);
    div.removeChild(returnButton);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
