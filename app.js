// HTMl 태그들 JS에 인식시키기
let addBtn = document.getElementById("addTodo");
let inputBox = document.getElementById("inputBox");
let todoList = document.getElementById("todos");

// 할 일 생성 함수(화살표)
const createTodo = (content) => {
  const todo = document.createElement("div");
  todo.classList.add("todo-item"); // css에서 쓸 클래스 추가
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const text = document.createElement("span");
  text.textContent = content;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", () => todo.remove());
  ㅌ;
  todo.appendChild(checkBox);
  todo.appendChild(text);
  todo.appendChild(delBtn);

  return todo;
};

// 할 일 추가 함수(화살표)
const addTodo = () => {
  const value = inputBox.value.trim();
  if (value !== "") {
    const todoItem = createTodo(value);
    todoList.appendChild(todoItem);
    inputBox.value = "";
    return;
  }
  alert("할 일을 입력해주세요");
};

// 버튼 클릭 시 할 일 추가(이벤트리스너)
addBtn.addEventListener("click", addTodo);
