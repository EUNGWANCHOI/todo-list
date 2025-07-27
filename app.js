let addBtn = document.getElementById("addTodo");
let inputBox = document.getElementById("inputField");
let todoList = document.getElementById("todos");

//함수 분리
const addTodo = () => {
  if (inputBox.value !== "") {
    //할 일 박스
    const todo = document.createElement("div");
    //체크박스
    const checkbox = document.createElement("input");
    //체크박스 타입 주기
    checkbox.type = "checkbox";
    //텍스트(할 일 내용)
    const text = document.createElement("span");
    //삭제버튼
    const delBtn = document.createElement("button");
    //삭제 텍스트 추가
    delBtn.textContent = "삭제";

    //입력 받은 내용 할 일 내용에 넣기
    text.textContent = inputBox.value;
    //입력창 비우기
    inputBox.value = "";
  }
  alert("할 일을 입력해주세요");
};

addBtn.addEventListener("click", addTodo);
